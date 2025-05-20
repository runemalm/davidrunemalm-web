
import React from 'react';
import { Briefcase, School } from 'lucide-react';

const TimelineItem = ({ 
  year, 
  title, 
  organization, 
  description,
  isEducation = false
}: { 
  year: string; 
  title: string; 
  organization: string; 
  description: string;
  isEducation?: boolean;
}) => {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      <div className="absolute top-0 left-0 w-0.5 h-full bg-border" />
      <div className="absolute top-2 left-0 w-5 h-5 rounded-full bg-primary -translate-x-1/2 flex items-center justify-center">
        {isEducation ? 
          <School className="h-3 w-3 text-primary-foreground" /> : 
          <Briefcase className="h-3 w-3 text-primary-foreground" />
        }
      </div>
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
      year: "2022 - Present",
      title: "Software Engineer",
      organization: "Various Roles",
      description: "Worked as freelance contractor in fintech, consultant and large consultant company, and as software engineer in various company positions.",
      isEducation: false
    },
    {
      year: "2021 - 2022",
      title: "Software Engineer Consultant",
      organization: "Valtech AB",
      description: "Tried out working as consultant on a big consultant company. Worked on the software of a big bank, proposed a lot of improvement solutions for the existing code base.",
      isEducation: false
    },
    {
      year: "2019 - 2021",
      title: "Software Engineer",
      organization: "NuvoAir AB",
      description: "Moved to Stockholm to join a startup in the medtech business. Worked closely with the product owner to develop several features on the flagship clinical trial administration application, one of which was over-reading feature highly praised by the doctors and nurses using it.",
      isEducation: false
    },
    {
      year: "2018",
      title: "Tech Lead",
      organization: "Sendify AB",
      description: "Developed a passport distribution application for Sendify in logtech. Praised by CEO for being easy to use with simple interface and required features. Joined as Tech Lead to lead the team on further development of their fraktbokning startup.",
      isEducation: false
    },
    {
      year: "2012 - 2017",
      title: "Co-Founder & CTO",
      organization: "Matteappen (Now Magma)",
      description: "Founded and successfully exited an educational technology startup focusing on mathematics education using iPads in schools.",
      isEducation: false
    },
    {
      year: "2007 - 2012",
      title: "Masters Degree Computer Science",
      organization: "Chalmers University of Technology",
      description: "Masters Degree in Networks & Distributed Systems (Computer Science) at Chalmers University of Technology Gothenburg.",
      isEducation: true
    },
    {
      year: "2000 - 2005",
      title: "Webmaster",
      organization: "Nybro Orienteringsklubb",
      description: "I learned coding in html and php and coded an advanced CMS with multiple features for the local orienteering club I was member of. At a time when CMS was not common I built my own one with lots of features.",
      isEducation: false
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
              isEducation={exp.isEducation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
