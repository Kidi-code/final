import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import ngo from "@/assets/Ngo.jpg";
import wedding from "@/assets/Wedding.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Wedding Invitation Website",
      description:
        "A personalized digital wedding invitation with event details, RSVP management, and an elegant design for guests.",
      technologies: ["React", "Node.js", "Next.js"],
      liveUrl: "https://mariage-psi-three.vercel.app/",
      image: wedding,
    },
    {
      title: "Jan Hoffmann NGO",
      description:
        "We are a non-profit organization dedicated to fostering a supportive community where we actively help and uplift one another.",
      technologies: ["TypeScript", "React", "Tailwind CSS"],
      liveUrl: "https://organisation-lac.vercel.app/",
      githubUrl: "#",
      image: ngo,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on that demonstrate my
            skills and experience in software development.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="transition-transform"
            >
              <Card className="group shadow-md hover:shadow-xl rounded-xl overflow-hidden">
                {/* Image */}
                <motion.div
                  className="aspect-video bg-muted rounded-t-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Live Demo Button */}
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <motion.div
                      className="mt-4"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Go to our web
                        </Button>
                      </a>
                    </motion.div>
                  )}

                  {/* Source Code Button */}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <motion.div
                      className="mt-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex items-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          Source Code
                        </Button>
                      </a>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
