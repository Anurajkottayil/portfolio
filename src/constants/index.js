import {
    mobile,
    backend,
    creator,
    web,
    hostel,
    lbsconnect,
    maths,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    ults,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    flutter,
    dot,
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
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name:"flutter",
      icon: flutter,
    },
  
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    
   
    {
      name: "Three JS",
      icon: threejs,
    },
    
   
  ];
  
  const experiences = [
    {
      title: "Diploma in Computer Engg",
      company_name: "GPTC Kasaragod",
      icon: dot,
      iconBg: "#383E56",
      date: "March 2017 - April 2020",
      points: [
        
      ],
    },
    {
      title: "B tech in Computer Science Engg",
      company_name: "LBS College Kasaragod",
      icon: dot,
      iconBg: "#E6DEDD",
      date: "Nov 2020 - Jun 2023",
      points: [
       
      ],
    },
    {
      title: "Associate Engineer",
      company_name: "ULTS",
      icon: ults,
      iconBg: "#383E56",
      date: "Sep 2023 - Present",
      points: [
       
      ],
      
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Hostel attendance management system ",
      description:
        "The Attendance Management System integrates HTML for the user interface, PHP for server-side logic, and utilizes Arduino with a fingerprint sensor for secure and efficient attendance tracking in real-time.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "php",
          color: "pink-text-gradient",
        },
      ],
      image: hostel,
      source_code_link: "https://github.com/",
    },
    {
      name: "student portal App",
      description:
        "The Student Portal Application, built with Flutter, seamlessly manages attendance through Firebase backend, offering real-time notifications and comprehensive access to educational materials for an enhanced student experience.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
       
      ],
      image: lbsconnect,
      source_code_link: "https://github.com/PG19CS06/Student-Portal-Android-App",
    },
    {
      name: "Mathamatical Solver",
      description:
        " The Mathematical Equation Solver utilizes Python's image processing to scan and interpret handwritten mathematical equations, employing machine learning to solve them. The Flutter front-end enhances user interaction, providing a seamless and efficient equation-solving experience.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "machine learning",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: maths,
      source_code_link: "https://github.com/sanal-l-s/handwritten_equation_solver",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects};