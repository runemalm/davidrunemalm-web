
import React from 'react';
import ProjectCard from './ProjectCard';
import { Square, Package, Banknote } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "OpenDDD.NET",
      description: "An open-source framework for implementing Domain-Driven Design (DDD) patterns in .NET applications. Simplifies the development of complex business applications by providing a robust framework for DDD concepts.",
      role: "Creator & Maintainer",
      tags: ["Open Source", ".NET", "DDD", "C#", "Architecture"],
      github: "https://github.com/runemalm/OpenDDD.NET",
      highlighted: true,
      logo: "https://www.openddd.net/icons/web-app-manifest-192x192.png",
    },
    {
      title: "py-dependency-injection",
      description: "A lightweight Python library for dependency injection, making code more modular, testable, and maintainable. Designed to be simple yet powerful for Python applications of all sizes.",
      role: "Creator & Maintainer",
      tags: ["Open Source", "Python", "Dependency Injection", "Architecture"],
      github: "https://github.com/runemalm/py-dependency-injection",
      highlighted: true,
      logo: "https://yt3.googleusercontent.com/PKRBxhCiGa8Y0vPmHa1E2cdjpLhUq2Pl-gESwP7kk2plGgxLdsbjyTd9VjcJwBMiY0HQ8bvx5Q=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Open Banking POC",
      description: "Built a modular fintech platform demonstrating PSD2-compliant open banking capabilities. Implemented secure API integrations with banking providers for account information and payment initiation services, with a team-based architecture for seamless scaling.",
      role: "Lead Developer",
      tags: ["Fintech", "APIs", "Scalability", "Security", "Cloud"],
      github: "https://github.com/runemalm/open-banking-poc",
      highlighted: true,
      logo: "https://yt3.googleusercontent.com/PKRBxhCiGa8Y0vPmHa1E2cdjpLhUq2Pl-gESwP7kk2plGgxLdsbjyTd9VjcJwBMiY0HQ8bvx5Q=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Orientera.com",
      description: "An intuitive app for orienteering enthusiasts that simplifies competition planning, provides quick access to start times and results, and offers an effortless way to navigate the orienteering season. Features a clean interface designed for athletes and spectators alike.",
      role: "Senior Developer",
      tags: ["Mobile App", "Web App", "AI", "Sports Tech", "React", "Python"],
      link: "https://orientera.com",
      highlighted: true,
      logo: "https://orientera.com/icons/apple-touch-icon.png",
    },
    {
      title: "Matteappen",
      description: "An educational product (now called Magma) for mathematics education using iPads in schools. Features interactive exercises, progress tracking, and personalized learning paths for students.",
      role: "Co-Founder & Developer",
      tags: ["EdTech", "Startup", "iOS", "Education", "Mathematics"],
      link: "https://www.magma.se/",
      highlighted: true,
      logo: "https://is3-ssl.mzstatic.com/image/thumb/Purple122/v4/ff/5a/ed/ff5aede4-2c91-cf70-9d2b-3ec9730c4aa8/source/512x512bb.jpg",
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
