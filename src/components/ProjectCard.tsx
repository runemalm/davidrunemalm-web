
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Package, Code, Database, Box, Projector } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface ProjectCardProps {
  title: string;
  description: string;
  role: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
  highlighted?: boolean;
  logo?: string | React.ReactNode;
}

const ProjectCard = ({
  title,
  description,
  role,
  tags,
  link,
  github,
  image,
  highlighted = false,
  logo,
}: ProjectCardProps) => {
  // Helper to determine which icon to show as fallback
  const getFallbackIcon = () => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('ddd') || lowerTitle.includes('dependency')) return <Code className="h-6 w-6" />;
    if (lowerTitle.includes('banking')) return <Database className="h-6 w-6" />;
    if (lowerTitle.includes('orientera')) return <Box className="h-6 w-6" />;
    if (lowerTitle.includes('magma') || lowerTitle.includes('matteappen')) return <Projector className="h-6 w-6" />;
    return <Package className="h-6 w-6" />;
  };
  
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
        <p className="mb-4">{description}</p>
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
      <CardFooter className="flex gap-2">
        {link && (
          <Button variant="outline" size="sm" asChild>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Visit
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
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
