
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Code, Rocket, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">About Me</h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-8">
            I’m a senior software engineer with over 13 years of professional experience building backend-heavy 
            systems across startups, scale-ups, and consulting engagements. 
            My work spans multiple domains, including fintech, healthcare, logistics, education, and analytics.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <Code className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Open Source</h3>
                <p className="text-muted-foreground text-center">
                  Creating and maintaining open-source projects like OpenDDD.NET and py-dependency-injection.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <Rocket className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Entrepreneurship</h3>
                <p className="text-muted-foreground text-center">
                  Founded and successfully exited Matteappen (now Magma), an edtech startup revolutionizing math education with iPads in schools.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <Briefcase className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Professional</h3>
                <p className="text-muted-foreground text-center">
                  Worked across employment and freelance roles, bringing an entrepreneurial mindset to every project.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
