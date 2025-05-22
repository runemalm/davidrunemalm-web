
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Square, Package, Banknote, BookOpen } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface ProjectCardProps {
  title: string;
  description: string;
  role: string;
  tags: string[];
  link?: string;
  github?: string;
  documentation?: string;
  image?: string;
  highlighted?: boolean;
  logo?: string | React.ReactNode;
  linkText?: string;
}

const ProjectCard = ({
  title,
  description,
  role,
  tags,
  link,
  github,
  documentation,
  image,
  highlighted = false,
  logo,
  linkText = "Visit",
}: ProjectCardProps) => {
  // Default fallback is now a simple Square icon
  const getFallbackIcon = () => {
    return <Square className="h-6 w-6 text-muted-foreground" />;
  };
  
  // Convert newlines to proper line breaks
  const formattedDescription = description.split('\n').map((text, index) => (
    <React.Fragment key={index}>
      {text}
      {index < description.split('\n').length - 1 && <br />}
    </React.Fragment>
  ));
  
  return (
    <Card className={highlighted ? "border-primary" : ""}>
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center"
          />
        </div>
      )}
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-12 w-12 border bg-muted">
          {typeof logo === 'string' ? (
            <AvatarImage src={logo} alt={`${title} logo`} />
          ) : (
            logo || <AvatarFallback>{getFallbackIcon()}</AvatarFallback>
          )}
        </Avatar>
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{role}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{formattedDescription}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 flex-wrap">
        {link && (
          <Button variant="outline" size="sm" asChild>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              {linkText}
            </a>
          </Button>
        )}
        {github && (
          <Button variant="outline" size="sm" asChild>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
        )}
        {documentation && (
          <Button variant="outline" size="sm" asChild>
            <a href={documentation} target="_blank" rel="noopener noreferrer">
              <BookOpen className="mr-2 h-4 w-4" />
              Documentation
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
