import { skills } from "../data";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";
const Skills = () => {
  return (
    <section className="py-10 align-element " id="skills">
      <SectionTitle text="technologies I use" />
      <div className="py-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills;
