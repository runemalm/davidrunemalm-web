
import React from 'react';
import ProjectCard from './ProjectCard';
import { Square, Package, Banknote } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "OpenDDD.NET",
      description: "An open-source framework for implementing Domain-Driven Design (DDD) patterns in .NET applications. Simplifies the development of complex business applications by providing a robust framework for DDD concepts.",
      role: "Creator & Maintainer",
      tags: ["Open Source", "C#", ".NET", "Domain-Driven Design", "Clean Code", "Architecture"],
      link: "https://www.openddd.net",
      highlighted: true,
      logo: "https://www.openddd.net/icons/web-app-manifest-192x192.png",
    },
    {
      title: "py-dependency-injection",
      description: "A lightweight Python library for dependency injection, making code more modular, testable, and maintainable. Designed to be simple yet powerful for Python applications of all sizes. Includes comprehensive documentation with examples and best practices.",
      role: "Creator & Maintainer",
      tags: ["Open Source", "Python", "Dependency Injection", "Clean Code", "Beginner Friendly", "Documentation"],
      github: "https://github.com/runemalm/py-dependency-injection",
      highlighted: true,
      logo: "https://yt3.googleusercontent.com/PKRBxhCiGa8Y0vPmHa1E2cdjpLhUq2Pl-gESwP7kk2plGgxLdsbjyTd9VjcJwBMiY0HQ8bvx5Q=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Open Banking POC",
      description: "A proof-of-concept showcasing PSD2-compliant open banking capabilities, including account information and payment initiation services. Designed with a modular architecture and multiple integration modes for connecting to banking providers. Built to demonstrate how team-aligned code structure enables scalable, efficient development.",
      role: "Lead Developer",
      tags: ["Fintech", "Open Banking", "PSD2", "AIS", "PIS", "Enterprise Architecture", "Team Organization"],
      github: "https://github.com/runemalm/open-banking-poc",
      highlighted: true,
      logo: "https://yt3.googleusercontent.com/PKRBxhCiGa8Y0vPmHa1E2cdjpLhUq2Pl-gESwP7kk2plGgxLdsbjyTd9VjcJwBMiY0HQ8bvx5Q=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Orientera.com",
      description: "An app designed for orienteers to easily access competition data, plan their season, and focus on enjoying the sport. Includes an innovative AI chat assistant that delivers personalized support and a seamless, modern user experience.",
      role: "Senior Developer",
      tags: ["Mobile App", "Web App", "AI", "LLMs", "Agentic", "Sports Tech", "React", "Python"],
      link: "https://www.orientera.com",
      highlighted: true,
      logo: "https://www.orientera.com/icons/apple-touch-icon.png",
    },
    {
      title: "Matteappen",
      description: "An educational product (now called Magma) for mathematics education using iPads in schools. Features interactive exercises, progress tracking, and personalized learning paths for students.",
      role: "Co-Founder & Developer",
      tags: ["EdTech", "Startup", "Lean", "MVP", "iOS", "Education", "Mathematics", "AI", "Computer Vision", "ML"],
      link: "https://www.magma.se/",
      highlighted: true,
      logo: "https://is3-ssl.mzstatic.com/image/thumb/Purple122/v4/ff/5a/ed/ff5aede4-2c91-cf70-9d2b-3ec9730c4aa8/source/512x512bb.jpg",
    },
    {
      title: "Mebox",
      description: "An ambitious startup incubated at Chalmers Innovation (now Chalmers Ventures) with angel investment backing. We pioneered early applied AI research using OpenCV, SVMs, and proprietary face recognition technology based on research papers from Facebook. Though it didn't gain market traction, it provided invaluable experience in startup development, fundraising, and cutting-edge AI implementation well before the current AI boom.",
      role: "Co-Founder & Developer",
      tags: ["Startup", "AI", "Computer Vision", "Face Recognition", "Machine Learning", "Angel Investment", "Lean Startup", "Slush Conference"],
      highlighted: true,
      logo: "https://www.davidrunemalm.com/images/mebox_logo.png",
    },
  ];

  return (
    <section id="projects" className="py-16 container">
      <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
