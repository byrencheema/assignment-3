interface VisionPoint {
  title: string;
  body: string;
}

const points: VisionPoint[] = [
  {
    title: "Send more small robots",
    body: "Instead of betting everything on one big rover every decade, I think we should be sending swarms of smaller, cheaper robots. Ingenuity was a tech demo that ended up flying 72 times. Imagine dozens of those mapping caves, testing soil, and scouting landing sites years before any crew arrives.",
  },
  {
    title: "Live underground",
    body: "Mars has lava tubes that could be hundreds of meters wide. They block radiation, stay a stable temperature, and you don't have to build walls. The first people living on Mars will probably be living in caves, and honestly that makes more sense than hauling a giant dome across space.",
  },
  {
    title: "Work together on it",
    body: "The ISS works because multiple countries share the cost and the work. Mars should be the same. NASA, ESA, JAXA, ISRO, SpaceX — everyone brings something different to the table. A shared program is also harder to cancel when a new administration comes in.",
  },
  {
    title: "Bring the samples home",
    body: "Perseverance has been sealing rock samples into tubes and leaving them on the ground for years now, but there's still no confirmed plan to pick them up. Getting those samples to Earth labs should be the top priority. We can only learn so much with instruments that had to survive a rocket launch.",
  },
  {
    title: "Look before we contaminate",
    body: "If there's life hiding in underground water on Mars, even just microbes, we need to find it before we start building on top of it. That means being careful about where we drill and what we dump. It's a basic precaution for what could be the biggest discovery in history.",
  },
];

export default function VisionSection() {
  return (
    <section className="panel vision-section">
      <div className="vision-content">
        <span className="vision-label">My Perspective</span>
        <h2 className="vision-title">Where I Think This Should Go</h2>
        <p className="vision-intro">
          After going through fifty years of Mars missions, here's what I
          actually think should happen next.
        </p>
        <div className="vision-grid">
          {points.map((point, i) => (
            <div key={i} className="vision-card">
              <h3 className="vision-card-title">{point.title}</h3>
              <p className="vision-card-body">{point.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
