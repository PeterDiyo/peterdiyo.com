import {
  FaEnvelope,
  FaPhone,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import { BsGithub } from "react-icons/bs";
import { links } from "../data";

const Contact = () => {
  return (
    <>
      <div className="align-element" id="contact">
        <SectionTitle text="Contact Me" />
        <div className="bg-gray-900 my-7 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-900 rounded-lg overflow-hidden p-4 flex flex-col items-center">
            <h3 className="text-xl text-gray-200 font-semibold mb-1">Email</h3>
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md p-4 flex items-center">
              <FaEnvelope className="text-gray-300 mr-2" />
              <p className="text-gray-200 mb-2">princediyo93@gmail.com</p>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg overflow-hidden p-4 flex flex-col items-center">
            <h3 className="text-xl text-gray-200 font-semibold mb-2">Phone</h3>
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md p-4 flex items-center">
              <FaPhone className="text-gray-300 mr-2" />
              <p className="text-gray-200 mb-2">
                +91 90425 67435, <br /> +260 777 397 298
              </p>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md p-4 flex flex-col items-center">
            <h3 className="text-xl text-gray-200 font-semibold mb-5">
              Let's Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/peter-diyo-a38451289/"
                className="text-gray-300 hover:text-gray-500"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/PeterDiyo"
                className="text-gray-300 hover:text-gray-500"
              >
                <BsGithub />
              </a>
              <a
                href="https://discord.com/channels/@peterdiyo"
                className="text-gray-300 hover:text-gray-500"
              >
                <FaDiscord />
              </a>
              <a
                href="https://x.com/peter_diyo?t=GjznmSILO2rOpWbh9zFdHA&s=09"
                className="text-gray-300 hover:text-gray-500"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/diyopeter?igsh=MWwwcTRybmZ5dTAycg=="
                className="text-gray-300 hover:text-gray-500"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 text-gray-300 py-1 text-center">
        <div className="hidden sm:flex gap-x-3 items-center justify-center my-4 space-x-32">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide text-gray-100 hover:text-gray-300 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>

        <p className="py-5">
          &copy; {new Date().getFullYear()} Peter Diyo. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Contact;
