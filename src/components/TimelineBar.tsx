import { missions } from "../data/missions";
import "../styles/timeline.css";

interface TimelineBarProps {
  progress: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
}

const TICK_COUNT = 80;

export default function TimelineBar({
  progress,
  activeIndex,
  onDotClick,
}: TimelineBarProps) {
  return (
    <nav className="timeline-bar" aria-label="Mission timeline">
      <div className="timeline-track">
        <div className="timeline-ticks">
          {Array.from({ length: TICK_COUNT }).map((_, i) => (
            <div key={i} className="timeline-tick" />
          ))}
        </div>
        <div
          className="timeline-progress"
          style={{ width: `${progress * 100}%` }}
        />
        <div className="timeline-dots">
          {missions.map((mission, i) => (
            <button
              key={mission.id}
              className={`timeline-dot ${mission.status === "future" ? "future" : ""} ${i === activeIndex ? "active" : ""}`}
              onClick={() => onDotClick(i)}
              aria-label={`${mission.name} (${mission.yearLabel})`}
            >
              <span className="timeline-dot-label">{mission.yearLabel}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
