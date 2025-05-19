
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github, Mail } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    toast.success("Message sent! I'll get back to you soon.", {
      description: "Thank you for reaching out."
    });
  };

  return (
    <section id="contact" className="py-16 container">
      <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Get In Touch</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <a href="mailto:david.runemalm@gmail.com" className="hover:underline">
                  david.runemalm@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Github className="h-5 w-5 mr-3 text-primary" />
                <a 
                  href="https://github.com/runemalm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  github.com/runemalm
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <textarea 
                  id="message" 
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your message"
                  required
                />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
