
import React from 'react';
import ProjectCard from './ProjectCard';
import { Code, Database, Box, Projector, Package } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "OpenDDD.NET",
      description: "An open-source toolkit for implementing Domain-Driven Design (DDD) patterns in .NET applications. Simplifies the development of complex business applications by providing a robust framework for DDD concepts.",
      role: "Creator & Maintainer",
      tags: ["Open Source", ".NET", "DDD", "C#", "Architecture"],
      github: "https://github.com/runemalm/OpenDDD.NET",
      highlighted: true,
      logo: <Code className="h-6 w-6 text-primary" />,
    },
    {
      title: "py-dependency-injection",
      description: "A lightweight Python library for dependency injection, making code more modular, testable, and maintainable. Designed to be simple yet powerful for Python applications of all sizes.",
      role: "Creator & Maintainer",
      tags: ["Open Source", "Python", "Dependency Injection", "Architecture"],
      github: "https://github.com/runemalm/py-dependency-injection",
      highlighted: true,
      logo: <Package className="h-6 w-6 text-primary" />,
    },
    {
      title: "Open Banking POC",
      description: "Developed a scalable fintech solution for open banking, demonstrating secure API integration with banking systems, transaction processing, and financial data aggregation.",
      role: "Lead Developer",
      tags: ["Fintech", "APIs", "Scalability", "Security", "Cloud"],
      github: "https://github.com/runemalm/open-banking-poc",
      highlighted: true,
      logo: <Database className="h-6 w-6 text-primary" />,
    },
    {
      title: "Orientera.com",
      description: "A comprehensive app for the orienteering community featuring event management, maps, results, and an innovative AI chat assistant to answer questions and provide guidance to users.",
      role: "Senior Developer",
      tags: ["Mobile App", "Web App", "AI", "Sports Tech", "React", "Python"],
      link: "https://orientera.com",
      highlighted: true,
      logo: <Box className="h-6 w-6 text-primary" />,
    },
    {
      title: "Magma (formerly Matteappen)",
      description: "An educational product for mathematics education using iPads in schools. Features interactive exercises, progress tracking, and personalized learning paths for students.",
      role: "Founder & Developer",
      tags: ["EdTech", "Startup", "iOS", "Education", "Mathematics"],
      link: "https://www.magma.se/",
      highlighted: true,
      logo: <Projector className="h-6 w-6 text-primary" />,
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
