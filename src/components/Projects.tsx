
import React from 'react';
import ProjectCard from './ProjectCard';
import { Square, Package, Banknote } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "OpenDDD.NET",
      description: "An open-source framework for implementing Domain-Driven Design (DDD) patterns in .NET applications. Simplifies the development of complex business applications by providing a robust framework for DDD concepts. Features comprehensive documentation to help developers get started.",
      role: "Creator & Maintainer",
      tags: ["Open Source", "C#", ".NET", "Domain-Driven Design", "Clean Code", "Architecture", "Software Engineering", "Business Complexity", "Team Collaboration"],
      link: "https://www.openddd.net",
      documentation: "https://docs.openddd.net",
      highlighted: true,
      logo: "https://www.openddd.net/icons/web-app-manifest-192x192.png",
      linkText: "Homepage",
    },
    {
      title: "py-dependency-injection",
      description: "A lightweight Python library for dependency injection, making code more modular, testable, and maintainable. Designed to be simple yet powerful for Python applications of all sizes. Includes comprehensive documentation with examples and best practices. Easy for team members to adopt.",
      role: "Creator & Maintainer",
      tags: ["Open Source", "Python", "Dependency Injection", "Clean Code", "Documentation", "Internal Tools", "Productivity"],
      github: "https://github.com/runemalm/py-dependency-injection",
      documentation: "https://py-dependency-injection.readthedocs.io/",
      highlighted: true,
      logo: "https://www.davidrunemalm.com/images/github_logo.jpg",
      githubText: "Code",
    },
    {
      title: "Open Banking POC",
      description: "A proof-of-concept showcasing PSD2-compliant open banking capabilities, including account information and payment initiation services. Designed with a modular architecture and multiple integration modes for connecting to banking providers. Built to demonstrate how team-aligned code structure enables scalable, efficient development.",
      role: "Software Architect",
      tags: ["Fintech", "Open Banking", "PSD2", "AIS", "PIS", "Enterprise Architecture", "Team Organization", "Scaling Out"],
      github: "https://github.com/runemalm/open-banking-poc",
      highlighted: true,
      logo: "https://www.davidrunemalm.com/images/github_logo.jpg",
      githubText: "Code",
    },
    {
      title: "Orientera.com",
      description: "A purpose-driven web app designed to help orienteers focus on what matters most—enjoying the sport. The platform simplifies season planning, provides easy access to competition data, and supports result tracking.\n\nFeatures an innovative AI chat assistant that enhances user experience through personalized assistance and modern interaction.",
      role: "Senior Software Engineer",
      tags: ["Mobile App", "Web App", "AI", "LLMs", "Agentic", "Sports Tech", "React", "Python", "Product"],
      link: "https://www.orientera.com",
      highlighted: true,
      logo: "https://orientera.com/icons/apple-touch-icon.png",
      linkText: "App",
    },
    {
      title: "Matteappen",
      description: "An iPad-based platform for interactive and personalized math learning in schools. As co-founder and lead engineer, I built the full stack—from the iPad app to the scalable backend infrastructure. The app featured real-time classroom capabilities and cutting-edge AI for handwriting recognition and automated answer evaluation. Successfully deployed in live classrooms across Sweden, the product grew into a widely used educational tool and concluded in a successful exit.",
      role: "Co-Founder & Developer",
      tags: ["EdTech", "Startup", "Lean", "MVP", "iOS", "Education", "Mathematics", "AI", "Computer Vision", "ML"],
      link: "https://www.magma.se/",
      highlighted: true,
      logo: "https://www.davidrunemalm.com/images/matteappen_logo.jpeg",
      linkText: "Homepage",
    },
    {
      title: "Mebox",
      description: "An ambitious startup incubated at Chalmers Innovation (now Chalmers Ventures) with angel investment backing. We pioneered early applied AI research using OpenCV, SVMs, and proprietary face recognition technology based on research papers from Facebook. Though it didn't gain market traction, it provided invaluable experience in startup development, fundraising, and cutting-edge AI implementation well before the current AI boom.",
      role: "Co-Founder & Developer",
      tags: ["Startup", "Lean", "MVP", "AI", "Silicon Valley", "Unicorn", "Computer Vision", "Face Recognition", "Machine Learning", "Angel Investment", "Lean Startup", "Slush Conference"],
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
