
import React from 'react';
import { Briefcase, School } from 'lucide-react';

const TimelineItem = ({ 
  year, 
  title, 
  organization, 
  description,
  type = "work"  // Default to work, can be "education" or "work"
}: { 
  year: string; 
  title: string; 
  organization: string; 
  description: string;
  type?: "education" | "work";
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
      <p className="whitespace-pre-line">{description}</p>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      year: "2022 - Present",
      title: "Senior Software Engineer (AI Focus)",
      organization: "Freelance & Employed Roles",
      description: "Delivering high-impact software across a variety of projects, both as a freelance engineer and in full-time roles. Focused on clean architecture, developer experience, and modern best practices.",
      type: "work"
    },
    {
      year: "2021 - 2022",
      title: "Software Engineer Consultant",
      organization: "Valtech AB",
      description: "Joined one of the largest consultancy firms to work with a former major bank. Contributed to critical systems and proposed significant improvements to the existing codebase.",
      type: "work"
    },
    {
      year: "2019 - 2021",
      title: "Software Engineer",
      organization: "NuvoAir AB",
      description: "Moved to Stockholm to join an innovative medtech startup. Played a key role in building the clinical trials platform. Developed the \"over-reading\" feature, which received strong praise from clinical staff for its usability and impact.",
      type: "work"
    },
    {
      year: "2018",
      title: "Freelance Developer → Tech Lead",
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
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Experience & Education</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem 
              key={index}
              year={exp.year}
              title={exp.title}
              organization={exp.organization}
              description={exp.description}
              type={exp.type as "education" | "work"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
