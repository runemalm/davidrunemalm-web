
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <a 
          href="#" 
          className="flex items-center space-x-2"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMenuOpen(false);
          }}
        >
          <span className="font-bold text-lg md:text-xl truncate">David Runemalm</span>
        </a>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <NavigationMenu className="hidden md:flex ml-auto">
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <a 
                href="#" 
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Home
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a 
                href="#about" 
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
              >
                About
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a 
                href="#projects" 
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
              >
                Projects
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a 
                href="#experience" 
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('experience');
                }}
              >
                Experience
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a 
                href="#education" 
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('education');
                }}
              >
                Education
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a 
                href="#contact" 
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                Contact
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile navigation menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur border-b md:hidden z-50">
            <nav className="container py-4">
              <ul className="flex flex-col space-y-4">
                <li>
                  <a 
                    href="#" 
                    className="block px-4 py-2 text-sm font-medium rounded-md hover:bg-primary hover:text-primary-foreground"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setIsMenuOpen(false);
                    }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className="block px-4 py-2 text-sm font-medium rounded-md hover:bg-primary hover:text-primary-foreground"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('about');
                    }}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    className="block px-4 py-2 text-sm font-medium rounded-md hover:bg-primary hover:text-primary-foreground"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('projects');
                    }}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a 
                    href="#experience" 
                    className="block px-4 py-2 text-sm font-medium rounded-md hover:bg-primary hover:text-primary-foreground"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('experience');
                    }}
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a 
                    href="#education" 
                    className="block px-4 py-2 text-sm font-medium rounded-md hover:bg-primary hover:text-primary-foreground"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('education');
                    }}
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="block px-4 py-2 text-sm font-medium rounded-md hover:bg-primary hover:text-primary-foreground"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('contact');
                    }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
