
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 lg:py-32 container">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
          David Runemalm
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Software Engineer with 13+ years of experience building impactful applications, 
          with a recent focus on AI-driven and agentic systems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => scrollToSection('projects')}>
            View Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')}>
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
