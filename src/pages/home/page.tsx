import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LayoutTemplate, Github, Zap, CheckCircle2, Download, Star, ArrowRight, Plus } from "lucide-react"

export default function HomePage() {
    return (
        <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bg-primary/10 p-2 rounded-lg">
                            <LayoutTemplate className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-bold text-xl tracking-tight">CV Maker</span>
                    </div>
                    <nav className="flex items-center gap-4">
                        <a href="https://github.com/alex" target="_blank" rel="noreferrer">
                            <Button variant="ghost" size="sm" className="gap-2">
                                <Github className="h-4 w-4" />
                                <span className="hidden sm:inline">GitHub</span>
                            </Button>
                        </a>
                    </nav>
                </div>
            </header>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative py-20 md:py-32 overflow-hidden bg-slate-50 dark:bg-slate-950">
                    <div className="container px-4 mx-auto relative z-10 flex flex-col items-center text-center">
                        <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm font-normal">
                            ✨ La forma más fácil de crear tu CV
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent dark:from-slate-100 dark:to-slate-400">
                            Crea un currículum profesional <br className="hidden sm:block" /> en cuestión de minutos.
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
                            Destaca entre los candidatos con plantillas diseñadas por expertos.
                            Sin registros complicados, completamente gratis.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Link to="/editor">
                                <Button size="lg" className="w-full sm:w-auto px-8 h-12 text-base gap-2 group">
                                    Crear mi CV Ahora
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 text-base" onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })}>
                                Ver Plantillas
                            </Button>
                        </div>
                    </div>

                    {/* Background decoration */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-background">
                    <div className="container px-4 mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <FeatureCard
                                icon={<Zap className="h-10 w-10 text-amber-500" />}
                                title="Rápido y Fácil"
                                description="Interfaz intuitiva que te permite rellenar tus datos y ver los cambios en tiempo real."
                            />
                            <FeatureCard
                                icon={<Download className="h-10 w-10 text-blue-500" />}
                                title="Exportación PDF"
                                description="Descarga tu currículum en formato PDF de alta calidad, listo para enviar."
                            />
                            <FeatureCard
                                icon={<CheckCircle2 className="h-10 w-10 text-green-500" />}
                                title="ATS Friendly"
                                description="Diseños optimizados para pasar los filtros de los sistemas de seguimiento de candidatos."
                            />
                        </div>
                    </div>
                </section>

                {/* Templates Section */}
                <section id="templates" className="py-20 bg-slate-50 dark:bg-slate-900/50">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-col items-center mb-16 text-center">
                            <h2 className="text-3xl font-bold tracking-tight mb-4">Plantillas Profesionales</h2>
                            <p className="text-muted-foreground max-w-2xl">
                                Elige el diseño que mejor se adapte a tu perfil y experencia. Más diseños próximamente.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            {/* Template 1: Celia (Updated) */}
                            <Card className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-card">
                                <div className="aspect-[3/4] bg-slate-100 relative overflow-hidden flex justify-center items-start pt-8 group-hover:bg-slate-200/50 transition-colors">
                                    {/* CV Preview Mockup */}
                                    <div className="w-[180px] h-[260px] bg-white shadow-xl flex flex-col transform group-hover:scale-110 transition-transform duration-500 origin-top overflow-hidden font-sans text-[3.5px]">

                                        {/* Header */}
                                        <div className="flex justify-between items-stretch mt-6 mb-4">
                                            <div className="flex pl-4">
                                                <div className="w-1.5 h-full bg-black mr-2"></div>
                                                <div className="flex flex-col justify-center">
                                                    <div className="text-[6px] tracking-widest uppercase text-slate-500 mb-0.5">Celia</div>
                                                    <div className="text-[10px] uppercase tracking-widest font-light leading-none mb-1">Márquez</div>
                                                    <div className="text-[4px] tracking-[0.2em] text-slate-400 uppercase">Recursos</div>
                                                </div>
                                            </div>
                                            <div className="bg-black text-white p-2 w-[35%] flex flex-col justify-center gap-0.5 mt-[-10px]">
                                                <div className="flex items-center gap-1"><div className="w-1 h-1 bg-white/20 rounded-full"></div><span>hola@sitio.com</span></div>
                                                <div className="flex items-center gap-1"><div className="w-1 h-1 bg-white/20 rounded-full"></div><span>(55) 1234-5678</span></div>
                                                <div className="flex items-center gap-1"><div className="w-1 h-1 bg-white/20 rounded-full"></div><span>Calle 123, Ciudad</span></div>
                                            </div>
                                        </div>

                                        {/* Body */}
                                        <div className="flex flex-1 items-stretch">
                                            {/* Left Sidebar (Gray) */}
                                            <div className="w-[32%] bg-slate-100/80 p-3 pt-2 space-y-4">
                                                <div>
                                                    <div className="font-bold uppercase tracking-widest border-b border-slate-400 pb-0.5 mb-1 text-[4px]">Formación</div>
                                                    <div className="text-justify text-slate-500 leading-tight">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold uppercase tracking-widest border-b border-slate-400 pb-0.5 mb-1 text-[4px]">Habilidades</div>
                                                    <div className="text-justify text-slate-500 leading-tight">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim.
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold uppercase tracking-widest border-b border-slate-400 pb-0.5 mb-1 text-[4px]">Idiomas</div>
                                                    <div className="space-y-0.5">
                                                        <div className="flex justify-between"><span>Español</span><span className="text-slate-400">Nativo</span></div>
                                                        <div className="flex justify-between"><span>Inglés</span><span className="text-slate-400">Alto</span></div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Right Content */}
                                            <div className="flex-1 p-3 pt-2 space-y-4">
                                                {/* Sobre mi */}
                                                <div>
                                                    <div className="font-bold uppercase tracking-widest border-b border-slate-400 pb-0.5 mb-1 text-[4px]">Sobre mí</div>
                                                    <div className="text-justify text-slate-500 leading-tight">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    </div>
                                                </div>

                                                {/* Experiencia (Timeline) */}
                                                <div className="relative">
                                                    <div className="font-bold uppercase tracking-widest border-b border-slate-400 pb-0.5 mb-2 text-[4px]">Experiencia</div>

                                                    {/* Timeline Line */}
                                                    <div className="absolute left-[2.5px] top-4 bottom-0 w-[0.5px] bg-slate-800"></div>

                                                    <div className="space-y-2 pl-3 relative">
                                                        {/* Job 1 */}
                                                        <div className="relative">
                                                            <div className="absolute -left-[10.5px] top-0.5 w-1.5 h-1.5 rounded-full border-[0.5px] border-slate-800 bg-white"></div>
                                                            <div className="font-bold uppercase text-[4px]">Empresa Ensigna</div>
                                                            <div className="mb-0.5 text-slate-400 italic">2020 - Presente</div>
                                                            <div className="text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                                        </div>
                                                        {/* Job 2 */}
                                                        <div className="relative">
                                                            <div className="absolute -left-[10.5px] top-0.5 w-1.5 h-1.5 rounded-full border-[0.5px] border-slate-800 bg-white"></div>
                                                            <div className="font-bold uppercase text-[4px]">Empresa Borcelle</div>
                                                            <div className="mb-0.5 text-slate-400 italic">2017 - 2020</div>
                                                            <div className="text-slate-500">Ut enim ad minim veniam, quis nostrud exercitation.</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">Gratis</Badge>
                                        <div className="flex text-amber-500">
                                            <Star className="h-3 w-3 fill-current" />
                                            <Star className="h-3 w-3 fill-current" />
                                            <Star className="h-3 w-3 fill-current" />
                                            <Star className="h-3 w-3 fill-current" />
                                            <Star className="h-3 w-3 fill-current" />
                                        </div>
                                    </div>
                                    <CardTitle>Márquez Modern</CardTitle>
                                    <CardDescription>
                                        Diseño limpio con barra lateral y línea de tiempo. Estilo editorial moderno.
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    <Link to="/editor" className="w-full">
                                        <Button className="w-full">Usar esta plantilla</Button>
                                    </Link>
                                </CardFooter>
                            </Card>

                            {/* Template 2: Ricardo (New) */}
                            <Card className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-card">
                                <div className="aspect-[3/4] bg-slate-100 relative overflow-hidden flex justify-center items-start pt-8 group-hover:bg-slate-200/50 transition-colors">
                                    {/* Mockup */}
                                    <div className="w-[180px] h-[260px] bg-white shadow-xl flex flex-col text-[5px] transform group-hover:scale-110 transition-transform duration-500 origin-top overflow-hidden font-sans">
                                        {/* Header */}
                                        <div className="bg-[#3e3e3e] text-white p-3 pt-4 pb-3">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <div className="font-bold text-[9px] mb-0.5 leading-none">RICARDO SALINAS</div>
                                                    <div className="text-[5px] text-gray-300 tracking-wider">ANALISTA FINANCIERO</div>
                                                </div>
                                                <div className="flex flex-col gap-0.5 items-end opacity-80">
                                                    <div className="w-12 h-0.5 bg-white/20"></div>
                                                    <div className="w-10 h-0.5 bg-white/20"></div>
                                                    <div className="w-14 h-0.5 bg-white/20"></div>
                                                </div>
                                            </div>
                                            <div className="w-full h-[0.5px] bg-gray-500 mt-2"></div>
                                        </div>
                                        {/* Content */}
                                        <div className="flex p-3 gap-3 h-full items-stretch">
                                            {/* Left Column (Main) */}
                                            <div className="flex-1 space-y-3">
                                                {/* Section: Sobre mí */}
                                                <div>
                                                    <div className="font-bold text-gray-700 tracking-wider uppercase mb-0.5 border-b border-gray-300 pb-0.5">Sobre mí</div>
                                                    <div className="space-y-0.5 mt-1 text-gray-400 leading-tight text-[3.5px] text-justify">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    </div>
                                                </div>
                                                {/* Section: Experiencia */}
                                                <div>
                                                    <div className="font-bold text-gray-700 tracking-wider uppercase mb-1 border-b border-gray-300 pb-0.5">Experiencia</div>
                                                    <div className="mt-1 space-y-2">
                                                        <div>
                                                            <div className="font-bold text-gray-800 text-[4.5px]">Jefe de finanzas</div>
                                                            <div className="text-[3.5px] text-gray-500 italic mb-0.5">Borcelle, 2018 - presente</div>
                                                            <div className="space-y-0.5 pl-0.5">
                                                                <div className="w-full h-0.5 bg-gray-100 rounded"></div>
                                                                <div className="w-11/12 h-0.5 bg-gray-100 rounded"></div>
                                                                <div className="w-10/12 h-0.5 bg-gray-100 rounded"></div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold text-gray-800 text-[4.5px]">Analista Financiero</div>
                                                            <div className="text-[3.5px] text-gray-500 italic mb-0.5">Larana Inc, 2016-2018</div>
                                                            <div className="space-y-0.5 pl-0.5">
                                                                <div className="w-full h-0.5 bg-gray-100 rounded"></div>
                                                                <div className="w-9/12 h-0.5 bg-gray-100 rounded"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Vertical Divider */}
                                            <div className="w-[0.5px] bg-gray-200 h-full"></div>

                                            {/* Right Column (Sidebar) */}
                                            <div className="w-[35%] space-y-3">
                                                <div>
                                                    <div className="font-bold text-gray-700 tracking-wider uppercase mb-0.5 border-b border-gray-300 pb-0.5">Idiomas</div>
                                                    <div className="mt-1 space-y-1">
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-[3.5px]">Inglés</span>
                                                            <div className="w-6 h-0.5 bg-gray-100"><div className="w-[80%] h-full bg-gray-600"></div></div>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-[3.5px]">Portugués</span>
                                                            <div className="w-6 h-0.5 bg-gray-100"><div className="w-[40%] h-full bg-gray-600"></div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold text-gray-700 tracking-wider uppercase mb-0.5 border-b border-gray-300 pb-0.5">Skills</div>
                                                    <div className="mt-1 space-y-1">
                                                        <div className="space-y-0.5">
                                                            <div className="text-[3.5px]">Liderazgo</div>
                                                            <div className="w-full h-0.5 bg-gray-100"><div className="h-full w-[90%] bg-gray-700"></div></div>
                                                        </div>
                                                        <div className="space-y-0.5">
                                                            <div className="text-[3.5px]">Estrategia</div>
                                                            <div className="w-full h-0.5 bg-gray-100"><div className="h-full w-[75%] bg-gray-700"></div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-100">Nuevo</Badge>
                                        <div className="flex text-amber-500">
                                            <Star className="h-3 w-3 fill-current" />
                                            <Star className="h-3 w-3 fill-current" />
                                            <Star className="h-3 w-3 fill-current" />
                                            <Star className="h-3 w-3 fill-current" />
                                            <Star className="h-3 w-3 fill-current" />
                                        </div>
                                    </div>
                                    <CardTitle>Salinas Executive</CardTitle>
                                    <CardDescription>
                                        Perfil corporativo y elegante. Estructura a dos columnas con encabezado oscuro.
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    <Link to="/editor" className="w-full">
                                        <Button className="w-full">Usar esta plantilla</Button>
                                    </Link>
                                </CardFooter>
                            </Card>

                            {/* Template 3: Gutierrez (New) */}
                            <Card className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-card">
                                <div className="aspect-[3/4] bg-slate-100 relative overflow-hidden flex justify-center items-start pt-8 group-hover:bg-slate-200/50 transition-colors">
                                    {/* Mockup */}
                                    <div className="w-[180px] h-[260px] bg-white shadow-xl flex flex-col px-4 py-5 text-[4px] transform group-hover:scale-110 transition-transform duration-500 origin-top overflow-hidden font-serif text-slate-800">
                                        {/* Header */}
                                        <div className="mb-2">
                                            <div className="text-[10px] font-bold uppercase tracking-wide text-black mb-1">Juan Gutierrez</div>
                                            <div className="text-[3.5px] text-justify leading-tight text-slate-600">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ex war ein widerspenstiger Tag.
                                            </div>
                                        </div>

                                        {/* Contact */}
                                        <div className="mb-2">
                                            <div className="font-bold uppercase tracking-wider mb-0.5 border-b border-black pb-0.5">Contacto</div>
                                            <div className="text-[3.5px] mt-0.5">(55) 1234-5678 - Calle Cualquiera 123 - hola@sitio.com</div>
                                        </div>

                                        {/* Experience */}
                                        <div className="flex-1 mb-2">
                                            <div className="font-bold uppercase tracking-wider mb-1.5 border-b border-black pb-0.5">Experiencia Laboral</div>

                                            <div className="mb-2">
                                                <div className="flex justify-between font-bold">
                                                    <span>Director Ventas B2B</span>
                                                    <span>Oct 2024 - Pres.</span>
                                                </div>
                                                <div className="text-[3.5px] leading-tight mt-0.5 text-slate-600 text-justify">
                                                    Lorem Ipsum ist ein einfacher, aber dennoch faszinierender Platzhaltertext der seit Jahrhunderten verwendet wird.
                                                </div>
                                            </div>

                                            <div className="mb-1.5">
                                                <div className="flex justify-between font-bold">
                                                    <span>Director de Growth</span>
                                                    <span>2022 - 2023</span>
                                                </div>
                                                <div className="text-[3.5px] leading-tight mt-0.5 text-slate-600 text-justify">
                                                    Lorem Ipsum ist ein einfacher, aber dennoch faszinierender Platzhaltertext in der Druckindustrie.
                                                </div>
                                            </div>
                                        </div>

                                        {/* Education */}
                                        <div>
                                            <div className="font-bold uppercase tracking-wider mb-1 border-b border-black pb-0.5">Educación</div>
                                            <div className="flex justify-between font-bold">
                                                <span>Universidad San Jose</span>
                                                <span>2012 - 2014</span>
                                            </div>
                                            <div className="text-[3.5px]">Maestría en Ventas</div>
                                        </div>
                                    </div>
                                </div>
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100">Nuevo</Badge>
                                        <div className="flex text-amber-500">
                                            <Star className="h-3 w-3 fill-current" />
                                            <Star className="h-3 w-3 fill-current" />
                                            <Star className="h-3 w-3 fill-current" />
                                            <Star className="h-3 w-3 fill-current" />
                                        </div>
                                    </div>
                                    <CardTitle>Gutierrez Classic</CardTitle>
                                    <CardDescription>
                                        Diseño minimalista y tradicional. Estructura de una sola columna, enfoque académico.
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    <Link to="/editor" className="w-full">
                                        <Button className="w-full">Usar esta plantilla</Button>
                                    </Link>
                                </CardFooter>
                            </Card>

                            {/* Template 4: Palmerston (New) */}
                            <Card className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-card">
                                <div className="aspect-[3/4] bg-slate-100 relative overflow-hidden flex justify-center items-center pt-4 group-hover:bg-slate-200/50 transition-colors">
                                    {/* Mockup */}
                                    <div className="w-[180px] h-[260px] bg-white shadow-xl flex text-[4px] transform group-hover:scale-110 transition-transform duration-500 origin-center overflow-hidden font-sans relative">

                                        {/* Left Sidebar */}
                                        <div className="w-[35%] bg-[#1a1a1a] text-white flex flex-col p-3 pt-12 space-y-3 relative z-10">

                                            {/* Photo Circle (Absolute to overlap) */}
                                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-2 border-white bg-gray-400 overflow-hidden z-20">
                                                <div className="w-full h-full bg-gray-500"></div>
                                            </div>

                                            <div className="mt-4">
                                                <div className="font-bold uppercase tracking-wider mb-1 text-[5px]">About Me</div>
                                                <div className="text-[3px] text-gray-300 leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                            </div>

                                            <div>
                                                <div className="font-bold uppercase tracking-wider mb-1 text-[5px]">Contact</div>
                                                <div className="space-y-0.5 text-[3px] text-gray-300">
                                                    <div>📞 123-456-7890</div>
                                                    <div>✉️ hello@site.com</div>
                                                    <div>📍 Any City, ST</div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className="font-bold uppercase tracking-wider mb-1 text-[5px]">Skills</div>
                                                <ul className="text-[3px] text-gray-300 list-disc list-inside">
                                                    <li>Management</li>
                                                    <li>Negotiation</li>
                                                    <li>Leadership</li>
                                                </ul>
                                            </div>

                                            {/* Bottom decorative curve */}
                                            <div className="absolute bottom-0 left-0 w-full h-10 bg-white rounded-tr-[40px]"></div>
                                        </div>

                                        {/* Right Content */}
                                        <div className="flex-1 flex flex-col">
                                            {/* Header Block */}
                                            <div className="h-16 bg-[#1a1a1a] flex flex-col justify-center px-4 text-white">
                                                <div className="text-[10px] font-bold uppercase tracking-wide">Adeline Palmerston</div>
                                                <div className="text-[4px] text-gray-400 tracking-wider uppercase">Marketing Manager</div>
                                            </div>

                                            {/* Body */}
                                            <div className="p-3 space-y-3">
                                                <div>
                                                    <div className="font-bold text-gray-700 text-[6px] mb-1">Work Experience</div>
                                                    <div className="space-y-1.5">
                                                        <div>
                                                            <div className="flex justify-between font-bold text-[4px]">
                                                                <span>Marketing Manager</span>
                                                                <span>2022-2023</span>
                                                            </div>
                                                            <div className="text-[3.5px] italic text-gray-500">Arrowai Industries</div>
                                                            <div className="text-[3px] text-gray-400 leading-tight mt-0.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus.</div>
                                                        </div>
                                                        <div>
                                                            <div className="flex justify-between font-bold text-[4px]">
                                                                <span>Marketing Manager</span>
                                                                <span>2020-2021</span>
                                                            </div>
                                                            <div className="text-[3.5px] italic text-gray-500">Ginyard Int.</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="font-bold text-gray-700 text-[6px] mb-1">Education</div>
                                                    <div>
                                                        <div className="flex justify-between font-bold text-[4px]">
                                                            <span>Rimberio University</span>
                                                            <span>2015-2019</span>
                                                        </div>
                                                        <div className="text-[3.5px] text-gray-500">Business Management</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <Badge variant="secondary" className="bg-pink-100 text-pink-700 hover:bg-pink-100">Nuevo</Badge>
                                        <div className="flex text-amber-500">
                                            <Star className="h-3 w-3 fill-current" />
                                            <Star className="h-3 w-3 fill-current" />
                                            <Star className="h-3 w-3 fill-current" />
                                            <Star className="h-3 w-3 fill-current" />
                                            <Star className="h-3 w-3 fill-current" />
                                        </div>
                                    </div>
                                    <CardTitle>Palmerston Creative</CardTitle>
                                    <CardDescription>
                                        Diseño audaz con barra lateral oscura y encabezado integrado. Ideal para destacar.
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    <Link to="/editor" className="w-full">
                                        <Button className="w-full">Usar esta plantilla</Button>
                                    </Link>
                                </CardFooter>
                            </Card>

                            {/* Coming Soon Template */}
                            <Card className="overflow-hidden opacity-60 bg-slate-50 border-dashed">
                                <div className="h-64 flex flex-col items-center justify-center text-slate-400 bg-slate-100/50">
                                    <Plus className="h-12 w-12 mb-2 opacity-50" />
                                    <span className="font-medium">Más plantillas pronto</span>
                                </div>
                                <CardHeader>
                                    <CardTitle>Próximamente</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-slate-400">
                                        Estamos trabajando en nuevos diseños para adaptarse a tu estilo.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Button disabled variant="secondary" className="w-full">No disponible</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="border-t py-8 bg-background">
                <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} CV Maker. Desarrollado con pasión.</p>
                </div>
            </footer>
        </div>
    )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-slate-950 border shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4 p-3 bg-slate-50 dark:bg-slate-900 rounded-full">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </div>
    )
}
