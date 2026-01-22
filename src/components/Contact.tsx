import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Github } from "lucide-react";

const EMAIL = "aauf.sayed01@gmail.com";
const PHONE = "+971 58 614 7909";
const WHATSAPP_LINK = "https://wa.me/971586147909";
const LINKEDIN_LINK = "https://www.linkedin.com/in/aauf-sayed";
const GITHUB_LINK = "https://github.com/aaufsayed01";

export function Contact() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Contact</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Want to discuss a role or a project? Reach out by email or WhatsApp — I reply quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <h4>Email</h4>
                    <p className="text-muted-foreground">{EMAIL}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <h4>WhatsApp</h4>
                    <p className="text-muted-foreground">{PHONE}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <h4>Location</h4>
                    <p className="text-muted-foreground">UAE • Open to opportunities</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button asChild className="w-full gap-2">
                <a href={`mailto:${EMAIL}?subject=Interview%20-%20Sayed%20Aauf&body=Hi%20Sayed%2C%0A%0A`}>
                  Email Me <ArrowRight className="h-4 w-4" />
                </a>
              </Button>

              <Button asChild variant="outline" className="w-full gap-2">
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                  WhatsApp Me <ArrowRight className="h-4 w-4" />
                </a>
              </Button>

              <Button asChild variant="outline" className="w-full gap-2">
                <a href={LINKEDIN_LINK} target="_blank" rel="noreferrer">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn <ArrowRight className="h-4 w-4" />
                </a>
              </Button>

              <Button asChild variant="outline" className="w-full gap-2">
                <a href={GITHUB_LINK} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
