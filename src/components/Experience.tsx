
import React from 'react';

const TimelineItem = ({ 
  year, 
  title, 
  organization, 
  description 
}: { 
  year: string; 
  title: string; 
  organization: string; 
  description: string;
}) => {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      <div className="absolute top-0 left-0 w-0.5 h-full bg-border" />
      <div className="absolute top-2 left-0 w-5 h-5 rounded-full bg-primary -translate-x-1/2" />
      <div className="font-bold text-primary mb-1">{year}</div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-muted-foreground mb-3">{organization}</p>
      <p>{description}</p>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      year: "2021 - Present",
      title: "Senior Software Engineer (AI Focus)",
      organization: "Freelance & Contract Work",
      description: "Developing AI-driven applications and consulting on architecture for various clients. Specialized in agentic systems and intelligent applications.",
    },
    {
      year: "2018 - 2021",
      title: "Lead Developer",
      organization: "Orientera.com",
      description: "Led the development of a comprehensive orienteering platform, including implementing an innovative AI chat assistant for the community.",
    },
    {
      year: "2015 - 2018",
      title: "Founder & CTO",
      organization: "Magma (Matteappen)",
      description: "Founded and developed an educational technology startup focusing on mathematics education using iPads in schools.",
    },
    {
      year: "2013 - 2015",
      title: "Software Engineer",
      organization: "Financial Technology Company",
      description: "Worked on scalable fintech solutions, including the Open Banking POC that demonstrated secure API integration with banking systems.",
    },
    {
      year: "2010 - 2013",
      title: "Software Developer",
      organization: "Various Roles",
      description: "Began professional career in software development, gaining experience across multiple domains and technologies.",
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
