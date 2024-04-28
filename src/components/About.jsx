import aboutSvg from "../assets/about-svg.svg";
import Education from "./Education";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="py-10 align-element bg-gray-900" id="about">
      <div className=" grid md:grid-cols-2 items-center gap-8 mb-8">
        <img src={aboutSvg} className="w-full h-64 " />
        <article>
          <SectionTitle text="About me" />
          <p className="text-gray-300 mt-8 leading-loose">
            Hello, I am Peter Diyo, a passionate learner and Software Engineer.
            With strong problem solving skills, I have developed a strong
            expertise in Software Engineering. <br />I specialize in Software
            Development and have worked on projects such as the ones in my
            projects section below. My approach to work is Collaborative,
            detail-oriented, proactive and result-driven, emphasizing Technical
            Proficiency, Strong Communication and Analytical Thinking.
            <br />I continuously strive to stay updated with the latest trends
            and advancements in the industry.
          </p>
        </article>
      </div>
      <Education />
    </section>
  );
};
export default About;
