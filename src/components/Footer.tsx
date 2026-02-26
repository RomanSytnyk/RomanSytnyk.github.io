import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { LinkedinIcon, GithubIcon, InstagramIcon } from "./Icons";
import profileData from "../../content/profile/main.json";

const Footer = () => {
  return (
    <footer className="px-4 py-10 md:py-16">
      <div className="container mx-auto max-w-2xl">
        <div className="rounded-lg border border-border bg-card p-5 sm:p-8 text-center">
          <h2 className="mb-2 text-xl sm:text-2xl font-semibold text-primary">
            Let's Connect 👋
          </h2>
          
          <p className="mb-2 text-muted-foreground">
            Based in {profileData.location}
          </p>
          
          <p className="mb-6 text-sm text-muted-foreground">
            Feel free to reach out!
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant="outline"
              className="gap-2 border-border hover:bg-muted hover:text-primary hover:scale-110 transition-all duration-200"
              asChild
            >
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedinIcon size={4} />
                LinkedIn
              </a>
            </Button>

            <Button
              variant="outline"
              className="gap-2 border-border hover:bg-muted hover:text-primary hover:scale-110 transition-all duration-200"
              asChild
            >
              <a href={profileData.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon size={4} />
                GitHub
              </a>
            </Button>

            <Button
              variant="outline"
              className="gap-2 border-border hover:bg-muted hover:text-primary hover:scale-110 transition-all duration-200"
              asChild
            >
              <a href={profileData.instagram} target="_blank" rel="noopener noreferrer">
                <InstagramIcon size={4} />
                Instagram
              </a>
            </Button>

            <Button
              variant="outline"
              className="gap-2 border-border hover:bg-muted hover:text-primary hover:scale-110 transition-all duration-200"
              asChild
            >
              <a href={profileData.medium} target="_blank" rel="noopener noreferrer">
                <BookOpen className="h-4 w-4" />
                Medium
              </a>
            </Button>
          </div>
        </div>
        
        <p className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profileData.name}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
