import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon, InstagramIcon, MediumIcon } from "./Icons";
import storyData from "../../content/story/main.json";
import profileData from "../../content/profile/main.json";

const MyStory = () => {
  const tags = profileData.tagline.split(" · ");

  return (
    <section id="story" className="px-4 py-10 md:py-16">
      <div className="container mx-auto max-w-5xl">
        <h1 className="mb-2 text-center text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
          {profileData.name}
        </h1>
        
        {profileData.roles && (
          <div className="mb-8 flex flex-wrap justify-center gap-x-3 gap-y-1">
            {profileData.roles.map((role, index) => (
              <span key={index} className="text-base text-muted-foreground">
                {role}{index < profileData.roles.length - 1 ? " ·" : ""}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start">
          <div className="w-[8rem] h-[8rem] md:w-[12rem] md:h-[12rem] rounded-full flex-shrink-0 border-2 border-border overflow-hidden bg-muted">
            <img
              src="/avatar.jpg"
              alt="Roman Sytnyk"
              width={384}
              height={384}
              fetchPriority="high"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/placeholder.svg';
              }}
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="leading-relaxed text-foreground text-base md:text-lg">
              {storyData.intro.split('\n').map((line, index) => (
                <p key={index} className="mb-2">
                  {index === 0 ? (
                    <>
                      <strong>Software Engineer specializing in Mobile Applications</strong>
                    </>
                  ) : (
                    line
                  )}
                </p>
              ))}
            </div>
            
            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-muted hover:text-primary hover:scale-110 transition-all duration-200"
                asChild
              >
                <a href={profileData.github} target="_blank" rel="noopener noreferrer">
                  <GithubIcon size={5} />
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-muted hover:text-primary hover:scale-110 transition-all duration-200"
                asChild
              >
                <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon size={5} />
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-muted hover:text-primary hover:scale-110 transition-all duration-200"
                asChild
              >
                <a href={profileData.instagram} target="_blank" rel="noopener noreferrer">
                  <InstagramIcon size={5} />
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-muted hover:text-primary hover:scale-110 transition-all duration-200"
                asChild
              >
                <a href={profileData.medium} target="_blank" rel="noopener noreferrer">
                  <MediumIcon size={5} />
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-muted hover:text-primary hover:scale-110 transition-all duration-200"
                asChild
              >
                <a href={`mailto:${profileData.email}`}>
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStory;