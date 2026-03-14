import { useRef, useEffect } from "react";
import gsap from "gsap";
import "../styles/intro.css";

interface IntroScreenProps {
  onComplete: () => void;
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const completedRef = useRef(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      if (!completedRef.current) {
        completedRef.current = true;
        onComplete();
      }
      if (overlayRef.current) overlayRef.current.classList.add("hidden");
      return;
    }

    gsap.set([titleRef.current, subtitleRef.current, hintRef.current], {
      opacity: 0,
      y: 20,
    });
    gsap.set(bgRef.current, { opacity: 0, scale: 1.15 });

    const tl = gsap.timeline();

    tl.to(bgRef.current, {
      opacity: 0.6,
      scale: 1,
      duration: 1.5,
      ease: "power2.out",
    })
      .to(
        titleRef.current,
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      )
      .to(
        subtitleRef.current,
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      )
      .to(hintRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.1");

    const dismiss = () => {
      if (completedRef.current) return;
      completedRef.current = true;
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          if (overlayRef.current) overlayRef.current.classList.add("hidden");
          onComplete();
        },
      });
    };

    const onScroll = () => dismiss();
    const onClick = () => dismiss();

    window.addEventListener("wheel", onScroll, { once: true });
    window.addEventListener("touchstart", onClick, { once: true });
    overlayRef.current?.addEventListener("click", onClick, { once: true });

    return () => {
      tl.kill();
      window.removeEventListener("wheel", onScroll);
      window.removeEventListener("touchstart", onClick);
    };
  }, [onComplete]);

  return (
    <div ref={overlayRef} className="intro-overlay">
      <div
        ref={bgRef}
        className="intro-bg"
        style={{ backgroundImage: "url(/images/mars-hero.webp)" }}
      />
      <div className="intro-content">
        <h1 ref={titleRef} className="intro-title">
          Mars
        </h1>
        <p ref={subtitleRef} className="intro-subtitle">
          A History of Exploration
        </p>
      </div>
      <div ref={hintRef} className="intro-scroll-hint">
        Scroll to explore
      </div>
    </div>
  );
}
