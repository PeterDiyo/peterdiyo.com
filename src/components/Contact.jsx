import {
  FaEnvelope,
  FaPhone,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { links } from "../data";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  return (
    <>
      <div className="align-element" id="contact">
        <SectionTitle text="Contact Me" />
        <div className="bg-gray-900 my-10 py-10 px-6 lg:px-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Email Section */}
          <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105">
            <h3 className="text-xl text-gray-100 font-bold mb-2">Email</h3>
            <div className="flex items-center">
              <FaEnvelope className="text-gray-100 text-3xl md:text-4xl mr-3 transition duration-300 hover:text-gray-400" />
              <p className="text-gray-300 text-sm md:text-lg">
                princediyo93@gmail.com
              </p>
            </div>
          </div>

          {/* Phone Section */}
          <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105">
            <h3 className="text-xl text-gray-100 font-bold mb-2">Phone</h3>
            <div className="flex items-center">
              <FaPhone className="text-gray-100 text-3xl md:text-4xl mr-3 transition duration-300 hover:text-gray-400" />
              <p className="text-gray-300 text-sm md:text-lg">
                +91 90425 67435 <br /> +260 777 397 298
              </p>
            </div>
          </div>

          {/* Social Connect Section */}
          <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105">
            <h3 className="text-xl text-gray-100 font-bold mb-5">
              Let's Connect
            </h3>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/peter-diyo-a38451289/"
                className="text-gray-100 text-3xl md:text-4xl hover:text-gray-400 transition duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/PeterDiyo"
                className="text-gray-100 text-3xl md:text-4xl hover:text-gray-400 transition duration-300"
              >
                <BsGithub />
              </a>
              <a
                href="https://discord.com/channels/@peterdiyo"
                className="text-gray-100 text-3xl md:text-4xl hover:text-gray-400 transition duration-300"
              >
                <FaDiscord />
              </a>
              <a
                href="https://www.instagram.com/diyopeter?igsh=MWwwcTRybmZ5dTAycg=="
                className="text-gray-100 text-3xl md:text-4xl hover:text-gray-400 transition duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-950 text-gray-300 py-8 text-center relative">
        <div className="hidden sm:flex gap-x-3 items-center justify-center my-6 space-x-24">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide text-gray-100 hover:text-gray-300 transition duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>

        <div className="py-2 text-sm">
          <p className="text-gray-400">
            Designed and developed by Peter Diyo. the_SWE
          </p>
          <p className="mt-2 text-gray-400">
            &copy; {new Date().getFullYear()} Peter Diyo. All rights reserved.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full flex justify-center items-center pb-6">
          <div className="h-1 w-36 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-pulse"></div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
