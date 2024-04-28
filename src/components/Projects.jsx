import ProjectsCard from "./ProjectsCard";
import { projects } from "../data";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <section className="py-10 align-element" id="projects">
      <SectionTitle text="my projects" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>

      <a
        href="https://diyo-projects.netlify.app"
        className="text-gray-200 font-bold inline-block animate-scale"
      >
        <button className="bg-gray-800 hover:bg-gray-700 rounded-md py-2 px-4 inline-block ml-6">
          View All My Projects
        </button>
      </a>
    </section>
  );
};
export default Projects;
