import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
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
        [field]: value,
      },
    })
  }

  const handleLocationChange = (field: string, value: string) => {
    updateData({
      ...data,
      basics: {
        ...data.basics,
        location: {
          ...data.basics.location,
          [field]: value,
        },
      },
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
      [section]: [...(data[section] || []), initialItem],
    })
  }

  const removeItem = (section: string, index: number) => {
    const newArray = [...(data[section] || [])]
    newArray.splice(index, 1)
    updateData({ ...data, [section]: newArray })
  }

  return (
    <div className='space-y-4 pr-4'>
      <Accordion type='single' collapsible className='w-full' defaultValue='basics'>
        {/* Basics Section */}
        <AccordionItem value='basics'>
          <AccordionTrigger>Información Básica</AccordionTrigger>
          <AccordionContent className='space-y-4 p-2'>
            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <Label>Nombre Completo</Label>
                <Input
                  value={data.basics?.name || ""}
                  onChange={(e) => handleBasicChange("name", e.target.value)}
                />
              </div>
              <div className='space-y-2'>
                <Label>Título Profesional</Label>
                <Input
                  value={data.basics?.label || ""}
                  onChange={(e) => handleBasicChange("label", e.target.value)}
                />
              </div>
              <div className='space-y-2'>
                <Label>Email</Label>
                <Input
                  value={data.basics?.email || ""}
                  onChange={(e) => handleBasicChange("email", e.target.value)}
                />
              </div>
              <div className='space-y-2'>
                <Label>Teléfono</Label>
                <Input
                  value={data.basics?.phone || ""}
                  onChange={(e) => handleBasicChange("phone", e.target.value)}
                />
              </div>
              <div className='space-y-2'>
                <Label>Sitio Web</Label>
                <Input
                  value={data.basics?.url || ""}
                  onChange={(e) => handleBasicChange("url", e.target.value)}
                />
              </div>
              <div className='space-y-2'>
                <Label>Ciudad</Label>
                <Input
                  value={data.basics?.location?.city || ""}
                  onChange={(e) => handleLocationChange("city", e.target.value)}
                />
              </div>
              <div className='space-y-2'>
                <Label>Región / Dirección</Label>
                <Input
                  value={data.basics?.location?.region || ""}
                  onChange={(e) => handleLocationChange("region", e.target.value)}
                />
              </div>
            </div>
            <div className='space-y-2'>
              <Label>Resumen (Sobre mí)</Label>
              <Textarea
                value={data.basics?.summary || ""}
                onChange={(e) => handleBasicChange("summary", e.target.value)}
                className='h-24'
              />
            </div>

            {/* Profiles / Social Networks */}
            <div className='space-y-3 pt-4 border-t'>
              <Label className='text-base font-semibold'>Redes Sociales</Label>
              {(data.basics?.profiles || []).map((profile: any, index: number) => (
                <div
                  key={index}
                  className='flex gap-2 items-center border p-2 rounded bg-slate-50/50'
                >
                  <div className='grid grid-cols-3 gap-2 flex-1'>
                    <Input
                      placeholder='Red (LinkedIn)'
                      value={profile.network || ""}
                      onChange={(e) => {
                        const newProfiles = [...(data.basics?.profiles || [])]
                        newProfiles[index] = { ...newProfiles[index], network: e.target.value }
                        updateData({ ...data, basics: { ...data.basics, profiles: newProfiles } })
                      }}
                    />
                    <Input
                      placeholder='Usuario'
                      value={profile.username || ""}
                      onChange={(e) => {
                        const newProfiles = [...(data.basics?.profiles || [])]
                        newProfiles[index] = { ...newProfiles[index], username: e.target.value }
                        updateData({ ...data, basics: { ...data.basics, profiles: newProfiles } })
                      }}
                    />
                    <Input
                      placeholder='URL'
                      value={profile.url || ""}
                      onChange={(e) => {
                        const newProfiles = [...(data.basics?.profiles || [])]
                        newProfiles[index] = { ...newProfiles[index], url: e.target.value }
                        updateData({ ...data, basics: { ...data.basics, profiles: newProfiles } })
                      }}
                    />
                  </div>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='h-8 w-8 text-red-500'
                    onClick={() => {
                      const newProfiles = [...(data.basics?.profiles || [])]
                      newProfiles.splice(index, 1)
                      updateData({ ...data, basics: { ...data.basics, profiles: newProfiles } })
                    }}
                  >
                    <Trash2 className='h-4 w-4' />
                  </Button>
                </div>
              ))}
              <Button
                variant='outline'
                size='sm'
                onClick={() => {
                  const newProfiles = [
                    ...(data.basics?.profiles || []),
                    { network: "", username: "", url: "" },
                  ]
                  updateData({ ...data, basics: { ...data.basics, profiles: newProfiles } })
                }}
              >
                <Plus className='mr-2 h-4 w-4' /> Agregar Red Social
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Work Experience */}
        <AccordionItem value='work'>
          <AccordionTrigger>Experiencia Laboral</AccordionTrigger>
          <AccordionContent className='space-y-4 p-2'>
            {(data.work || []).map((job: any, index: number) => (
              <div key={index} className='border p-4 rounded-md space-y-3 relative bg-slate-50/50'>
                <Button
                  variant='ghost'
                  size='icon'
                  className='absolute top-0 right-2 text-red-500 hover:text-red-700 hover:bg-red-50'
                  onClick={() => removeItem("work", index)}
                >
                  <Trash2 className='h-4 w-4' />
                </Button>
                <div className='grid grid-cols-2 gap-3'>
                  <div className='space-y-1'>
                    <Label>Empresa</Label>
                    <Input
                      value={job.name || ""}
                      onChange={(e) => handleArrayChange("work", index, "name", e.target.value)}
                    />
                  </div>
                  <div className='space-y-1'>
                    <Label>Puesto</Label>
                    <Input
                      value={job.position || ""}
                      onChange={(e) => handleArrayChange("work", index, "position", e.target.value)}
                    />
                  </div>
                  <div className='space-y-1'>
                    <Label>Inicio</Label>
                    <Input
                      value={job.startDate || ""}
                      onChange={(e) =>
                        handleArrayChange("work", index, "startDate", e.target.value)
                      }
                    />
                  </div>
                  <div className='space-y-1'>
                    <Label>Fin</Label>
                    <Input
                      value={job.endDate || ""}
                      onChange={(e) => handleArrayChange("work", index, "endDate", e.target.value)}
                    />
                  </div>
                </div>
                <div className='space-y-1'>
                  <Label>Resumen (Párrafo)</Label>
                  <Textarea
                    value={job.summary || ""}
                    onChange={(e) => handleArrayChange("work", index, "summary", e.target.value)}
                  />
                </div>
                <div className='space-y-1'>
                  <Label>Logros / Puntos Clave (Uno por línea)</Label>
                  <Textarea
                    value={job.highlights?.join("\n") || ""}
                    onChange={(e) => {
                      const val = e.target.value.split("\n")
                      const newWork = [...(data.work || [])]
                      newWork[index] = { ...newWork[index], highlights: val }
                      updateData({ ...data, work: newWork })
                    }}
                    className='min-h-[100px]'
                  />
                </div>
              </div>
            ))}
            <Button
              onClick={() =>
                addItem("work", {
                  name: "Nueva Empresa",
                  position: "Puesto",
                  startDate: "2023",
                  summary: "",
                })
              }
              variant='outline'
              className='w-full'
            >
              <Plus className='mr-2 h-4 w-4' /> Agregar Experiencia
            </Button>
          </AccordionContent>
        </AccordionItem>

        {/* Education */}
        <AccordionItem value='education'>
          <AccordionTrigger>Educación</AccordionTrigger>
          <AccordionContent className='space-y-4 p-2'>
            {(data.education || []).map((edu: any, index: number) => (
              <div key={index} className='border p-4 rounded-md space-y-3 relative bg-slate-50/50'>
                <Button
                  variant='ghost'
                  size='icon'
                  className='absolute top-0 right-2 text-red-500 hover:text-red-700 hover:bg-red-50'
                  onClick={() => removeItem("education", index)}
                >
                  <Trash2 className='h-4 w-4' />
                </Button>
                <div className='grid grid-cols-2 gap-3'>
                  <div className='space-y-1'>
                    <Label>Institución</Label>
                    <Input
                      value={edu.institution || ""}
                      onChange={(e) =>
                        handleArrayChange("education", index, "institution", e.target.value)
                      }
                    />
                  </div>
                  <div className='space-y-1'>
                    <Label>Área</Label>
                    <Input
                      value={edu.area || ""}
                      onChange={(e) =>
                        handleArrayChange("education", index, "area", e.target.value)
                      }
                    />
                  </div>
                  <div className='space-y-1'>
                    <Label>Tipo (Grado, etc)</Label>
                    <Input
                      value={edu.studyType || ""}
                      onChange={(e) =>
                        handleArrayChange("education", index, "studyType", e.target.value)
                      }
                    />
                  </div>
                  <div className='grid grid-cols-2 gap-2'>
                    <div className='space-y-1'>
                      <Label>Inicio</Label>
                      <Input
                        value={edu.startDate || ""}
                        onChange={(e) =>
                          handleArrayChange("education", index, "startDate", e.target.value)
                        }
                      />
                    </div>
                    <div className='space-y-1'>
                      <Label>Fin</Label>
                      <Input
                        value={edu.endDate || ""}
                        onChange={(e) =>
                          handleArrayChange("education", index, "endDate", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Button
              onClick={() =>
                addItem("education", {
                  institution: "Nueva Institución",
                  area: "Area",
                  studyType: "Grado",
                  startDate: "2010",
                  endDate: "2014",
                })
              }
              variant='outline'
              className='w-full'
            >
              <Plus className='mr-2 h-4 w-4' /> Agregar Educación
            </Button>
          </AccordionContent>
        </AccordionItem>

        {/* Projects */}
        <AccordionItem value='projects'>
          <AccordionTrigger>Proyectos</AccordionTrigger>
          <AccordionContent className='space-y-4 p-2'>
            {(data.projects || []).map((project: any, index: number) => (
              <div key={index} className='border p-4 rounded-md space-y-3 relative bg-slate-50/50'>
                <Button
                  variant='ghost'
                  size='icon'
                  className='absolute top-0 right-2 text-red-500 hover:text-red-700 hover:bg-red-50'
                  onClick={() => removeItem("projects", index)}
                >
                  <Trash2 className='h-4 w-4' />
                </Button>
                <div className='space-y-2'>
                  <Label>Nombre del Proyecto</Label>
                  <Input
                    value={project.name || ""}
                    onChange={(e) => handleArrayChange("projects", index, "name", e.target.value)}
                  />
                </div>
                <div className='space-y-2'>
                  <Label>Descripción</Label>
                  <Textarea
                    value={project.description || ""}
                    onChange={(e) =>
                      handleArrayChange("projects", index, "description", e.target.value)
                    }
                  />
                </div>
                <div className='space-y-1'>
                  <Label>Logros / Puntos Clave (Uno por línea)</Label>
                  <Textarea
                    value={project.highlights?.join("\n") || ""}
                    onChange={(e) => {
                      const val = e.target.value.split("\n")
                      const newProjects = [...(data.projects || [])]
                      newProjects[index] = { ...newProjects[index], highlights: val }
                      updateData({ ...data, projects: newProjects })
                    }}
                    className='min-h-[100px]'
                  />
                </div>
                <div className='grid grid-cols-2 gap-3'>
                  <div className='space-y-1'>
                    <Label>URL</Label>
                    <Input
                      value={project.url || ""}
                      onChange={(e) => handleArrayChange("projects", index, "url", e.target.value)}
                    />
                  </div>
                  <div className='space-y-1'>
                    <Label>Fechas</Label>
                    <div className='flex gap-2'>
                      <Input
                        placeholder='Inicio'
                        value={project.startDate || ""}
                        onChange={(e) =>
                          handleArrayChange("projects", index, "startDate", e.target.value)
                        }
                      />
                      <Input
                        placeholder='Fin'
                        value={project.endDate || ""}
                        onChange={(e) =>
                          handleArrayChange("projects", index, "endDate", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Button
              onClick={() =>
                addItem("projects", {
                  name: "Nuevo Proyecto",
                  description: "Descripción del proyecto...",
                  startDate: "2023",
                  url: "",
                })
              }
              variant='outline'
              className='w-full'
            >
              <Plus className='mr-2 h-4 w-4' /> Agregar Proyecto
            </Button>
          </AccordionContent>
        </AccordionItem>

        {/* Skills */}
        <AccordionItem value='skills'>
          <AccordionTrigger>Habilidades</AccordionTrigger>
          <AccordionContent className='space-y-4 p-2'>
            {(data.skills || []).map((skill: any, index: number) => (
              <div key={index} className='border p-4 rounded-md space-y-3 relative bg-slate-50/50'>
                <Button
                  variant='ghost'
                  size='icon'
                  className='absolute top-0 right-2 text-red-500 hover:text-red-700 hover:bg-red-50'
                  onClick={() => removeItem("skills", index)}
                >
                  <Trash2 className='h-4 w-4' />
                </Button>
                <div className='space-y-2'>
                  <Label>Categoría / Nombre</Label>
                  <Input
                    value={skill.name || ""}
                    onChange={(e) => handleArrayChange("skills", index, "name", e.target.value)}
                  />
                </div>
                <div className='space-y-2'>
                  <Label>Keywords (separados por coma)</Label>
                  <Textarea
                    value={skill.keywords?.join(", ") || ""}
                    onChange={(e) => {
                      const val = e.target.value.split(",").map((s) => s.trim())
                      // Special handle for array inside array object?
                      // The helper handleArrayChange expects string value for a field.
                      // We need to customize this or update the helper.
                      // For now, let's just cheat and update the whole object or create a specific handler?
                      // Or better, inline the update:
                      const newSkills = [...(data.skills || [])]
                      newSkills[index] = { ...newSkills[index], keywords: val }
                      updateData({ ...data, skills: newSkills })
                    }}
                  />
                </div>
              </div>
            ))}
            <Button
              onClick={() => addItem("skills", { name: "Nueva Habilidad", keywords: [] })}
              variant='outline'
              className='w-full'
            >
              <Plus className='mr-2 h-4 w-4' /> Agregar Habilidad
            </Button>
          </AccordionContent>
        </AccordionItem>

        {/* Languages */}
        <AccordionItem value='languages'>
          <AccordionTrigger>Idiomas</AccordionTrigger>
          <AccordionContent className='space-y-4 p-2'>
            {(data.languages || []).map((lang: any, index: number) => (
              <div
                key={index}
                className='flex gap-2 items-end border p-4 rounded-md relative bg-slate-50/50'
              >
                <div className='flex-1 space-y-1'>
                  <Label>Idioma</Label>
                  <Input
                    value={lang.language || ""}
                    onChange={(e) =>
                      handleArrayChange("languages", index, "language", e.target.value)
                    }
                  />
                </div>
                <div className='flex-1 space-y-1'>
                  <Label>Nivel</Label>
                  <Input
                    value={lang.fluency || ""}
                    onChange={(e) =>
                      handleArrayChange("languages", index, "fluency", e.target.value)
                    }
                  />
                </div>
                <Button
                  variant='ghost'
                  size='icon'
                  className='text-red-500 hover:text-red-700 hover:bg-red-50 mb-0.5'
                  onClick={() => removeItem("languages", index)}
                >
                  <Trash2 className='h-4 w-4' />
                </Button>
              </div>
            ))}
            <Button
              onClick={() => addItem("languages", { language: "Idioma", fluency: "Nativo" })}
              variant='outline'
              className='w-full'
            >
              <Plus className='mr-2 h-4 w-4' /> Agregar Idioma
            </Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
