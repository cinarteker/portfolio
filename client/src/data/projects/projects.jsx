import RefryImage from "../../assets/refry.png";
import MosaicImage from "../../assets/mosaic.jpg";
import VacBaseImage from "../../assets/vacbase.png";
import AironImage from "../../assets/airon.png";
import RacketImage from "../../assets/racket.png";
import PortfolioImage from "../../assets/portfolio.png";

const softwareProjects = [
  {
    title: "AIRON Fitness",
    description: "AI-powered personal trainer.",
    link: "https://github.com/d-x-s/airon-fitness",
    projectImage: AironImage,
    techStack: "OpenAI, React.js, Express.js",
  },
  {
    title: "Personal Website",
    description: "You're looking right at it.",
    link: "https://github.com/d-x-s/portfolio",
    projectImage: PortfolioImage,
    techStack: "React.js, Material UI",
  },
  {
    title: "x86 Compiler",
    description: "Fun functional programming.",
    link: "https://github.com/d-x-s/x86-compiler",
    projectImage: RacketImage,
    techStack: "Racket, x86",
  },
  {
    title: "MOSAIC",
    description: "Recursive image generator.",
    link: "https://github.com/d-x-s/photo-mosaic-generator/tree/main",
    projectImage: MosaicImage,
    techStack: "C++",
  },
  {
    title: "VACBASE",
    description: "COVID management database.",
    link: "https://github.com/d-x-s/vacbase",
    projectImage: VacBaseImage,
    techStack: "SQL, Java",
  },
  {
    title: "REFRY",
    description: "Food delivery alternative.",
    link: "https://github.com/d-x-s/REFRY",
    projectImage: RefryImage,
    techStack: "React.js",
  },
];

export default softwareProjects;
