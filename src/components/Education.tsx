
import React from 'react';
import { GraduationCap } from 'lucide-react';

type EducationItemProps = {
  degree: string;
  institution: string;
  year: string;
  icon?: React.ReactNode;
};

const EducationItem = ({ degree, institution, year, icon }: EducationItemProps) => {
  return (
    <div className="flex gap-4 items-start mb-8 last:mb-0">
      <div className="bg-primary/10 rounded-full p-3 text-primary">
        {icon || <GraduationCap size={24} />}
      </div>
      <div>
        <h3 className="text-lg font-bold">{degree}</h3>
        <p className="text-muted-foreground mb-1">{institution}</p>
        <p className="text-sm text-muted-foreground">{year}</p>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Education</h2>
        <div className="max-w-3xl mx-auto">
          <EducationItem 
            degree="Master of Science in Networks & Distributed Systems"
            institution="Chalmers University of Technology"
            year="2010–2012"
          />
          <EducationItem 
            degree="Bachelor of Science in Computer Science"
            institution="Chalmers University of Technology"
            year="2007–2010"
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
