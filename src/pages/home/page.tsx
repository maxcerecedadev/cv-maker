import { useRef, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Paintbrush, LayoutTemplate, Star, CheckCircle2, Zap, Download, Github, Plus } from "lucide-react"
import { ResumePreview } from "../../components/resume-preview"

const DEMO_RESUME = {
  basics: {
    name: "Sofía Herrera",
    label: "Digital Product Designer",
    image: "",
    email: "sofia.herrera@email.com",
    phone: "+34 600 123 456",
    url: "www.sofia-design.com",
    summary: "Diseñadora de producto con más de 5 años de experiencia creando experiencias digitales centradas en el usuario. Especializada en sistemas de diseño, accesibilidad y maquetación web. Apasionada por resolver problemas complejos a través de soluciones visuales simples y elegantes.",
    location: {
      address: "Calle Gran Vía 12",
      postalCode: "28013",
      city: "Madrid",
      countryCode: "ES",
      region: "Madrid",
    },
    profiles: [
      { network: "LinkedIn", username: "sofiaherrera", url: "https://linkedin.com/in/sofia" },
      { network: "Behance", username: "sofiadesign", url: "https://behance.net/sofia" }
    ]
  },
  work: [
    {
      name: "Studio Creativo Tech",
      position: "Senior Product Designer",
      url: "https://studio.com",
      startDate: "2021-03",
      endDate: "Presente",
      summary: "Liderazgo del equipo de diseño para clientes internacionales del sector Fintech.",
      highlights: [
        "Implementación de un Design System que redujo tiempos de desarrollo en un 30%.",
        "Rediseño completo de la aplicación móvil aumentando la retención un 15%.",
        "Mentoria de diseñadores junior y gestión de carga de trabajo."
      ]
    },
    {
      name: "Agencia Digital Neo",
      position: "UI/UX Designer",
      url: "https://neo.agency",
      startDate: "2018-06",
      endDate: "2021-02",
      summary: "Diseño de interfaces web y aplicaciones móviles para diversos sectores.",
      highlights: [
        "Desarrollo de prototipos interactivos en Figma para pruebas de usuario.",
        "Colaboración estrecha con desarrolladores front-end para asegurar la calidad visual."
      ]
    }
  ],
  education: [
    {
      institution: "Universidad Politécnica",
      url: "https://upm.es",
      area: "Grado en Diseño Multimedia",
      studyType: "Bachelor",
      startDate: "2014-09",
      endDate: "2018-06",
      score: "Notable",
      courses: ["Diseño Centrado en Usuario", "Accesibilidad Web", "Animación Digital"]
    }
  ],
  skills: [
    { name: "Diseño UI", level: "Avanzado", keywords: ["Figma", "Sketch", "Adobe XD"] },
    { name: "Prototipado", level: "Avanzado", keywords: ["Principle", "Protopie"] },
    { name: "Frontend", level: "Intermedio", keywords: ["HTML/CSS", "React Basic", "Tailwind"] },
  ],
  languages: [
    { language: "Español", fluency: "Nativo" },
    { language: "Inglés", fluency: "C1 Avanzado" },
    { language: "Francés", fluency: "B1 Intermedio" }
  ],
  projects: [
    {
      name: "E-commerce Redesign",
      description: "Rediseño completo de la experiencia de compra para una marca de moda sostenible.",
      keywords: ["UX Research", "UI Design"],
      url: "https://project.com"
    }
  ]
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-slate-900 text-white p-1.5 rounded-lg">
              <LayoutTemplate className="h-5 w-5" />
            </div>
            <span className="font-bold text-xl tracking-tight">CV Maker</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#features" className="hover:text-primary transition-colors">Características</a>
            <a href="#templates" className="hover:text-primary transition-colors">Plantillas</a>
            <a href="#" className="hover:text-primary transition-colors">Precios</a>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/editor">
              <Button>Crear CV Ahora</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-slate-50 dark:bg-slate-950">
          <div className="container px-4 mx-auto relative z-10">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-800 mb-6 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2"></span>
                v2.0 Ahora con IA integrada
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-slate-900 dark:text-white">
                Crea un currículum <span className="text-indigo-600">profesional</span> en minutos.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-2xl">
                Destaca entre la multitud con plantillas diseñadas por expertos. Fácil de usar, rápido y optimizado para pasar los filtros ATS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <Link to="/editor">
                  <Button size="lg" className="text-lg px-8 h-14 rounded-full shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-1 transition-all">
                    Crear mi CV Gratis <Zap className="ml-2 h-5 w-5 fill-yellow-400 text-yellow-500" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="text-lg px-8 h-14 rounded-full border-2 hover:bg-slate-100">
                  Ver ejemplos
                </Button>
              </div>
            </div>
          </div>

          {/* Animated Blobs Background */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-50">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-300 mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-300 mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-pink-300 mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-background">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Todo lo que necesitas</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Herramientas potentes para construir tu perfil profesional sin complicaciones.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <FeatureCard
                icon={<LayoutTemplate className="h-8 w-8 text-indigo-600" />}
                title="Plantillas Premium"
                description="Diseños modernos y minimalistas aprobados por reclutadores de top tech companies."
              />
              <FeatureCard
                icon={<CheckCircle2 className="h-8 w-8 text-emerald-600" />}
                title="Sugerencias Inteligentes"
                description="Recibe consejos en tiempo real para mejorar la redacción y el impacto de tu CV."
              />
              <FeatureCard
                icon={<Download className="h-8 w-8 text-blue-600" />}
                title="Exportación PDF Instantánea"
                description="Descarga tu CV en alta resolución listo para enviar en un solo clic."
              />
            </div>
          </div>
        </section>

        {/* Templates Section */}
        <section id="templates" className="py-24 bg-slate-50 dark:bg-slate-900/50">
          <div className="container px-4 mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-bold tracking-tight mb-4">Elige tu estilo</h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Una colección curada de plantillas profesionales para cada etapa de tu carrera.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">

              {/* Template 1: Marquez */}
              <TemplateCard
                title="Márquez Modern"
                description="Diseño editorial limpio con barra lateral. Ideal para perfiles creativos y modernos."
                tags={["Gratis", "Popular"]}
                color="bg-emerald-100 text-emerald-800"
                link="/editor?template=marquez"
                templateId="marquez"
              />

              {/* Template 2: Soto */}
              <TemplateCard
                title="Soto Professional"
                description="Encabezados fuertes y estructura corporativa. Perfecto para negocios y ventas."
                tags={["B2B", "Ejecutivo"]}
                color="bg-indigo-100 text-indigo-800"
                link="/editor?template=soto"
                templateId="soto"
              />

              {/* Template 3: Salinas */}
              <TemplateCard
                title="Salinas Executive"
                description="Perfil corporativo de alto nivel con encabezado oscuro. Elegancia y seriedad."
                tags={["Corporativo", "Formal"]}
                color="bg-purple-100 text-purple-800"
                link="/editor?template=salinas"
                templateId="salinas"
              />

              {/* Template 4: Gutierrez */}
              <TemplateCard
                title="Gutierrez Classic"
                description="Minimalismo académico y tradicional. Enfoque en contenido y claridad."
                tags={["Clásico", "Académico"]}
                color="bg-blue-100 text-blue-800"
                link="/editor?template=gutierrez"
                templateId="gutierrez"
              />

              {/* Template 5: Palmerston */}
              <TemplateCard
                title="Palmerston Creative"
                description="Diseño audaz con barra lateral oscura. Impacto visual garantizado."
                tags={["Creativo", "Audaz"]}
                color="bg-pink-100 text-pink-800"
                link="/editor?template=palmerston"
                templateId="palmerston"
              />

              {/* Coming Soon */}
              <Card className="group overflow-hidden border-2 border-dashed bg-slate-50/50 hover:bg-slate-100/50 transition-colors flex flex-col items-center justify-center p-8 text-center min-h-[250px]">
                <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Plus className="h-8 w-8 text-slate-400" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-700">Explora más</h3>
                <p className="text-sm text-slate-500 mb-6">
                  Estamos diseñando nuevas plantillas.
                </p>
                <Button disabled variant="outline" className="opacity-50">Próximamente</Button>
              </Card>

            </div>
          </div>

        </section>

        {/* Call to Action */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900/50 to-purple-900/50 pointer-events-none"></div>
          <div className="container px-4 mx-auto relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">¿Listo para impulsar tu carrera?</h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              No pierdas más oportunidades. Crea un currículum que abra puertas en minutos.
            </p>
            <Link to="/editor">
              <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-slate-900 hover:bg-slate-100 hover:scale-105 transition-all shadow-2xl">
                Empezar Gratis
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="bg-slate-900 text-white p-1.5 rounded-lg">
                <LayoutTemplate className="h-4 w-4" />
              </div>
              <span className="font-bold text-lg tracking-tight">CV Maker</span>
            </div>
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} CV Maker. Desarrollado por <a href="#" className="font-medium hover:text-indigo-600 transition-colors">MaxCerecedaDev</a>.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Github className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex flex-col items-start p-8 rounded-2xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl group-hover:scale-110 transition-transform duration-300 group-hover:bg-slate-100">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}

function TemplateCard({ title, description, tags, color, templateId, link }: any) {
  return (
    <Card className="group overflow-hidden border-2 border-transparent hover:border-indigo-500/20 transition-all duration-500 hover:shadow-2xl bg-white dark:bg-slate-900 h-full flex flex-col">
      <div className="w-full aspect-[3/4] bg-slate-200/50 dark:bg-slate-800/50 relative overflow-hidden flex justify-center items-start p-0 transition-all duration-500">

        {/* Scaled Preview Container */}
        <div className="relative w-[210mm] origin-top transform scale-[0.25] group-hover:scale-[0.26] transition-transform duration-700 ease-out h-auto bg-white shadow-xl pointer-events-none select-none">
          <div className="h-[297mm] overflow-hidden bg-white">
            <ResumePreview data={DEMO_RESUME} template={templateId} />
          </div>
          {/* Bottom Fade Overlay */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent z-10"></div>
        </div>

        {/* Overlay Button */}
        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px] z-20">
          <Link to={link}>
            <Button className="rounded-full px-6 gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
              Usar Plantilla <Paintbrush className="h-3 w-3" />
            </Button>
          </Link>
        </div>
      </div>

      <CardHeader className="pb-2">
        <div className="flex items-center justify-between mb-3">
          <div className="flex gap-2">
            {tags.map((tag: string, i: number) => (
              <Badge key={i} variant="secondary" className={`font-normal ${i === 0 ? color : ''}`}>{tag}</Badge>
            ))}
          </div>
          <div className="flex text-amber-400 gap-0.5">
            <Star className="h-3 w-3 fill-current" />
            <Star className="h-3 w-3 fill-current" />
            <Star className="h-3 w-3 fill-current" />
            <Star className="h-3 w-3 fill-current" />
            <Star className="h-3 w-3 fill-current" />
          </div>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-6">
        <CardDescription className="text-base">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}
