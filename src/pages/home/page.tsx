import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, LayoutTemplate } from "lucide-react"

export default function HomePage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            {/* Header */}
            <header className="bg-white border-b px-8 py-4 flex items-center justify-between sticky top-0 z-10">
                <div className="flex items-center gap-2">
                    <div className="bg-primary/10 p-2 rounded-lg">
                        <LayoutTemplate className="h-6 w-6 text-primary" />
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight">CV Maker</h1>
                </div>
                <a href="https://github.com/alex" target="_blank" rel="noreferrer">
                    <Button variant="ghost">GitHub</Button>
                </a>
            </header>

            <main className="max-w-7xl mx-auto px-8 py-12">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        Crea tu CV profesional <br className="hidden sm:block" />
                        <span className="text-primary">en minutos.</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Elige una plantilla, rellena tus datos y descarga tu currículum listo para impresionar a los reclutadores.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-8 text-slate-800">Plantillas Disponibles</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Template 1: Celia (The current one) */}
                        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 group cursor-pointer relative">
                            <div className="h-64 bg-slate-100 relative overflow-hidden flex justify-center items-start pt-8">
                                {/* Mockup of the CV */}
                                <div className="w-[140px] h-[200px] bg-white shadow-sm flex flex-col items-center text-[5px] p-2 space-y-2 box-border transform group-hover:scale-105 transition-transform duration-500">
                                    <div className="w-full flex h-6">
                                        <div className="flex-1 pl-2 flex flex-col justify-center">
                                            <div className="h-4 w-1 bg-black absolute top-1 left-0"></div>
                                            <div className="font-bold text-[8px] leading-[0.8]">CELIA MÁRQUEZ</div>
                                            <div className="tracking-[0.2em] mt-1 text-[3px]">RECURSOS</div>
                                        </div>
                                        <div className="w-[40%] bg-black"></div>
                                    </div>
                                    <div className="flex w-full gap-2">
                                        <div className="w-[30%] bg-slate-200 h-24"></div>
                                        <div className="flex-1 bg-white h-24 space-y-1">
                                            <div className="w-full h-1 bg-slate-100"></div>
                                            <div className="w-full h-1 bg-slate-100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    <span>Márquez Modern</span>
                                    <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">Gratis</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-slate-500">
                                    Diseño limpio y moderno con encabezado distintivo y línea de tiempo. Ideal para perfiles creativos y ejecutivos.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Link to="/editor" className="w-full">
                                    <Button className="w-full group-hover:bg-primary/90">Usar Plantilla</Button>
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
            </main>
        </div>
    )
}
