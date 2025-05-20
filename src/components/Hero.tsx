
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 lg:py-32 container">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <Avatar className="h-40 w-40 md:h-64 md:w-64 border-4 border-primary/20">
          <AvatarImage src="https://www.davidrunemalm.com/images/avatar.jpg" alt="David Runemalm" />
          <AvatarFallback>DR</AvatarFallback>
        </Avatar>
        
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
            David Runemalm
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Software Engineer with 13+ years of experience building impactful applications, 
            with a recent focus on AI-driven and agentic systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" onClick={() => scrollToSection('projects')}>
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')}>
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
