import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  // 🟢 Reference for form
  const form = useRef<HTMLFormElement>(null);

  // 🟢 Function to send email with validation
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    // Validate required fields
    const formData = new FormData(form.current);
    const firstName = formData.get("firstName")?.toString().trim();
    const lastName = formData.get("lastName")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!firstName || !lastName || !email || !message) {
      alert("⚠️ Please fill in all required fields before sending.");
      return;
    }

    // Proceed with sending email
    emailjs
      .sendForm(
        "service_9uvul07",
        "template_3lubwfq",
        form.current,
        "-MaeROSqD6GU36ono"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.error("❌ Failed:", error.text);
          alert("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss how I can contribute to your
            team's success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">
                      augerkidi74@email.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+27 767636473</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">
                      Johannesburg, South Africa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Professional Links</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/auger-kidi-69699b269/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    className="flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </Button>
                </a>
              </div>
            </div>

            <Card className="bg-gradient-to-r from-primary/5 to-accent/20 border-primary/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2 text-primary">
                  Why Work With Me?
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    • 4+ years of combined technical and leadership experience
                  </li>
                  <li>• Proven track record of 100% customer satisfaction</li>
                  <li>
                    • Strong expertise in React ecosystem and project management
                  </li>
                  <li>
                    • Experience with cross-functional teams and agile
                    methodologies
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Interested in working together? Drop me a message and I'll get
                back to you soon.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input
                      name="firstName"
                      id="firstName"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input
                      name="lastName"
                      id="lastName"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="john.doe@company.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company (Optional)
                  </label>
                  <Input
                    name="company"
                    id="company"
                    placeholder="Your Company"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    id="message"
                    placeholder="Tell me about your project or opportunity..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button className="w-full" size="lg" type="submit">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
