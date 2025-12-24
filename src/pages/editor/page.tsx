import { useState, useRef } from "react"
import { useReactToPrint } from "react-to-print"
import { useSearchParams } from "react-router-dom"
import { Download, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ResumePreview } from "@/components/resume-preview"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResumeForm } from "@/components/resume-form"
import { sampleResume } from "@/data/sample"

export default function HomePage() {
  const [jsonData, setJsonData] = useState<any>(sampleResume)
  const [error, setError] = useState<string>("")

  // Get template from URL
  const [searchParams] = useSearchParams()
  const template = searchParams.get("template") || "marquez"

  const contentRef = useRef<HTMLDivElement>(null)

  const handlePrint = useReactToPrint({
    contentRef: contentRef,
    documentTitle: `CV - ${jsonData?.basics?.name || "Resume"}`,
    onAfterPrint: () => console.log("Printed successfully"),
  })

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (file.type !== "application/json") {
      setError("Please upload a valid JSON file")
      return
    }

    setError("")

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target?.result as string)
        setJsonData(json)
      } catch (err) {
        setError("Error parsing JSON file")
      }
    }
    reader.readAsText(file)
  }

  const handleJsonTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    try {
      const parsed = JSON.parse(e.target.value)
      setJsonData(parsed)
      setError("")
    } catch (err) {}
  }

  return (
    <div className='h-screen flex flex-col bg-background font-sans text-foreground overflow-hidden'>
      {/* Header */}
      <header className='border-b px-6 py-3 flex items-center justify-between bg-card z-10'>
        <div className='flex items-center gap-2'>
          <a href='/'>
            <h1 className='text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent'>
              CV Maker
            </h1>
          </a>
          <span className='text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground font-medium'>
            Beta
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <Button variant='outline' size='sm' onClick={() => handlePrint()}>
            <Download className='mr-2 h-4 w-4' /> Export PDF
          </Button>
        </div>
      </header>

      <div className='flex-1 flex overflow-hidden'>
        {/* Left Side: Editor */}
        <div className='w-1/2 md:w-[45%] lg:w-[40%] border-r bg-card h-full flex flex-col'>
          <Tabs defaultValue='form' className='flex-1 flex flex-col'>
            <div className='px-4 pt-4 border-b'>
              <TabsList className='w-full grid grid-cols-2'>
                <TabsTrigger value='form'>Manual Edit</TabsTrigger>
                <TabsTrigger value='json'>JSON Input</TabsTrigger>
              </TabsList>
            </div>

            {/* Form Editor Tab */}
            <TabsContent value='form' className='flex-1 overflow-hidden m-0 min-h-0 relative'>
              <div className='absolute inset-0 overflow-y-auto p-4 pb-24'>
                <ResumeForm data={jsonData} updateData={setJsonData} />
              </div>
            </TabsContent>

            {/* JSON Editor Tab */}
            <TabsContent
              value='json'
              className='flex-1 overflow-hidden m-0 flex flex-col p-6 space-y-6'
            >
              {/* Upload Area */}
              <Card className='border-dashed border-2 transition-all hover:bg-muted/50 hover:border-primary/50 shadow-none bg-muted/20'>
                <CardContent className='flex flex-col items-center justify-center py-10 px-4 space-y-4'>
                  <div className='p-3 bg-background rounded-full shadow-sm'>
                    <Upload className='h-6 w-6 text-muted-foreground' />
                  </div>
                  <div className='text-center space-y-1'>
                    <p className='text-sm font-medium'>Sube tu archivo JSON</p>
                    <p className='text-xs text-muted-foreground'>
                      Arrastra y suelta o haz clic para seleccionar
                    </p>
                  </div>
                  <Input
                    id='file-upload'
                    type='file'
                    accept='.json'
                    className='hidden'
                    onChange={handleFileUpload}
                  />
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => document.getElementById("file-upload")?.click()}
                  >
                    Seleccionar Archivo
                  </Button>
                  {error && <p className='text-destructive text-xs font-medium'>{error}</p>}
                </CardContent>
              </Card>

              <div className='flex-1 flex flex-col min-h-0 space-y-2'>
                <Label
                  htmlFor='json-paste'
                  className='text-xs font-semibold text-muted-foreground uppercase tracking-wider'
                >
                  O pega aquí tu código JSON
                </Label>
                <div className='flex-1 relative border rounded-md overflow-hidden shadow-sm'>
                  <Textarea
                    id='json-paste'
                    className='absolute inset-0 resize-none font-mono text-xs bg-muted/30 p-4 leading-relaxed border-0 focus-visible:ring-0 rounded-none'
                    defaultValue={JSON.stringify(jsonData, null, 2)}
                    onChange={handleJsonTextChange}
                    spellCheck={false}
                    placeholder='{ ... }'
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Side: Preview */}
        <div className='flex-1 bg-slate-100/50 dark:bg-slate-900 overflow-hidden relative flex items-center justify-center p-8'>
          <div className='absolute inset-0 overflow-auto flex justify-center p-8'>
            <div
              ref={contentRef}
              className='w-[210mm] origin-top transform scale-100 transition-transform duration-200'
            >
              <ResumePreview data={jsonData} template={template} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
