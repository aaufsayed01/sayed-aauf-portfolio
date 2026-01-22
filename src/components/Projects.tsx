import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const WHATSAPP_LINK = "https://wa.me/971586147909";

export function Projects() {
  const projects = [
    {
      title: "JEX Logistics App",
      description:
        "Full-stack freight/logistics platform with RBAC, quote requests, pricing templates + add-ons, bookings, shipments, tracking, and S3 document workflows.",
      image:
        "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=900&h=600&fit=crop",
      technologies: ["TypeScript", "Express", "Prisma", "PostgreSQL", "AWS S3", "JWT"],
      cta: { label: "Ask for a walkthrough", href: WHATSAPP_LINK },
    },
    {
      title: "Ensemble Framework for Malware Detection Using Machine Learning. (Research project)",
      description:
        "A machine learning project using ensemble methods for malware detection, focusing on feature extraction and improving accuracy and robustness.",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&h=600&fit=crop",
      technologies: ["Machine Learning", "Ensemble", "Feature Engineering"],
      cta: { label: "Discuss details", href: WHATSAPP_LINK },
    },
    {
      title: "Personal Finance Dashboard",
      description:
        "An interactive Power BI dashboard to track income, expenses, savings, and spending breakdowns using clean visuals and DAX measures for insights.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop",
      technologies: ["Power BI", "DAX", "Data Visualization"],
      cta: { label: "Ask for a walkthrough", href: WHATSAPP_LINK },
    },
    {
      title: "Career Guidance Web App",
      description:
        "A simple web app to explore career paths with a clean UI and responsive layout — built as an early project to strengthen web fundamentals.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&h=600&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript"],
      cta: { label: "Contact me", href: "#contact" },
    },
  ];

  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selected work focused on real-world workflows, clean engineering, and practical product thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button asChild size="sm" className="gap-2">
                    <a
                      href={project.cta.href}
                      target={project.cta.href.startsWith("http") ? "_blank" : undefined}
                      rel={project.cta.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      <ExternalLink className="h-4 w-4" />
                      {project.cta.label}
                    </a>
                  </Button>

                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a href="#contact">
                      <ArrowRight className="h-4 w-4" />
                      Hire / Contact
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
