import { MapPin, Mail, Phone, Globe, Linkedin, Github } from "lucide-react"

interface ResumePreviewProps {
    data: any
}

export function ResumePreview({ data }: ResumePreviewProps) {
    if (!data) return null

    // Destructure with defaults to handle partial data
    const {
        basics = {},
        work = [],
        education = [],
        skills = [],
        languages = [],
        projects = [],
    } = data

    const {
        name = "CELIA MÁRQUEZ",
        label = "RECURSOS",
        email,
        phone,
        url,
        summary,
        location = {},
        profiles = [],
    } = basics

    return (
        <div className="bg-white text-slate-800 w-full max-w-[210mm] min-h-[297mm] mx-auto shadow-2xl overflow-hidden font-montserrat flex flex-col">
            {/* Header Section */}
            <div className="flex h-40   m-4">
                {/* Logo/Name Area */}
                <div className="flex-1 bg-white relative flex flex-col justify-center pl-10 pr-4">
                    {/* Decorative Black Bar */}
                    <div className="absolute top-0 left-0 w-8 h-40 bg-black"></div>

                    <h1 className="text-4xl tracking-widest leading-none font-light uppercase text-black">
                        {name.split(' ')[0]} <br />
                        <span className="font-semibold">{name.split(' ').slice(1).join(' ')}</span>
                    </h1>
                    <p className="tracking-[0.3em] text-sm mt-3 uppercase text-slate-500 font-medium">
                        {label}
                    </p>
                </div>

                {/* Contact Area */}
                <div className="w-[40%] bg-black text-white flex flex-col justify-center px-8 space-y-3 text-xs">
                    {email && (
                        <div className="flex items-center gap-4">
                            <div className="w-5 flex justify-center"><Mail className="h-4 w-4" /></div>
                            <span>{email}</span>
                        </div>
                    )}
                    {phone && (
                        <div className="flex items-center gap-4">
                            <div className="w-5 flex justify-center"><Phone className="h-4 w-4" /></div>
                            <span>{phone}</span>
                        </div>
                    )}
                    {location.city && (
                        <div className="flex items-center gap-4">
                            <div className="w-5 flex justify-center"><MapPin className="h-4 w-4" /></div>
                            <span>{location.city}, {location.region}</span>
                        </div>
                    )}
                    {url && (
                        <div className="flex items-center gap-4">
                            <div className="w-5 flex justify-center"><Globe className="h-4 w-4" /></div>
                            <a href={url} target="_blank" rel="noreferrer" className="hover:underline">{url.replace(/^https?:\/\//, '')}</a>
                        </div>
                    )}
                    {profiles.length > 0 && profiles[0] && (
                        <div className="flex items-center gap-4">
                            <div className="w-5 flex justify-center">
                                {profiles[0].network.toLowerCase().includes('linkedin') ? <Linkedin className="h-4 w-4" /> : <Github className="h-4 w-4" />}
                            </div>
                            <a href={profiles[0].url} target="_blank" rel="noreferrer" className="hover:underline">
                                {profiles[0].username || "Profile"}
                            </a>
                        </div>
                    )}
                </div>
            </div>

            {/* Main Content Two Columns */}
            <div className="flex flex-1">

                {/* Left Sidebar (Grey) */}
                <div className="w-[35%] bg-slate-200 p-8 space-y-10">
                    {/* Education */}
                    {education.length > 0 && (
                        <section>
                            <h2 className="text-xl uppercase font-light text-slate-700 tracking-wider mb-2 border-b-2 border-slate-400 pb-1">Formación</h2>
                            <div className="space-y-6 mt-6">
                                {education.map((edu: any, index: number) => (
                                    <div key={index} className="text-sm">
                                        <p className="font-bold text-slate-800">{edu.studyType}</p>
                                        <p className="text-slate-600 mb-2">{edu.institution} | {edu.startDate.split('-')[0]} - {edu.endDate ? edu.endDate.split('-')[0] : 'Present'}</p>
                                        <p className="text-xs text-slate-500 leading-relaxed italic">
                                            {edu.area}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Skills */}
                    {skills.length > 0 && (
                        <section>
                            <h2 className="text-xl uppercase font-light text-slate-700 tracking-wider mb-2 border-b-2 border-slate-400 pb-1">Habilidades</h2>
                            <div className="mt-6 space-y-4">
                                {skills.slice(0, 3).map((skill: any, index: number) => (
                                    <div key={index}>
                                        <p className="font-bold text-sm text-slate-800 uppercase mb-1">{skill.name}</p>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            {skill.keywords?.join(', ')}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Languages */}
                    {languages.length > 0 && (
                        <section>
                            <h2 className="text-xl uppercase font-light text-slate-700 tracking-wider mb-2 border-b-2 border-slate-400 pb-1">Idiomas</h2>
                            <ul className="mt-6 space-y-2">
                                {languages.map((lang: any, index: number) => (
                                    <li key={index} className="text-sm">
                                        <span className="font-bold text-slate-800">{lang.language}:</span> <span className="text-slate-600">{lang.fluency}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>

                {/* Right Main Content (White) */}
                <div className="flex-1 p-10 space-y-12">
                    {/* Summary */}
                    {summary && (
                        <section>
                            <h2 className="text-xl uppercase font-medium text-slate-700 tracking-wider mb-4 border-b border-slate-300 pb-2">Sobre mí</h2>
                            <p className="text-sm text-slate-600 leading-relaxed text-justify">
                                {summary}
                            </p>
                        </section>
                    )}

                    {/* Experience Timeline */}
                    {work.length > 0 && (
                        <section>
                            <h2 className="text-xl uppercase font-medium text-slate-700 tracking-wider mb-6 border-b border-slate-300 pb-2">Experiencia</h2>
                            <div className="relative border-l-2 border-slate-500 ml-1 space-y-10">
                                {work.map((job: any, index: number) => (
                                    <div key={index} className="pl-8 relative">
                                        {/* Timeline Dot */}
                                        <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-slate-600 bg-white"></div>

                                        <div className="mb-1">
                                            <h3 className="text-sm font-bold uppercase text-slate-800 tracking-wide">{job.name}</h3>
                                            <p className="text-xs font-semibold text-slate-500 uppercase mt-1">
                                                {job.position} <span className="mx-1">|</span> {job.startDate} - {job.endDate || 'Present'}
                                            </p>
                                        </div>

                                        <p className="text-sm text-slate-600 leading-relaxed mb-3 mt-3">
                                            {job.summary}
                                        </p>

                                        {job.highlights && (
                                            <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-500">
                                                {job.highlights.map((highlight: string, i: number) => (
                                                    <li key={i}>{highlight}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

            </div>
        </div>
    )
}
