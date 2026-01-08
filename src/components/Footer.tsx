
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t py-8 bg-background">
      <div className="container text-center text-muted-foreground">
        <p>© {currentYear} David Runemalm. All rights reserved.</p>
        <p className="mt-2 text-sm">
          Software Engineer with expertise in testable applications, 
          Domain-Driven Design, and scalable architecture.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="https://github.com/runemalm" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a>
          <a href="mailto:david.runemalm@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
