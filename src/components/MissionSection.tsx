import type { Mission } from "../data/missions";

interface MissionSectionProps {
  mission: Mission;
}

export default function MissionSection({ mission }: MissionSectionProps) {
  return (
    <article
      className={`panel mission-section ${mission.status}`}
      data-mission={mission.id}
    >
      <div className="mission-bg-year">{mission.yearLabel}</div>
      <div className="mission-content">
        <div className="mission-text">
          <span className="mission-year">{mission.yearLabel}</span>
          <h2 className="mission-name">{mission.name}</h2>
          <p className="mission-tagline">{mission.tagline}</p>
          {mission.status === "future" && (
            <span className="mission-badge">Planned</span>
          )}
          <p className="mission-description">{mission.description}</p>
          <ul className="mission-facts">
            {mission.facts.map((fact, i) => (
              <li key={i}>{fact}</li>
            ))}
          </ul>
        </div>
        <div className="mission-image-wrap">
          <img
            className="mission-image"
            src={mission.image}
            alt={`${mission.name}: ${mission.tagline}`}
            loading="lazy"
          />
        </div>
      </div>
    </article>
  );
}
