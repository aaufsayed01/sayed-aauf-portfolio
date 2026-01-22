import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Freelance Software Engineer",
      company: "Independent",
      location: "UAE / Remote",
      period: "Dec 2025 - Present",
      description:
        "Building a full-stack freight/logistics platform with operational workflows: authentication + RBAC, quote requests, pricing templates and add-ons, bookings, shipments, tracking, and document uploads with signed downloads (S3).",
      technologies: ["TypeScript", "Express", "Prisma", "PostgreSQL", "AWS S3", "JWT"],
    },
    {
      title: "Intern - Data / BI",
      company: "YBI Foundation",
      location: "Remote",
      period: "Jan 2025 - May 2025",
      description:
        "Worked on dashboards and reporting using Power BI, focusing on structured data and clear visual insights.",
      technologies: ["Power BI", "Data analysis", "Reporting"],
    },
    {
      title: "Web Development Intern",
      company: "Isarva Infotech",
      location: "India",
      period: "Feb 2023 - Mar 2023",
      description:
        "Hands-on experience with basic web development and programming fundamentals, building small web pages and utilities.",
      technologies: ["HTML", "CSS", "JavaScript", "Python"],
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience across full-stack development and real operational workflows,
            with a strong backend foundation and product-minded approach.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {exp.title}
                    </CardTitle>
                    <p className="text-primary mt-1">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-1">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
