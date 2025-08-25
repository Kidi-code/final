import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Front end Developer and Project manager",
      company: "Vertex Group",
      location: "Remote",
      period: "2020 - 2024",
      description:
        "Led comprehensive development initiatives combining frontend expertise with project management.",
      achievements: [
        "Utilize React Js, Next Js and React Native for crafting intuitive and dynamic user interfaces",
        "Manage state efficiently with Redux and React Query for improved data fetching and caching",
        "Collaborate with cross-functional teams to ensure smooth DevOps workflows, CI/CD pipelines, and cloud deployments",
      ],
      technologies: [
        "React",
        "Next.js",
        "React Native",
        "Redux",
        "React Query",
        "REST APIs",
      ],
    },
    {
      title: "Customer Service Representative",
      company: "ACT BPO",
      location: "Remote",
      period: "May 2024 - November 2024",
      description:
        "Delivered exceptional customer service while maintaining high satisfaction standards.",
      achievements: [
        "Resolved customer inquiries efficiently via chat, earning positive feedback from both clients and supervisors",
        "Provided accurate information and proactive solutions to enhance customer experience",
      ],
      technologies: ["Customer Support", "Chat Support", "Problem Solving"],
    },
    {
      title: "Project Manager & Front-End Developer",
      company: "Final Project sponsored by JEC",
      location: "Johannesburg",
      period: "January 2023 - October 2023",
      description:
        "Led development team for a comprehensive web and mobile application project.",
      achievements: [
        "Led a development team to deliver a fully functional web and mobile application, ensuring timely completion of milestones",
        "Oversaw front-end development, ensuring intuitive and responsive user interfaces",
        "Coordinated project tasks, delegated responsibilities, and maintained stakeholder communication to meet deadlines and quality standards",
      ],
      technologies: [
        "Team Leadership",
        "Project Management",
        "Frontend Development",
        "Mobile Development",
      ],
    },
    {
      title: "IT Support Specialist",
      company: "Tech Solutions Ltd.",
      location: "Remote",
      period: "May 2022 - December 2022",
      description:
        "Provided technical support to clients, troubleshooting hardware and software issues efficiently.",
      achievements: [
        "Resolved over 20+ technical issues, ensuring minimal downtime for clients",
        "Installed, configured, and maintained hardware and software systems",
        "Trained staff on basic IT procedures and best practices to reduce recurring problems",
      ],
      technologies: [
        "Technical Support",
        "Troubleshooting",
        "Networking",
        "Windows & MacOS",
        "Helpdesk Software",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A track record of delivering successful projects and leading
            development teams across various industries.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="shadow-card hover:shadow-card-hover transition-all duration-300 border-l-4 border-l-primary"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CalendarDays className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base">
                  {exp.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-primary">
                      Technologies & Skills:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
