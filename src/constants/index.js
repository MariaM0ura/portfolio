import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    threejs,
    opencv,
    python,
    c,
    machineLearning,
 
    gesene,
    tail,


    jobit,
    snakegame,
    ecommerce,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Machine Learning Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python",
      icon: python,
    },    
    {
      name: "C++",
      icon: c,
    },
    {
      name: "opencv",
      icon: opencv,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Machine Learning",
      icon: machineLearning,
    },

  ];
  
  const experiences = [
    {
      title: "Front-End Developer Internship",
      company_name: "Gesene",
      icon: gesene,
      iconBg: "#E6DEDD",
      date: "Dec 2023 - May 2024",
      points: [
        "Developing and maintaining the project's official website, ensuring responsiveness and optimization for different devices.",
        "Implementing user interfaces using React and JavaScript, focusing on intuitive design and user experience.",
        "Collaborating with multidisciplinary teams to reference academic articles and present research data in an accessible manner.",
        "Implementing multilingual support on the platform, enabling accessibility for users from diverse linguistic backgrounds.",
      ], 
    },
    {
      title: "Student Member",
      company_name: "TAIL - Technology and Artificial Intelligence League",
      icon: tail,
      iconBg: "#E6DEDD",
      date: "Jul 2023 - Present",
      points: [
        "Developed an innovative platform combining ChatGPT and Stable Diffusion to generate 'infinite zoom' art.",
        "Enabled users to create detailed images from textual and visual inputs, providing an immersive art exploration experience.",
        "Analyzed public safety in São Paulo using public data and classified credit card fraud with synthetic data.",
        "Conducted data cleaning, exploratory analysis, and applied machine learning algorithms for pattern and anomaly detection.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial: "",
      name: "",
      designation: "",
      company: "",
      image: "",
    }
  ];
  
  const projects = [
    {
      name: "E-commerce",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "RestaAPI",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/MariaM0ura/E-commerce",
    },
    {
      name: "Guia Press",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Restapi",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/MariaM0ura/GuiaPress",
    },
    {
      name: "Snake Game with OpenCV Hand Detection",
      description:
        "Control a snake with hand gestures tracked by OpenCV. Use your index finger to collect apples and avoid collisions.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "OpenCV",
          color: "green-text-gradient",
        },
        {
          name: "Computer Vision",
          color: "pink-text-gradient",
        },
      ],
      image: snakegame,
      source_code_link: "https://github.com/MariaM0ura/Snake-Game-with-OpenCV-Hand-Detection",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };