import InternshipCert from "./assets/InternshipCert.png";
import JavaCert from "./assets/JavaCert.png";
import WebCert from "./assets/WebCert.png";
import CodingCert from "./assets/CodingCert.png";
import GenAiCert from "./assets/GenAiCert.png";
import PythonCert from "./assets/PythonCert.png";

const SkillList = {
  Java: {
    title: "Java",
    level: "Intermediate",
    points: [
      "Strong in Java Basics & OOPS",
      "Knowledge of DSA & Problem Solving",
      "Exception Handling & Collections",
    ],
    platforms: ["HackerRank", "CodeChef"],
  },

  JavaScript: {
    title: "JavaScript",
    level: "Intermediate",
    points: [
      "DOM Manipulation",
      "ES6 Features",
      "Asynchronous Programming",
      "Event Handling",
    ],
    platforms: ["Browser", "Projects"],
  },

  "React.js": {
    title: "React.js",
    level: "Intermediate",
    points: [
      "Components & JSX",
      "Props & State",
      "Hooks (useState, useEffect)",
      "React Router",
    ],
    platforms: ["Portfolio Projects"],
  },

  "REST API": {
    title: "REST API",
    level: "Intermediate",
    points: [
      "Understanding of RESTful architecture",
      "CRUD operations using HTTP methods",
      "Request & Response handling",
      "Status codes & error handling",
    ],
    platforms: ["Postman", "Thunder Client"],
  },

  MySQL: {
    title: "MySQL",
    level: "Intermediate",
    points: [
      "Database design & normalization",
      "SQL queries (SELECT, INSERT, UPDATE, DELETE)",
      "Joins, Constraints & Indexes",
      "Integration with backend applications",
    ],
    platforms: ["MySQL Workbench", "XAMPP"],
  },

  "Prompt Engineering": {
    title: "Prompt Engineering",
    level: "Beginner – Intermediate",
    points: [
      "Zero-shot, One-shot & Few-shot prompting",
      "Prompt optimization techniques",
      "Conversation & instruction-based prompts",
      "Using AI for productivity and development",
    ],
    platforms: ["ChatGPT", "LLM Tools"],
  },

  "HTML & CSS": {
    title: "HTML & CSS",
    level: "Advanced",
    points: [
      "Semantic HTML structures",
      "Responsive layouts using Flexbox & Grid",
      "Modern UI design & animations",
      "Cross-browser compatibility",
    ],
    platforms: ["VS Code", "Portfolio Projects"],
  },

  Tools: {
    type: "list",
    title: "Tools",
    items: ["VS Code", "Eclipse", "Post Man", "IntelliJ"],
  },
  AIPlatfroms: {
    type: "list",
    title: "AI Platforms",
    items: ["ChatGPT", "Gemini", "GitHub Copilot", "GitHub (VS Code)"],
  },
  InternshipCert: {
    title: "Internship – Java Full Stack Development",
    image: {
      src: InternshipCert,
      alt: "Java Full Stack Internship Certificate - Gradtwin OPC Pvt Ltd",
    },
  },
  JavaCert: {
    title: "Java Fundamentals Certification",
    image: {
      src: JavaCert,
      alt: "Java Fundamentals Certificate from Silicon Software Services and CodeChef",
    },
  },
  WebCert: {
    title: "Web Development Certification",
    image: {
      src: WebCert,
      alt: "Web Development Certificate in HTML CSS JavaScript from Udemy",
    },
  },
  CodingCert: {
    title: "Coding Development Certification",
    image: {
      src: CodingCert,
      alt: "Coding Development Certificate from Deloitte",
    },
  },
  GenAiCert: {
    title: "Generative AI & Prompt Engineering",
    image: {
      src: GenAiCert,
      alt: "Prompt Engineering and Generative AI Certificate from Great Learning",
    },
  },
  PythonCert: {
    title: "Python Programming Certification",
    image: {
      src: PythonCert,
      alt: "Python Programming Certificate from HackerRank",
    },
  },
};

export default SkillList;
