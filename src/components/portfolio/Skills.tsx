import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Users, Briefcase, Zap, Monitor } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-6 h-6" />,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      skills: [
        "React.js",
        "Next.js",
        "React Native",
        "TypeScript",
        "JavaScript",
        "HTML/CSS",
        "Tailwind CSS",
      ],
    },
    {
      title: "State Management & APIs",
      icon: <Zap className="w-6 h-6" />,
      color: "text-green-600",
      bgColor: "bg-green-100",
      skills: [
        "Redux",
        "React Query",
        "RESTful APIs",
        "GraphQL",
        "API Integration",
        "Data Caching",
      ],
    },
    {
      title: "Project Management",
      icon: <Briefcase className="w-6 h-6" />,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      skills: [
        "Team Leadership",
        "Agile/Scrum",
        "Stakeholder Management",
        "DevOps Workflows",
        "CI/CD Pipelines",
      ],
    },
    {
      title: "Customer Relations",
      icon: <Users className="w-6 h-6" />,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      skills: [
        "Customer Service",
        "Problem Solving",
        "Communication",
        "Chat Support",
        "Satisfaction Management",
      ],
    },

    {
      title: "IT Support Specialist",
      icon: <Monitor className="w-6 h-6" />, // You can swap with another Lucide icon if you like
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      skills: [
        "Technical Troubleshooting",
        "System Maintenance",
        "Network Support",
        "Hardware & Software Assistance",
        "End-User Training",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning technical development, project
            management, and customer relations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="shadow-card hover:shadow-card-hover transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-lg ${category.bgColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className={category.color}>{category.icon}</div>
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/20 border-primary/20">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Ready to Collaborate
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                With 4+ years of experience combining technical expertise with
                strong project management and customer service skills, I'm ready
                to contribute to your team's success.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge
                  variant="outline"
                  className="border-primary text-primary"
                >
                  100% Customer Satisfaction
                </Badge>
                <Badge
                  variant="outline"
                  className="border-primary text-primary"
                >
                  Cross-functional Teams
                </Badge>
                <Badge
                  variant="outline"
                  className="border-primary text-primary"
                >
                  Timely Delivery
                </Badge>
                <Badge
                  variant="outline"
                  className="border-primary text-primary"
                >
                  Quality Standards
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
