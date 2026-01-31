import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Palette, Target } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Futuristic Minimalist with Neon Accents
 * - Deep black background (#0a0a0a) with cyan (#00d9ff) and magenta (#ff006e) neon accents
 * - Geometric typography using Space Grotesk for headers
 * - Subtle animations and hover effects
 * - Asymmetric layout with generous whitespace
 * Language: English
 */

export default function Home() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const portfolioItems = [
    {
      id: 1,
      image: "/wagnercraft-portfolio/images/portfolio-1.png",
      title: "AI Futuristic Landscape",
      category: "AI Generation"
    },
    {
      id: 2,
      image: "/wagnercraft-portfolio/images/portfolio-2.png",
      title: "Campaign Design",
      category: "Marketing"
    },
    {
      id: 3,
      image: "/wagnercraft-portfolio/images/portfolio-3.png",
      title: "Soccer Team Logo",
      category: "Sports Branding"
    },
    {
      id: 4,
      image: "/wagnercraft-portfolio/images/portfolio-4.png",
      title: "Cosmic Digital Art",
      category: "AI Generation"
    },
    {
      id: 5,
      image: "/wagnercraft-portfolio/images/portfolio-5.png",
      title: "Social Media Campaign",
      category: "Copywriting"
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-primary">
            Wagnercraft
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-foreground/70 hover:text-primary transition-colors">
              Services
            </a>
            <a href="#portfolio" className="text-foreground/70 hover:text-primary transition-colors">
              Portfolio
            </a>
            <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/wagnercraft-portfolio/images/hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-1" />

        {/* Content */}
        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
                <span className="text-primary text-sm font-medium flex items-center gap-2">
                  <Sparkles size={16} />
                  Creativity Powered by AI
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Transform Your Ideas Into
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary ml-2">
                  Visual Reality
                </span>
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-lg">
                Specialized in AI image generation, strategic copywriting, campaign creation, and professional sports logo design.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg"
              >
                Start Project
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/10 rounded-lg"
              >
                View Portfolio
              </Button>
            </div>
          </div>

          {/* Right side - Accent blob */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-96 h-96">
              <img
                src="/wagnercraft-portfolio/images/accent-blob.png"
                alt="Accent"
                className="w-full h-full object-contain animate-pulse"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Services
            </h2>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              Complete solutions for your creative and marketing needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Sparkles,
                title: "AI Image Generation",
                description: "Create unique and personalized images using cutting-edge AI technology. Perfect for campaigns, social media, and promotional materials.",
                color: "from-primary to-secondary",
              },
              {
                icon: Zap,
                title: "Strategic Copywriting",
                description: "Persuasive and well-structured texts that convert. From impactful headlines to complete product descriptions.",
                color: "from-secondary to-primary",
              },
              {
                icon: Target,
                title: "Campaign Creation",
                description: "Integrated and strategic campaigns to maximize your reach. Planning, execution, and results analysis.",
                color: "from-primary to-secondary",
              },
              {
                icon: Palette,
                title: "Sports Logos",
                description: "Striking visual identities for teams and sporting events. Professional design with guaranteed visual impact.",
                color: "from-secondary to-primary",
              },
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-8 rounded-lg border border-border bg-card/50 hover:bg-card/80 transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredService(idx)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Background pattern */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity rounded-lg"
                    style={{
                      backgroundImage: "url('/wagnercraft-portfolio/images/services-pattern.png')",
                      backgroundSize: "cover",
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} p-2.5 text-background`}>
                      <Icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="pt-4 flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More
                      <ArrowRight size={16} />
                    </div>
                  </div>

                  {/* Hover border effect */}
                  {hoveredService === idx && (
                    <div className="absolute inset-0 rounded-lg border-2 border-primary/50 pointer-events-none" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative py-24 bg-background/50">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Portfolio
            </h2>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              Recent projects showcasing our expertise and creativity
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square rounded-lg overflow-hidden border border-border bg-card/30 hover:border-primary/50 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-primary text-sm">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-background">
        <div className="container">
          <div className="relative rounded-lg border border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10 p-12 md:p-16 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Contact us and let's transform your vision into reality. We're ready to create something extraordinary.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg"
            >
              Start Conversation
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-border bg-background/50 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Wagnercraft</h3>
              <p className="text-foreground/60 text-sm">
                Creativity powered by technology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition-colors">AI Image Generation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Copywriting</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Campaigns</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Sports Logos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="mailto:contact@wagnercraft.com" className="hover:text-primary transition-colors">Email</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
            <p>&copy; 2026 Wagnercraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
