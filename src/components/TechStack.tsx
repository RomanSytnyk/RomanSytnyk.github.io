import stackData from "../../content/technologies/stack.json";

const TechStack = () => {
  return (
    <section id="tech-stack" className="px-4 py-16">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-8 text-center text-2xl font-semibold text-primary">
          Tech Stack
        </h2>
        
        <div className="flex flex-wrap justify-center gap-2">
          {stackData.technologies.map((tech) => (
            <span 
              key={tech}
              className="rounded-md border border-border bg-card px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          {stackData.tools.map((tool) => (
            <span key={tool.name} className="flex items-center gap-1.5">
              <span>{tool.emoji}</span>
              <span>{tool.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
