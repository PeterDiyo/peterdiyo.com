import heroImg from "../assets/heroport-svg.svg";
import { FaGithubSquare, FaLinkedin, FaDiscord } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="py-20 gap-6 align-element" id="home">
      <div className=" grid md:grid-cols-2 md:ml-0 items-center gap-8 ">
        <article>
          <h1 className="text-7xl font-bold tracking-wider text-gray-200">
            I'm Peter Diyo
          </h1>
          <p className="mt-10 text-3xl text-gray-300 capitalize tracking-wide">
            Software engineer / developer
          </p>
          <p className="mt-4 text-lg text-slate-400 capitalize tracking-wide">
            From Brainstorm to Clicks: Ideas into reality, bringing Interactive
            Ideas to Life, bridging the Gap.
          </p>
          <div className="flex gap-x-4 mt-12">
            <a href="https://github.com/PeterDiyo">
              <FaGithubSquare className="h-8 w-8 text-gray-200 hover:text-gray duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/peter-diyo-a38451289/">
              <FaLinkedin className="h-8 w-8 text-gray-200 hover:text-gray duration-300" />
            </a>
            <a href="https://discord.com/channels/@peterdiyo">
              <FaDiscord className="h-8 w-8 text-gray-200 hover:text-gray duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block ml-20">
          <img src={heroImg} className="h-96 lg:h-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
