import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Plus, Trash2 } from "lucide-react"

interface ResumeFormProps {
    data: any
    updateData: (newData: any) => void
}

export function ResumeForm({ data, updateData }: ResumeFormProps) {
    if (!data) return null

    const handleBasicChange = (field: string, value: string) => {
        updateData({
            ...data,
            basics: {
                ...data.basics,
                [field]: value
            }
        })
    }

    const handleLocationChange = (field: string, value: string) => {
        updateData({
            ...data,
            basics: {
                ...data.basics,
                location: {
                    ...data.basics.location,
                    [field]: value
                }
            }
        })
    }

    // Generic handler for array updates (work, education, etc)
    const handleArrayChange = (section: string, index: number, field: string, value: string) => {
        const newArray = [...(data[section] || [])]
        newArray[index] = { ...newArray[index], [field]: value }
        updateData({ ...data, [section]: newArray })
    }

    const addItem = (section: string, initialItem: any) => {
        updateData({
            ...data,
            [section]: [...(data[section] || []), initialItem]
        })
    }

    const removeItem = (section: string, index: number) => {
        const newArray = [...(data[section] || [])]
        newArray.splice(index, 1)
        updateData({ ...data, [section]: newArray })
    }


    return (
        <div className="space-y-4 pr-4">
            <Accordion type="single" collapsible className="w-full" defaultValue="basics">
                {/* Basics Section */}
                <AccordionItem value="basics">
                    <AccordionTrigger>Información Básica</AccordionTrigger>
                    <AccordionContent className="space-y-4 p-2">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Nombre Completo</Label>
                                <Input
                                    value={data.basics?.name || ""}
                                    onChange={(e) => handleBasicChange("name", e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Título Profesional</Label>
                                <Input
                                    value={data.basics?.label || ""}
                                    onChange={(e) => handleBasicChange("label", e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Email</Label>
                                <Input
                                    value={data.basics?.email || ""}
                                    onChange={(e) => handleBasicChange("email", e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Teléfono</Label>
                                <Input
                                    value={data.basics?.phone || ""}
                                    onChange={(e) => handleBasicChange("phone", e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Sitio Web</Label>
                                <Input
                                    value={data.basics?.url || ""}
                                    onChange={(e) => handleBasicChange("url", e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Ciudad</Label>
                                <Input
                                    value={data.basics?.location?.city || ""}
                                    onChange={(e) => handleLocationChange("city", e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Región / Dirección</Label>
                                <Input
                                    value={data.basics?.location?.region || ""}
                                    onChange={(e) => handleLocationChange("region", e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label>Resumen (Sobre mí)</Label>
                            <Textarea
                                value={data.basics?.summary || ""}
                                onChange={(e) => handleBasicChange("summary", e.target.value)}
                                className="h-24"
                            />
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* Work Experience */}
                <AccordionItem value="work">
                    <AccordionTrigger>Experiencia Laboral</AccordionTrigger>
                    <AccordionContent className="space-y-4 p-2">
                        {(data.work || []).map((job: any, index: number) => (
                            <div key={index} className="border p-4 rounded-md space-y-3 relative bg-slate-50/50">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute top-0 right-2 text-red-500 hover:text-red-700 hover:bg-red-50"
                                    onClick={() => removeItem("work", index)}
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="space-y-1">
                                        <Label>Empresa</Label>
                                        <Input value={job.name || ""} onChange={(e) => handleArrayChange("work", index, "name", e.target.value)} />
                                    </div>
                                    <div className="space-y-1">
                                        <Label>Puesto</Label>
                                        <Input value={job.position || ""} onChange={(e) => handleArrayChange("work", index, "position", e.target.value)} />
                                    </div>
                                    <div className="space-y-1">
                                        <Label>Inicio</Label>
                                        <Input value={job.startDate || ""} onChange={(e) => handleArrayChange("work", index, "startDate", e.target.value)} />
                                    </div>
                                    <div className="space-y-1">
                                        <Label>Fin</Label>
                                        <Input value={job.endDate || ""} onChange={(e) => handleArrayChange("work", index, "endDate", e.target.value)} />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <Label>Resumen</Label>
                                    <Textarea value={job.summary || ""} onChange={(e) => handleArrayChange("work", index, "summary", e.target.value)} />
                                </div>
                            </div>
                        ))}
                        <Button onClick={() => addItem("work", { name: "Nueva Empresa", position: "Puesto", startDate: "2023", summary: "" })} variant="outline" className="w-full">
                            <Plus className="mr-2 h-4 w-4" /> Agregar Experiencia
                        </Button>
                    </AccordionContent>
                </AccordionItem>

                {/* Education */}
                <AccordionItem value="education">
                    <AccordionTrigger>Educación</AccordionTrigger>
                    <AccordionContent className="space-y-4 p-2">
                        {(data.education || []).map((edu: any, index: number) => (
                            <div key={index} className="border p-4 rounded-md space-y-3 relative bg-slate-50/50">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute top-0 right-2 text-red-500 hover:text-red-700 hover:bg-red-50"
                                    onClick={() => removeItem("education", index)}
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="space-y-1">
                                        <Label>Institución</Label>
                                        <Input value={edu.institution || ""} onChange={(e) => handleArrayChange("education", index, "institution", e.target.value)} />
                                    </div>
                                    <div className="space-y-1">
                                        <Label>Área</Label>
                                        <Input value={edu.area || ""} onChange={(e) => handleArrayChange("education", index, "area", e.target.value)} />
                                    </div>
                                    <div className="space-y-1">
                                        <Label>Tipo (Grado, etc)</Label>
                                        <Input value={edu.studyType || ""} onChange={(e) => handleArrayChange("education", index, "studyType", e.target.value)} />
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="space-y-1">
                                            <Label>Inicio</Label>
                                            <Input value={edu.startDate || ""} onChange={(e) => handleArrayChange("education", index, "startDate", e.target.value)} />
                                        </div>
                                        <div className="space-y-1">
                                            <Label>Fin</Label>
                                            <Input value={edu.endDate || ""} onChange={(e) => handleArrayChange("education", index, "endDate", e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <Button onClick={() => addItem("education", { institution: "Nueva Institución", area: "Area", studyType: "Grado", startDate: "2010", endDate: "2014" })} variant="outline" className="w-full">
                            <Plus className="mr-2 h-4 w-4" /> Agregar Educación
                        </Button>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
