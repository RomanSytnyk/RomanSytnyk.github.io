import { ExternalLink, Palette, Image, LucideIcon } from "lucide-react";
import articlesData from "../../content/articles/articles.json";
import profileData from "../../content/profile/main.json";

const iconMap: Record<string, LucideIcon> = {
  Palette,
  Image,
};

const Articles = () => {
  return (
    <section id="articles" className="px-4 py-16">
      <div className="container mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-2xl font-semibold text-primary">
          📝 Recent Articles
        </h2>
        
        <div className="space-y-4">
          {articlesData.map((article) => {
            const IconComponent = iconMap[article.icon] || Palette;
            return (
              <a
                key={article.title}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-4 rounded-lg border border-border bg-card p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-glow"
              >
                <IconComponent className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                
                <div className="flex-1">
                  <h3 className="mb-1 font-medium text-foreground transition-colors group-hover:text-primary">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {article.description}
                  </p>
                </div>
                
                <ExternalLink className="mt-1 h-4 w-4 flex-shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            );
          })}
        </div>

        <div className="mt-6 text-center">
          <a
            href={profileData.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            More on Medium →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Articles;
