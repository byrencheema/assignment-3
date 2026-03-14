import { useState, useCallback, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IntroScreen from "./components/IntroScreen";
import HorizontalScroll from "./components/HorizontalScroll";
import TimelineBar from "./components/TimelineBar";
import "./styles/global.css";
import "./styles/mission.css";

const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  const handleDotClick = useCallback((index: number) => {
    const st = scrollTriggerRef.current;
    if (!st) return;
    const numPanels = 15;
    const targetProgress = index / (numPanels - 1);
    const scrollTo = st.start + (st.end - st.start) * targetProgress;
    window.scrollTo({ top: scrollTo, behavior: "smooth" });
  }, []);

  return (
    <>
      <IntroScreen onComplete={handleIntroComplete} />
      <HorizontalScroll
        enabled={introComplete}
        onProgress={setProgress}
        onActiveIndex={setActiveIndex}
        scrollTriggerRef={scrollTriggerRef}
      />
      {introComplete && !isMobile && (
        <TimelineBar
          progress={progress}
          activeIndex={activeIndex}
          onDotClick={handleDotClick}
        />
      )}
    </>
  );
}
