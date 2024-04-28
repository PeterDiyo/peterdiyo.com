import DiyoMix from "./assets/projects/diyomix.png";
import CG from "./assets/projects/CG.png";
import imgs from "./assets/projects/imgs.png";
import menu from "./assets/projects/menu.png";
import Viz from "./assets/projects/Visualizer.png";

import Literature from "./assets/GalleryImages/lit.jpg";
import Java from "./assets/GalleryImages/jav.jpg";
import Eng from "./assets/GalleryImages/eng.jpg";
import ThreeLit from "./assets/GalleryImages/three.jpg";
import Poem from "./assets/GalleryImages/1poem.jpg";
import MathO from "./assets/GalleryImages/mathO.jpg";
import ZamIR from "./assets/GalleryImages/ZamIR.jpg";
import Nfair from "./assets/GalleryImages/Nfair.jpg";
import Rfair from "./assets/GalleryImages/Rfair.jpg";
import Headboy from "./assets/GalleryImages/Headboy.jpg";
import SII from "./assets/GalleryImages/SII.jpg";

import { nanoid } from "nanoid";
import { DiMongodb, DiMysql } from "react-icons/di";
import { FaJs, FaNodeJs, FaPython, FaReact } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
  { id: nanoid(), href: "#honors", text: "honors" },
  { id: nanoid(), href: "#contact", text: "contact" },
];

export const skills = [
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-gray-300" />,
    text: "Advanced proficiency in React, a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Nodejs & Express",
    icon: <FaNodeJs className="h-16 w-16 text-gray-300" />,
    text: "Node.js + Express for back-end development, building real-time features and applications.",
  },
  {
    id: nanoid(),
    title: "MongoDB",
    icon: <DiMongodb className="h-16 w-16 text-gray-300" />,
    text: "Experienced in utilizing MongoDB, a NoSQL database known for its scalability and flexibility.",
  },
  {
    id: nanoid(),
    title: "mySQL",
    icon: <DiMysql className="h-16 w-16 text-gray-300" />,
    text: "Proficient in MySQL, a popular relational database management system. Bulding secure and efficient applications that require structured data management and complex queries.",
  },
  {
    id: nanoid(),
    title: "JavaScript",
    icon: <FaJs className="h-16 w-16 text-gray-300" />,
    text: "Advanced knowledge in JS for software development; proficient JS frameworks such as the MERN stack.",
  },
  {
    id: nanoid(),
    title: "Python",
    icon: <FaPython className="h-16 w-16 text-gray-300" />,
    text: "A strong understanding in python for problem solving and competitve programming.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: DiyoMix,
    url: "https://diyomix.netlify.app/",
    github: "https://github.com/PeterDiyo/DiyoMix",
    title: "DiyoMix",
    text: "With a flick of your finger, you'll unlock a treasure trove of enchanting drink recipes that'll make your taste buds dance and your friends jump with joy. Get ready to shake up your mixology game with DiyoMix.",
  },
  {
    id: nanoid(),
    img: CG,
    url: "https://color-generator-diyo.netlify.app/",
    github: "https://github.com/PeterDiyo/Color-Generator",
    title: "ease Colors",
    text: "A React Application that generates colors, provides percentages of color tints and hex codes for each color generated. Improve your web designs with only as single click check it out.",
  },
  {
    id: nanoid(),
    img: imgs,
    url: "https://imagesearch-diyo.netlify.app/",
    github: "https://github.com/PeterDiyo/Search-Images-App",
    title: "search images",
    text: "Quickly get any images by simply searching for a specific image, whether for your personal projects or your designs, discover thousands of images that might be useful to you. choose dark or light mode.",
  },
  {
    id: nanoid(),
    img: Viz,
    url: "https://peterdiyo.github.io/Pathfinding_Visualizer/",
    github: "https://github.com/PeterDiyo/Pathfinding_Visualizer",
    title: "Pathfinding Vizualizer (Dijkstra)",
    text: "Starting point (source) is green box and ending point (target) is a red box, draw walls to make routes and click on the visualize dijkstra algorithm button to get the shortest path.",
  },
  {
    id: nanoid(),
    img: menu,
    url: "https://menu-diyo.netlify.app/",
    github: "https://github.com/PeterDiyo/menu",
    title: "ease menu",
    text: "easily filter your food menu preferences with only a single click whether you are looking for your favorite lunch menu, or you want to try out some delicious zambian dishes.",
  },
];

export const galleryData = [
  {
    id: nanoid(),
    imageUrl: Literature,
    description: "Head of Literature award IR students day - 2024",
  },
  {
    id: nanoid(),
    imageUrl: Java,
    description: "Java 17 Masterclass from Udemy - 2024",
  },
  {
    id: nanoid(),
    imageUrl: ThreeLit,
    description:
      "Won Essay Writing(first place) and Debate(Third place) - 2024",
  },
  {
    id: nanoid(),
    imageUrl: MathO,
    description:
      "Best performing student with O grade in Statistical Methods - 2024",
  },
  {
    id: nanoid(),
    imageUrl: Eng,
    description:
      "English and Foreign languages dept with International students - 2023",
  },
  {
    id: nanoid(),
    imageUrl: ZamIR,
    description: "Student Ambassador of Zambia at SRMIST - 2023-2025",
  },
  {
    id: nanoid(),
    imageUrl: Poem,
    description: "Won first place in Poetry writing IR students day - 2023",
  },
  {
    id: nanoid(),
    imageUrl: SII,
    description:
      "Awarded Study in India (SII) Scholarship by govt of India - 2022",
  },
  {
    id: nanoid(),
    imageUrl: Nfair,
    description:
      "Won first prize in Maths Innovations, National J.E.T.S fair, Zambia - 2022",
  },
  {
    id: nanoid(),
    imageUrl: Rfair,
    description:
      "Won first prize in Maths Innovations, Lusaka regional J.E.T.S fair - 2022",
  },
  {
    id: nanoid(),
    imageUrl: Headboy,
    description:
      "Head Boy and J.E.T.S President of Chinika High School, Zambia - 2021",
  },
];
