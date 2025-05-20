
import React from 'react';
import { Briefcase, School, Check } from 'lucide-react';

const TimelineItem = ({ 
  year, 
  title, 
  organization, 
  description,
  type = "work",  // Default to work, can be "education" or "work"
  bulletPoints = []
}: { 
  year: string; 
  title: string; 
  organization: string; 
  description: string;
  type?: "education" | "work";
  bulletPoints?: string[];
}) => {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      <div className="absolute top-0 left-0 w-0.5 h-full bg-border" />
      <div className="absolute top-2 left-0 w-6 h-6 rounded-full bg-primary -translate-x-1/2 flex items-center justify-center">
        {type === "work" ? (
          <Briefcase className="h-3 w-3 text-primary-foreground" />
        ) : (
          <School className="h-3 w-3 text-primary-foreground" />
        )}
      </div>
      <div className="font-bold text-primary mb-1">{year}</div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-muted-foreground mb-3">{organization}</p>
      <p className="mb-3">{description}</p>
      
      {bulletPoints.length > 0 && (
        <ul className="space-y-2">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      year: "2019 - Present",
      title: "Senior Software Engineer · AI-Focused Freelance & Product Roles",
      organization: "Various Organizations",
      description: "Worked across medtech, fintech, and enterprise domains as a senior engineer, consultant, and freelancer. Deepened expertise in Domain-Driven Design, modern software architecture, and AI-driven development.",
      type: "work",
      bulletPoints: [
        "Created and maintain OpenDDD.NET, a toolkit for DDD in .NET",
        "Built py-dependency-injection, a lightweight Python DI library",
        "Recently led development of an AI-powered assistant for orientera.com to guide users with real-time competition insights"
      ]
    },
    {
      year: "2018",
      title: "Tech Lead",
      organization: "Sendify AB",
      description: "Initially brought in as a freelance engineer to deliver a passport distribution system in the logistics domain—praised by the CEO for its simplicity and effectiveness.\n\nFollowing the success of that project, I was brought on as Tech Lead to guide the in-house team in evolving Sendify's core freight booking platform.",
      type: "work"
    },
    {
      year: "2012 - 2017",
      title: "Co-Founder & CTO",
      organization: "Matteappen (now Magma)",
      description: "Founded and scaled an edtech startup focused on mathematics education in schools. Led technical development of the iPad-based learning platform. Successfully exited the company after several years of growth.",
      type: "work"
    },
    {
      year: "2007 - 2012",
      title: "M.Sc. Computer Science",
      organization: "Chalmers University of Technology",
      description: "Specialized in Networks & Distributed Systems. Gained a solid academic foundation in systems design, distributed computing, and theoretical computer science.",
      type: "education"
    },
    {
      year: "2000 - 2005",
      title: "Webmaster",
      organization: "Nybro Orienteringsklubb",
      description: "Built a custom CMS for the local orienteering club before mainstream CMS platforms were common. Developed features like photo galleries, guestbooks, calendars, and news feeds using HTML and PHP—an early and formative project.",
      type: "work"
    },
  ];

  return (
    <section id="experience" className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem 
              key={index}
              year={exp.year}
              title={exp.title}
              organization={exp.organization}
              description={exp.description}
              type={exp.type as "education" | "work"}
              bulletPoints={exp.bulletPoints}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
