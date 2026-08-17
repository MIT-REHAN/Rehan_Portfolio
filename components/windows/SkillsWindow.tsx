import { SKILLS } from "@/lib/data";

function Row({ title, items }: { title: string; items: string[] }) {
  return (
    <>
      <div className="xp-h2">{title}</div>
      <div>
        {items.map((i) => (
          <span className="chip" key={i}>
            {i}
          </span>
        ))}
      </div>
    </>
  );
}

export default function SkillsWindow() {
  return (
    <div className="p-4">
      <div className="xp-h1">Skills & Tools</div>
      <Row title="Languages" items={SKILLS.languages} />
      <Row title="Frontend" items={SKILLS.frontend} />
      <Row title="Backend" items={SKILLS.backend} />
      <Row title="Database" items={SKILLS.database} />
      <Row title="Cloud & DevOps" items={SKILLS.cloudDevOps} />
      <Row title="Tools" items={SKILLS.tools} />
      <Row title="Currently Exploring" items={SKILLS.exploring} />
      <Row title="Soft Skills" items={SKILLS.soft} />
      <Row title="Languages Spoken" items={SKILLS.spoken} />
    </div>
  );
}
