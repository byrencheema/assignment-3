import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { missions } from "../data/missions";
import MissionSection from "./MissionSection";
import Credits from "./Credits";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollProps {
  enabled: boolean;
  onProgress: (progress: number) => void;
  onActiveIndex: (index: number) => void;
  scrollTriggerRef: React.MutableRefObject<ScrollTrigger | null>;
}

export default function HorizontalScroll({
  enabled,
  onProgress,
  onActiveIndex,
  scrollTriggerRef,
}: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const stableOnProgress = useRef(onProgress);
  const stableOnActiveIndex = useRef(onActiveIndex);
  stableOnProgress.current = onProgress;
  stableOnActiveIndex.current = onActiveIndex;

  useEffect(() => {
    if (!enabled || !containerRef.current) return;
    if (window.innerWidth <= 768) return;

    const container = containerRef.current;
    const panels = gsap.utils.toArray<HTMLElement>(".panel", container);
    const numMissions = missions.length;

    const ctx = gsap.context(() => {
      const tween = gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 0.3,
          snap: {
            snapTo: 1 / (panels.length - 1),
            duration: { min: 0.1, max: 0.3 },
            delay: 0,
          },
          end: () => "+=" + window.innerWidth * (panels.length - 1),
          onUpdate: (self) => {
            const p = self.progress;
            const panelIndex = Math.round(p * (panels.length - 1));
            const barProgress = Math.min(panelIndex / (numMissions - 1), 1);
            stableOnProgress.current(barProgress);
            stableOnActiveIndex.current(Math.min(panelIndex, numMissions - 1));
          },
        },
      });

      scrollTriggerRef.current = tween.scrollTrigger!;

      panels.forEach((panel, i) => {
        const textEls = panel.querySelectorAll(
          ".mission-year, .mission-name, .mission-tagline, .mission-badge, .mission-description, .mission-facts li, .credits-title, .credits-body, .credits-meta"
        );

        if (i === 0) {
          gsap.set(textEls, { opacity: 0, y: 20 });
          gsap.to(textEls, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.06,
            ease: "power2.out",
            delay: 0.2,
          });
        } else {
          gsap.set(textEls, { opacity: 0, y: 20 });
          ScrollTrigger.create({
            trigger: panel,
            containerAnimation: tween,
            start: "left 60%",
            onEnter: () => {
              gsap.to(textEls, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.06,
                ease: "power2.out",
              });
            },
          });
        }
      });
    });

    return () => {
      ctx.revert();
      scrollTriggerRef.current = null;
    };
  }, [enabled, scrollTriggerRef]);

  return (
    <div ref={containerRef} className="horizontal-scroll-container">
      {missions.map((mission) => (
        <MissionSection key={mission.id} mission={mission} />
      ))}
      <Credits />
    </div>
  );
}
