import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Palette, Target } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Futuristic Minimalist with Neon Accents
 * - Deep black background (#0a0a0a) with cyan (#00d9ff) and magenta (#ff006e) neon accents
 * - Geometric typography using Space Grotesk for headers
 * - Subtle animations and hover effects
 * - Asymmetric layout with generous whitespace
 */

export default function Home() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

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
              Serviços
            </a>
            <a href="#portfolio" className="text-foreground/70 hover:text-primary transition-colors">
              Portfólio
            </a>
            <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">
              Contato
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
            backgroundImage: "url('/images/hero-bg.png')",
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
                  Criatividade Potencializada por IA
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Transforme suas ideias em
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary ml-2">
                  realidade visual
                </span>
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-lg">
                Especializado em geração de imagens com IA, copywriting estratégico, criação de campanhas e logos esportivos de alta qualidade.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg"
              >
                Começar Projeto
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/10 rounded-lg"
              >
                Ver Portfólio
              </Button>
            </div>
          </div>

          {/* Right side - Accent blob */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-96 h-96">
              <img
                src="/images/accent-blob.png"
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
              Serviços
            </h2>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              Soluções completas para suas necessidades criativas e de marketing
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Geração de Imagens com IA",
                description: "Crie imagens únicas e personalizadas usando tecnologia de IA de ponta. Perfeito para campanhas, redes sociais e materiais promocionais.",
                color: "from-primary to-secondary",
              },
              {
                icon: Zap,
                title: "Copywriting Estratégico",
                description: "Textos persuasivos e bem estruturados que convertem. Desde headlines impactantes até descrições de produtos completas.",
                color: "from-secondary to-primary",
              },
              {
                icon: Target,
                title: "Criação de Campanhas",
                description: "Campanhas integradas e estratégicas para maximizar seu alcance. Planejamento, execução e análise de resultados.",
                color: "from-primary to-secondary",
              },
              {
                icon: Palette,
                title: "Logos Esportivos",
                description: "Identidades visuais marcantes para times e eventos esportivos. Design profissional com impacto visual garantido.",
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
                      backgroundImage: "url('/images/services-pattern.png')",
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
                      Saiba mais
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
              Portfólio
            </h2>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              Projetos recentes que demonstram nossa expertise e criatividade
            </p>
          </div>

          {/* Portfolio Grid - Placeholder */}
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="group relative aspect-square rounded-lg overflow-hidden border border-border bg-card/30 hover:border-primary/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-primary/30">
                      {item}
                    </div>
                    <p className="text-foreground/40 text-sm">Projeto em destaque</p>
                  </div>
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
              Pronto para começar?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Entre em contato conosco e vamos transformar sua visão em realidade. Estamos prontos para criar algo extraordinário.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg"
            >
              Iniciar Conversa
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
                Criatividade potencializada por tecnologia.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition-colors">Geração de Imagens</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Copywriting</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Campanhas</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Logos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Portfólio</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="mailto:contato@wagnercraft.com" className="hover:text-primary transition-colors">Email</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
            <p>&copy; 2026 Wagnercraft. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
