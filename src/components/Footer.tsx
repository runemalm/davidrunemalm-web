
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t py-8 bg-background">
      <div className="container text-center text-muted-foreground">
        <p>© {currentYear} David Runemalm. All rights reserved.</p>
        <p className="mt-2 text-sm">
          Software Engineer with expertise in AI-driven applications, 
          Domain-Driven Design, and scalable architecture.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
