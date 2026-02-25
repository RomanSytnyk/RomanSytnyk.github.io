import { Github, ExternalLink, Star } from "lucide-react";
import projectsData from "../../content/projects/projects.json";

const OpenSource = () => {
  return (
    <section id="open-source" className="px-4 py-16">
      <div className="container mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-2xl font-semibold text-primary">
          🚀 Contributions
        </h2>
        
        <div className="space-y-4">
          {projectsData.projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-4 rounded-lg border border-border bg-card p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-glow"
            >
              <Github className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              
              <div className="flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <h3 className="font-medium text-foreground transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  {project.isAuthor && (
                    <span className="flex items-center gap-1 rounded bg-primary/10 px-2 py-0.5 text-xs text-primary">
                      <Star className="h-3 w-3" />
                      Author
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
              
              <ExternalLink className="mt-1 h-4 w-4 flex-shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          ))}
        </div>
        
        <div className="mt-8">
          <h3 className="mb-4 text-center text-sm text-muted-foreground">
            Other contributions
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {projectsData.contributions.map((contrib, index) => (
              <a
                key={contrib.name}
                href={contrib.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                [{index + 1}]
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
