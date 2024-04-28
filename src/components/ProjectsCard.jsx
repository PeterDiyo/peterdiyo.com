import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectsCard = ({ url, img, github, title, text }) => {
  return (
    <article className="bg-slate-800 rounded-lg shadow-xl hover:shadow-xl duration-300">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64"
      />
      <div className="capitalize p-8">
        <h2 className="text-xl tracking-wide font-medium text-gray-200">
          {title}
        </h2>
        <p className="mt-4 text-gray-400 leading-loose">{text}</p>
        <div className="mt-4 flex gap-x-4">
          <a href={url}>
            <TbWorldWww className="h-8 w-8 text-gray-200 hover:text-gray-500 duration-300" />
          </a>
          <a href={github}>
            <FaGithubSquare className="h-8 w-8 text-gray-200 hover:text-gray-500 duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};
export default ProjectsCard;
