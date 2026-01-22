import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Database, Cloud, Shield, Layout, Wrench, BarChart3, Brain } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Backend & APIs",
      skills: [
        "Node.js",
        "Express.js",
        "TypeScript",
        "REST APIs",
        "JWT Auth",
        "RBAC (role-based access)",
        "Validation & middleware",
      ],
    },
    {
      icon: Database,
      title: "Database",
      skills: ["PostgreSQL", "Prisma ORM", "Relational modeling", "Enums", "Transactions"],
    },
    {
      icon: Cloud,
      title: "Cloud & Storage",
      skills: ["AWS S3", "File uploads", "Signed URL downloads", "Secure document workflows"],
    },
    {
      icon: Layout,
      title: "Frontend",
      skills: ["React", "Responsive UI", "Forms", "Admin vs Customer views"],
    },
    {
      icon: Shield,
      title: "Product & Workflow",
      skills: ["Pricing templates", "Add-ons", "Audit logs", "Approval flows", "Operational UX"],
    },
    {
      icon: Wrench,
      title: "Tools",
      skills: ["Git", "Postman", "Swagger/OpenAPI", "Vite", "Environment config"],
    },
    {
      icon: BarChart3,
      title: "Data / BI",
      skills: ["Power BI dashboards", "Reporting", "Data visualization"],
    },
    {
      icon: Brain,
      title: "ML (Research)",
      skills: ["Ensemble learning", "Malware detection research"],
    },
  ];

  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My focus is building real-world systems: clean APIs, secure document handling,
            strong data modeling, and workflows that match operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <IconComponent className="h-5 w-5 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
