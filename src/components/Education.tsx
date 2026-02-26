import { GraduationCap } from "lucide-react";
import educationData from "../../content/education/education.json";

const Education = () => {
  return (
    <section id="education" className="px-4 py-10 md:py-16">
      <div className="container mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-xl sm:text-2xl font-semibold text-primary">
          🎓 Education
        </h2>
        
        <div className="space-y-4">
          {educationData.map((edu, index) => (
            <div key={index} className="rounded-lg border border-border bg-card p-4 sm:p-6">
              <div className="flex items-start gap-4">
                <GraduationCap className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-medium text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {edu.years}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
