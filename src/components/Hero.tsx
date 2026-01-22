import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Mail,
  Download,
  ArrowDown,
  Sparkles,
  Phone,
  Linkedin,
  Github,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import portrait from "../assets/portrait.png";

const EMAIL = "aauf.sayed01@gmail.com";
const WHATSAPP_LINK = "https://wa.me/971586147909";
const LINKEDIN_LINK = "https://www.linkedin.com/in/aauf-sayed";
const GITHUB_LINK = "https://github.com/aaufsayed01";

const WORKFLOW_OUTPUT = "Design → Build → Review → Improve";

export function Hero() {
  const [mode, setMode] = useState<"code" | "output">("code");
  const [runOutput, setRunOutput] = useState<string>("");
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, []);

  const handleRun = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);

    setMode("output");
    setIsRunning(true);
    setRunOutput("");

    let i = 0;
    intervalRef.current = window.setInterval(() => {
      i += 1;
      setRunOutput(WORKFLOW_OUTPUT.slice(0, i));
      if (i >= WORKFLOW_OUTPUT.length) {
        if (intervalRef.current) window.clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsRunning(false);
      }
    }, 10);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="flex justify-center lg:justify-start">
              <Badge
                variant="secondary"
                className="px-6 py-3 bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                Open to opportunities
              </Badge>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
                <span className="block">Hello, I&apos;m</span>
                <span className="block bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                  Sayed Aauf
                </span>
              </h1>

              <div className="space-y-4">
                <p className="text-xl sm:text-2xl text-muted-foreground max-w-lg">
                  Software Engineer &amp; Full Stack Developer
                </p>

                <p className="text-lg text-muted-foreground/80 max-w-md">
                  Actively building and learning through full-stack projects,
                  improving engineering practices, and delivering features with
                  a focus on quality and maintainability.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="px-8 py-6">
                <a href="/Aaufresume.pdf" target="_blank" rel="noreferrer">
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                </a>
              </Button>

              <Button asChild variant="outline" size="lg" className="px-8 py-6">
                <a href="#projects">View My Work</a>
              </Button>
            </div>

            {/* Contact Icons */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button asChild variant="ghost" size="icon">
                <a href={`mailto:${EMAIL}`} aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>

              <Button asChild variant="ghost" size="icon">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </Button>

              <Button asChild variant="ghost" size="icon">
                <a
                  href={LINKEDIN_LINK}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>

              <Button asChild variant="ghost" size="icon">
                <a
                  href={GITHUB_LINK}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={portrait}
                  alt="Sayed Aauf portrait"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -right-2 -bottom-12">
                <div className="bg-background/90 border border-primary/20 rounded-2xl px-6 py-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm">Open to work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current focus */}
        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-5xl">
            <h3 className="text-xl font-semibold mb-2 text-center">
              Current focus
            </h3>

            <div className="rounded-2xl border bg-background/50 px-5 py-3 text-center">
              {mode === "code" ? (
                <div className="flex items-center justify-between gap-4">
                  <code className="text-xs font-mono truncate">
                    const pipeline = ["Design", "Build", "Review", "Improve"];
                  </code>
                  <Button size="sm" onClick={handleRun} disabled={isRunning}>
                    {isRunning ? "Running…" : "Run"}
                  </Button>
                </div>
              ) : (
                <div className="text-base font-medium">
                  {runOutput || WORKFLOW_OUTPUT}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute top-10 left-1/1 -translate-x-1/2 animate-bounce text-muted-foreground">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Scroll down</span>
            <ArrowDown className="h-5 w-5" />
          </div>
        </div>
      </div>
    </section>
  );
}


