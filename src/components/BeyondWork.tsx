import { useState } from "react";
import { Link } from "react-router-dom";
import { Coffee, Globe, Code, Camera, Dice5, Languages, GraduationCap, LucideIcon, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import PhotoGallery from "./PhotoGallery";
import interestsData from "../../content/interests/interests.json";

const iconMap: Record<string, LucideIcon> = {
  Coffee,
  Globe,
  Code,
  Camera,
  Dice: Dice5,
  Languages,
  GraduationCap,
};

interface Interest {
  icon: string;
  title: string;
  description: string;
  image?: string;
  images?: string[];
  text?: string;
  link?: string;
  originalsPath?: string;
  clickable?: boolean;
}

const BeyondWork = () => {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setOpenItems(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="beyond-work" className="px-4 py-16">
      <div className="container mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-2xl font-semibold text-primary">
          Beyond Work
        </h2>
        
        <div className="flex flex-col gap-3">
          {(interestsData as Interest[]).map((interest, index) => {
            const IconComponent = iconMap[interest.icon] || Code;
            const isOpen = openItems[index] || false;
            const isClickable = interest.clickable !== false;
            
            const cardContent = (
              <div 
                className={`group flex items-center gap-3 sm:gap-4 rounded-lg border border-border bg-card p-2.5 sm:p-4 transition-all duration-300 ${isClickable ? 'hover:border-primary/50 hover:shadow-glow cursor-pointer' : ''}`}
              >
                <IconComponent className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-colors ${isClickable ? 'group-hover:text-primary' : ''}`} />
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-medium text-foreground">{interest.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{interest.description}</p>
                </div>
                {isClickable && (
                  <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                )}
              </div>
            );

            if (!isClickable) {
              return (
                <div key={interest.title}>
                  {cardContent}
                </div>
              );
            }
            
            return (
              <Collapsible key={interest.title} open={isOpen} onOpenChange={() => toggleItem(index)}>
                <CollapsibleTrigger className="w-full text-left">
                  {cardContent}
                </CollapsibleTrigger>
                <CollapsibleContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="mt-2 overflow-hidden rounded-lg border border-border bg-card/50">
                    {interest.text && (
                      <div className="p-4 text-center text-sm text-muted-foreground">
                        {interest.text}
                        {interest.link && (
                          <a
                            href={interest.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-1 text-primary hover:underline"
                          >
                            Instagram
                          </a>
                        )}
                        {interest.originalsPath && (
                          <div className="mt-2">
                            <Link
                              to={interest.originalsPath}
                              className="text-primary hover:underline"
                            >
                              Show originals
                            </Link>
                          </div>
                        )}
                      </div>
                    )}
                    {interest.images && interest.images.length > 0 && (
                      <PhotoGallery images={interest.images} title={interest.title} originalsPath={interest.originalsPath} />
                    )}
                    {interest.image && !interest.images && (
                      <div className="aspect-video w-full bg-muted flex items-center justify-center">
                        {isOpen ? (
                          <>
                            <img
                              src={interest.image}
                              alt={interest.title}
                              className="h-full w-full object-cover"
                              loading="lazy"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.nextElementSibling?.classList.remove('hidden');
                              }}
                            />
                            <div className="hidden flex items-center justify-center text-muted-foreground text-sm">
                              <IconComponent className="h-12 w-12 opacity-30" />
                            </div>
                          </>
                        ) : (
                          <div className="flex items-center justify-center text-muted-foreground text-sm">
                            <IconComponent className="h-12 w-12 opacity-30" />
                            <span className="ml-2">Click to load image</span>
                          </div>
                        )}
                      </div>
                    )}
                    {!interest.image && !interest.images && !interest.text && (
                      <div className="aspect-video w-full bg-muted flex items-center justify-center">
                        <IconComponent className="h-12 w-12 opacity-30 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default BeyondWork;