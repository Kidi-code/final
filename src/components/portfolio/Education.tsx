import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, CalendarDays, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundation that supports my technical expertise and business.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 border-l-4 border-l-accent">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">Diploma in Business IT</CardTitle>
                  <CardDescription className="text-base">
                    University of Johannesburg
                  </CardDescription>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>Johannesburg, South Africa</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" />
                      <span>February 2021 — July 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Comprehensive program covering business processes, information technology systems, 
                  project management, and digital transformation strategies. This foundation supports 
                  my dual expertise in technical development and business operations.
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Core Areas of Study:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Business Analysis</Badge>
                    <Badge variant="outline">Information Systems</Badge>
                    <Badge variant="outline">Project Management</Badge>
                    <Badge variant="outline">Digital Business</Badge>
                    <Badge variant="outline">Data Management</Badge>
                    <Badge variant="outline">System Design</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;