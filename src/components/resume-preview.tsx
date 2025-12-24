import { MapPin, Mail, Phone, Globe } from "lucide-react"

interface ResumePreviewProps {
    data: any
    template?: string
}

export function ResumePreview({ data, template = "marquez" }: ResumePreviewProps) {
    if (!data) return null

    // Destructure with defaults
    const {
        basics = {},
        work = [],
        education = [],
        skills = [],
        languages = [],
        projects = [],
    } = data

    const {
        name = "Nombre Apellido",
        label = "Cargo",
        email,
        phone,
        url,
        summary,
        location = {},
        profiles = [],
    } = basics

    // Helper components for consistency across templates
    const ContactItem = ({ icon: Icon, text, link }: any) => (
        <div className="flex items-center gap-2">
            {Icon && <div className="w-4 flex justify-center"><Icon className="h-3 w-3" /></div>}
            {link ? (
                <a href={link} target="_blank" rel="noreferrer" className="hover:underline">{text}</a>
            ) : (
                <span>{text}</span>
            )}
        </div>
    )

    /* ===========================================================================================
       TEMPLATE: MARQUEZ MODERN (Original)
       =========================================================================================== */
    if (template === "marquez") {
        return (
            <div className="bg-white text-slate-800 w-full max-w-[210mm] min-h-[297mm] mx-auto shadow-2xl overflow-hidden font-montserrat flex flex-col">
                {/* Header */}
                <div className="flex h-40 m-4">
                    <div className="flex-1 bg-white relative flex flex-col justify-center pl-10 pr-4">
                        <div className="absolute top-0 left-0 w-8 h-40 bg-black"></div>
                        <h1 className="text-4xl tracking-widest leading-none font-light uppercase text-black">
                            {name.split(' ')[0]} <br />
                            <span className="font-semibold">{name.split(' ').slice(1).join(' ')}</span>
                        </h1>
                        <p className="tracking-[0.3em] text-sm mt-3 uppercase text-slate-500 font-medium">{label}</p>
                    </div>
                    <div className="w-[40%] bg-black text-white flex flex-col justify-center px-8 space-y-3 text-xs">
                        {email && <ContactItem icon={Mail} text={email} />}
                        {phone && <ContactItem icon={Phone} text={phone} />}
                        {location.city && <ContactItem icon={MapPin} text={`${location.city}, ${location.region}`} />}
                        {url && <ContactItem icon={Globe} text={url.replace(/^https?:\/\//, '')} link={url} />}
                    </div>
                </div>

                <div className="flex flex-1">
                    {/* Left Sidebar */}
                    <div className="w-[35%] bg-slate-200 p-8 space-y-10">
                        {education.length > 0 && (
                            <section>
                                <h2 className="text-xl uppercase font-light text-slate-700 tracking-wider mb-2 border-b-2 border-slate-400 pb-1">Formación</h2>
                                <div className="space-y-6 mt-6">
                                    {education.map((edu: any, index: number) => (
                                        <div key={index} className="text-sm">
                                            <p className="font-bold text-slate-800">{edu.studyType}</p>
                                            <p className="text-slate-600 mb-2">{edu.institution} | {edu.startDate.split('-')[0]} - {edu.endDate ? edu.endDate.split('-')[0] : 'Presente'}</p>
                                            <p className="text-xs text-slate-500 italic">{edu.area}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                        {skills.length > 0 && (
                            <section>
                                <h2 className="text-xl uppercase font-light text-slate-700 tracking-wider mb-2 border-b-2 border-slate-400 pb-1">Habilidades</h2>
                                <div className="mt-6 space-y-4">
                                    {skills.map((skill: any, index: number) => (
                                        <div key={index}>
                                            <p className="font-bold text-sm text-slate-800 uppercase mb-1">{skill.name}</p>
                                            <p className="text-xs text-slate-600">{skill.keywords?.join(', ')}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
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

                    {/* Right Content */}
                    <div className="flex-1 p-10 space-y-12">
                        {summary && (
                            <section>
                                <h2 className="text-xl uppercase font-medium text-slate-700 tracking-wider mb-4 border-b border-slate-300 pb-2">Sobre mí</h2>
                                <p className="text-sm text-slate-600 leading-relaxed text-justify">{summary}</p>
                            </section>
                        )}
                        {work.length > 0 && (
                            <section>
                                <h2 className="text-xl uppercase font-medium text-slate-700 tracking-wider mb-6 border-b border-slate-300 pb-2">Experiencia</h2>
                                <div className="relative border-l-2 border-slate-500 ml-1 space-y-10">
                                    {work.map((job: any, index: number) => (
                                        <div key={index} className="pl-8 relative">
                                            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-slate-600 bg-white"></div>
                                            <div className="mb-1">
                                                <h3 className="text-sm font-bold uppercase text-slate-800 tracking-wide">{job.name}</h3>
                                                <p className="text-xs font-semibold text-slate-500 uppercase mt-1">
                                                    {job.position} <span className="mx-1">|</span> {job.startDate} - {job.endDate || 'Presente'}
                                                </p>
                                            </div>
                                            <p className="text-sm text-slate-600 leading-relaxed mb-3 mt-3">{job.summary}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                        {projects.length > 0 && (
                            <section>
                                <h2 className="text-xl uppercase font-medium text-slate-700 tracking-wider mb-6 border-b border-slate-300 pb-2">Proyectos</h2>
                                <div className="relative border-l-2 border-slate-500 ml-1 space-y-10">
                                    {projects.map((project: any, index: number) => (
                                        <div key={index} className="pl-8 relative">
                                            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-slate-600 bg-white"></div>
                                            <div className="mb-1">
                                                <h3 className="text-sm font-bold uppercase text-slate-800 tracking-wide">{project.name}</h3>
                                                <p className="text-xs font-semibold text-slate-500 uppercase mt-1">
                                                    {project.startDate || ''} {project.endDate ? `- ${project.endDate}` : ''}
                                                    {project.url && (
                                                        <>
                                                            {(project.startDate || project.endDate) && <span className="mx-1">|</span>}
                                                            <a href={project.url} target="_blank" rel="noreferrer" className="lowercase hover:text-blue-600 transition-colors">
                                                                {project.url.replace(/^https?:\/\//, '')}
                                                            </a>
                                                        </>
                                                    )}
                                                </p>
                                            </div>
                                            <p className="text-sm text-slate-600 leading-relaxed mb-3 mt-3">{project.description}</p>
                                            {project.highlights && (
                                                <ul className="list-disc list-inside text-xs text-slate-500 mt-2 space-y-1">
                                                    {project.highlights.map((h: string, i: number) => (
                                                        <li key={i}>{h}</li>
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

    /* ===========================================================================================
       TEMPLATE: SALINAS EXECUTIVE (Corporate, Dark Header, Two Columns)
       =========================================================================================== */
    if (template === "salinas") {
        return (
            <div className="bg-white text-slate-800 w-full max-w-[210mm] min-h-[297mm] mx-auto shadow-2xl overflow-hidden font-sans flex flex-col">
                {/* Dark Header */}
                <div className="bg-[#3e3e3e] text-white p-10 flex justify-between items-start">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight uppercase mb-2">{name}</h1>
                        <p className="text-sm tracking-[0.2em] text-gray-300 uppercase">{label}</p>
                    </div>
                    <div className="flex flex-col gap-1 items-end opacity-80">
                        <div className="w-24 h-1 bg-white/20"></div>
                        <div className="w-16 h-1 bg-white/20"></div>
                        <div className="w-32 h-1 bg-white/20"></div>
                    </div>
                </div>
                <div className="bg-gray-100 p-4 border-b text-xs flex justify-around text-gray-700 font-medium">
                    {email && <span>{email}</span>}
                    {phone && <span>{phone}</span>}
                    {location.city && <span>{location.city}</span>}
                </div>

                <div className="flex flex-1 p-10 gap-10">
                    {/* Left Column (Main) */}
                    <div className="flex-1 space-y-8">
                        {summary && (
                            <section>
                                <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider border-b border-gray-300 pb-2 mb-3">Perfil Profesional</h2>
                                <p className="text-sm text-gray-600 leading-relaxed text-justify">{summary}</p>
                            </section>
                        )}

                        {work.length > 0 && (
                            <section>
                                <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider border-b border-gray-300 pb-2 mb-4">Experiencia Laboral</h2>
                                <div className="space-y-6">
                                    {work.map((job: any, index: number) => (
                                        <div key={index}>
                                            <div className="flex justify-between items-baseline mb-1">
                                                <h3 className="font-bold text-gray-800 text-base">{job.position}</h3>
                                                <span className="text-xs text-gray-500 italic">{job.startDate} - {job.endDate || 'Presente'}</span>
                                            </div>
                                            <p className="text-sm font-medium text-gray-600 mb-2">{job.name}</p>
                                            <p className="text-sm text-gray-500 leading-relaxed">{job.summary}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {projects.length > 0 && (
                            <section>
                                <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider border-b border-gray-300 pb-2 mb-4">Proyectos</h2>
                                <div className="space-y-4">
                                    {projects.map((proj: any, index: number) => (
                                        <div key={index}>
                                            <h3 className="font-bold text-gray-800 text-sm">{proj.name}</h3>
                                            <p className="text-xs text-gray-500">{proj.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Right Column (Sidebar) */}
                    <div className="w-[30%] space-y-8 border-l pl-8 border-gray-200">
                        {education.length > 0 && (
                            <section>
                                <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider border-b border-gray-300 pb-2 mb-3">Educación</h2>
                                <div className="space-y-4">
                                    {education.map((edu: any, index: number) => (
                                        <div key={index}>
                                            <p className="font-bold text-sm text-gray-800">{edu.institution}</p>
                                            <p className="text-xs text-gray-600">{edu.studyType} en {edu.area}</p>
                                            <p className="text-xs text-gray-500 italic">{edu.startDate} - {edu.endDate}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {skills.length > 0 && (
                            <section>
                                <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider border-b border-gray-300 pb-2 mb-3">Habilidades</h2>
                                <div className="space-y-3">
                                    {skills.map((skill: any, index: number) => (
                                        <div key={index}>
                                            <p className="font-bold text-xs text-gray-700 mb-1">{skill.name}</p>
                                            <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-slate-600 w-3/4 rounded-full"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {languages.length > 0 && (
                            <section>
                                <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider border-b border-gray-300 pb-2 mb-3">Idiomas</h2>
                                <ul className="space-y-2">
                                    {languages.map((lang: any, index: number) => (
                                        <li key={index} className="text-sm flex justify-between">
                                            <span className="text-gray-700">{lang.language}</span>
                                            <span className="text-gray-500 text-xs">{lang.fluency}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}
                    </div>
                </div>
            </div>
        )
    }

    /* ===========================================================================================
       TEMPLATE: GUTIERREZ CLASSIC (Minimalist, Serif, Single Column)
       =========================================================================================== */
    if (template === "gutierrez") {
        return (
            <div className="bg-white text-slate-900 w-full max-w-[210mm] min-h-[297mm] mx-auto shadow-2xl overflow-hidden font-serif p-16 flex flex-col">
                {/* Header */}
                <div className="text-center mb-8 border-b-2 border-slate-800 pb-6">
                    <h1 className="text-3xl font-bold uppercase tracking-widest mb-2">{name}</h1>
                    <p className="text-base text-slate-600 italic mb-4">{summary}</p>
                    <div className="flex justify-center gap-4 text-xs font-sans uppercase tracking-wide text-slate-500">
                        {email && <span>{email}</span>}
                        {phone && <span>• {phone}</span>}
                        {location.city && <span>• {location.city}</span>}
                    </div>
                </div>

                <div className="space-y-8">
                    {work.length > 0 && (
                        <section>
                            <h2 className="text-lg font-bold uppercase tracking-widest border-b border-slate-300 pb-1 mb-4">Experiencia Profesional</h2>
                            <div className="space-y-6">
                                {work.map((job: any, index: number) => (
                                    <div key={index}>
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h3 className="font-bold text-lg">{job.position}</h3>
                                            <span className="font-sans text-xs text-slate-500">{job.startDate} — {job.endDate || 'Presente'}</span>
                                        </div>
                                        <p className="text-sm italic text-slate-600 mb-2">{job.name}</p>
                                        <p className="text-sm text-justify leading-relaxed">{job.summary}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {education.length > 0 && (
                        <section>
                            <h2 className="text-lg font-bold uppercase tracking-widest border-b border-slate-300 pb-1 mb-4">Formación Académica</h2>
                            <div className="space-y-4">
                                {education.map((edu: any, index: number) => (
                                    <div key={index} className="flex justify-between">
                                        <div>
                                            <h3 className="font-bold text-base">{edu.institution}</h3>
                                            <p className="text-sm italic text-slate-600">{edu.studyType} en {edu.area}</p>
                                        </div>
                                        <span className="font-sans text-xs text-slate-500">{edu.startDate} — {edu.endDate}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    <div className="flex gap-8">
                        {skills.length > 0 && (
                            <section className="flex-1">
                                <h2 className="text-lg font-bold uppercase tracking-widest border-b border-slate-300 pb-1 mb-4">Habilidades</h2>
                                <p className="text-sm leading-relaxed">
                                    {skills.map((s: any) => s.name).join(' • ')}
                                </p>
                            </section>
                        )}

                        {languages.length > 0 && (
                            <section className="flex-1">
                                <h2 className="text-lg font-bold uppercase tracking-widest border-b border-slate-300 pb-1 mb-4">Idiomas</h2>
                                <ul className="text-sm space-y-1">
                                    {languages.map((lang: any, index: number) => (
                                        <li key={index}><strong>{lang.language}</strong>: {lang.fluency}</li>
                                    ))}
                                </ul>
                            </section>
                        )}
                    </div>
                </div>
            </div>
        )
    }

    /* ===========================================================================================
       TEMPLATE: PALMERSTON CREATIVE (Left Sidebar Dark, Integrated Header)
       =========================================================================================== */
    if (template === "palmerston") {
        return (
            <div className="bg-white text-slate-800 w-full max-w-[210mm] min-h-[297mm] mx-auto shadow-2xl overflow-hidden font-sans flex">
                {/* Sidebar */}
                <div className="w-[35%] bg-[#1a1a1a] text-white p-8 pt-20 flex flex-col gap-10 relative">

                    <div className="mt-12 space-y-6 text-sm">
                        <section>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Contacto</h2>
                            <div className="space-y-3 text-slate-300">
                                {phone && <div className="flex items-center gap-3"><Phone className="w-4 h-4" /> <span>{phone}</span></div>}
                                {email && <div className="flex items-center gap-3"><Mail className="w-4 h-4" /> <span>{email}</span></div>}
                                {location.city && <div className="flex items-center gap-3"><MapPin className="w-4 h-4" /> <span>{location.city}</span></div>}
                            </div>
                        </section>

                        {skills.length > 0 && (
                            <section>
                                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Habilidades</h2>
                                <ul className="space-y-2 text-slate-300">
                                    {skills.map((skill: any, index: number) => (
                                        <li key={index} className="flex flex-col gap-1">
                                            <span>{skill.name}</span>
                                            <div className="w-full h-1 bg-white/10 rounded-full"><div className="w-2/3 h-full bg-emerald-500 rounded-full"></div></div>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {languages.length > 0 && (
                            <section>
                                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Idiomas</h2>
                                <ul className="space-y-2 text-slate-300">
                                    {languages.map((lang: any, index: number) => (
                                        <li key={index} className="flex justify-between">
                                            <span>{lang.language}</span>
                                            <span className="opacity-60">{lang.fluency}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}
                    </div>

                    {/* Bottom Curve */}
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-white rounded-tr-[80px]"></div>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col">
                    {/* Header */}
                    <div className="h-40 bg-[#1a1a1a] text-white flex flex-col justify-center px-12 pr-24">
                        <h1 className="text-4xl font-bold uppercase tracking-wide mb-2">{name}</h1>
                        <p className="text-emerald-400 tracking-widest uppercase font-bold text-sm">{label}</p>
                    </div>

                    <div className="p-12 space-y-10">
                        {summary && (
                            <section>
                                <h2 className="text-lg font-bold text-slate-900 uppercase tracking-widest mb-4">Sobre mí</h2>
                                <p className="text-slate-600 leading-relaxed">{summary}</p>
                            </section>
                        )}

                        {work.length > 0 && (
                            <section>
                                <h2 className="text-lg font-bold text-slate-900 uppercase tracking-widest mb-6">Experiencia</h2>
                                <div className="space-y-8">
                                    {work.map((job: any, index: number) => (
                                        <div key={index} className="relative pl-6 border-l border-slate-300">
                                            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                                                <h3 className="font-bold text-lg text-slate-800">{job.position}</h3>
                                                <span className="text-sm font-semibold text-emerald-600">{job.startDate} - {job.endDate || 'Presente'}</span>
                                            </div>
                                            <div className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wide">{job.name}</div>
                                            <p className="text-sm text-slate-600 leading-relaxed">{job.summary}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {education.length > 0 && (
                            <section>
                                <h2 className="text-lg font-bold text-slate-900 uppercase tracking-widest mb-6">Educación</h2>
                                <div className="grid grid-cols-1 gap-4">
                                    {education.map((edu: any, index: number) => (
                                        <div key={index} className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                            <h3 className="font-bold text-slate-800">{edu.institution}</h3>
                                            <p className="text-sm text-slate-600 mb-1">{edu.studyType} en <span className="font-semibold">{edu.area}</span></p>
                                            <p className="text-xs text-slate-400">{edu.startDate} - {edu.endDate}</p>
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

    /* ===========================================================================================
       TEMPLATE: SOTO PROFESSIONAL (Navy Headers, Clean, Single Column)
       =========================================================================================== */
    if (template === "soto") {
        return (
            <div className="bg-white text-slate-800 w-full max-w-[210mm] min-h-[297mm] mx-auto shadow-2xl overflow-hidden font-sans p-12 flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-start border-b-2 border-slate-200 pb-8 mb-8">
                    <div>
                        <h1 className="text-5xl font-bold text-[#0f172a] mb-2">{name}</h1>
                        <p className="text-2xl text-slate-500 font-medium">{label}</p>
                    </div>
                    <div className="text-sm space-y-2 text-slate-600 flex flex-col items-end">
                        {phone && <div className="flex items-center gap-2 justify-end"><span className="font-medium">{phone}</span> <div className="w-6 h-6 bg-[#0f172a] text-white rounded-full flex items-center justify-center"><Phone className="w-3 h-3" /></div></div>}
                        {email && <div className="flex items-center gap-2 justify-end"><span className="font-medium">{email}</span> <div className="w-6 h-6 bg-[#0f172a] text-white rounded-full flex items-center justify-center"><Mail className="w-3 h-3" /></div></div>}
                        {location.city && <div className="flex items-center gap-2 justify-end"><span className="font-medium">{location.city}</span> <div className="w-6 h-6 bg-[#0f172a] text-white rounded-full flex items-center justify-center"><MapPin className="w-3 h-3" /></div></div>}
                        {url && <div className="flex items-center gap-2 justify-end"><span className="font-medium">{url.replace(/^https?:\/\//, '')}</span> <div className="w-6 h-6 bg-[#0f172a] text-white rounded-full flex items-center justify-center"><Globe className="w-3 h-3" /></div></div>}
                        {profiles?.map((profile: any, index: number) => (
                            <div key={index} className="flex items-center gap-2 justify-end">
                                <span className="font-medium">{profile.username || profile.network}</span>
                                <div className="w-6 h-6 bg-[#0f172a] text-white rounded-full flex items-center justify-center">
                                    <Globe className="w-3 h-3" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-8">
                    {/* Summary */}
                    {summary && (
                        <section>
                            <div className="bg-[#0f172a] text-white inline-block px-6 py-1.5 mb-4 shadow-sm">
                                <h2 className="text-sm font-bold uppercase tracking-widest">Acerca de mi</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-justify border-l-4 border-slate-100 pl-4">{summary}</p>
                        </section>
                    )}

                    {/* Experience */}
                    {work.length > 0 && (
                        <section>
                            <div className="bg-[#0f172a] text-white inline-block px-6 py-1.5 mb-6 shadow-sm">
                                <h2 className="text-sm font-bold uppercase tracking-widest">Experiencia Laboral</h2>
                            </div>
                            <div className="space-y-8">
                                {work.map((job: any, index: number) => (
                                    <div key={index}>
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h3 className="text-lg font-bold text-[#0f172a]">{job.position}</h3>
                                            <span className="text-sm font-bold text-slate-700">{job.startDate} - {job.endDate || 'Presente'}</span>
                                        </div>
                                        <p className="text-slate-500 font-medium italic mb-3">{job.name}</p>
                                        <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 leading-relaxed">
                                            {job.summary && <li className="marker:text-[#0f172a] text-justify">{job.summary}</li>}
                                            {job.highlights && job.highlights.map((highlight: string, i: number) => (
                                                <li key={i} className="marker:text-[#0f172a] text-justify">{highlight}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Projects */}
                    {projects.length > 0 && (
                        <section>
                            <div className="bg-[#0f172a] text-white inline-block px-6 py-1.5 mb-6 shadow-sm">
                                <h2 className="text-sm font-bold uppercase tracking-widest">Proyectos</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {projects.map((proj: any, index: number) => (
                                    <div key={index} className="bg-slate-50 p-4 border border-slate-100 rounded">
                                        <h3 className="font-bold text-[#0f172a] text-sm mb-1">{proj.name}</h3>
                                        {proj.description && <p className="text-xs text-slate-600 mb-2">{proj.description}</p>}
                                        {proj.url && <a href={proj.url} target="_blank" rel="noreferrer" className="text-xs text-blue-600 hover:underline break-all">{proj.url}</a>}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Education */}
                    {education.length > 0 && (
                        <section>
                            <div className="bg-[#0f172a] text-white inline-block px-6 py-1.5 mb-6 shadow-sm">
                                <h2 className="text-sm font-bold uppercase tracking-widest">Educación</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {education.map((edu: any, index: number) => (
                                    <div key={index} className="border-b-2 border-slate-100 pb-4">
                                        <h3 className="font-bold text-[#0f172a] text-base">{edu.institution}</h3>
                                        <p className="text-sm text-slate-600 mb-1">{edu.studyType} en <span className="font-semibold">{edu.area}</span></p>
                                        <p className="text-xs text-slate-400 font-medium">{edu.startDate} - {edu.endDate}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Skills */}
                    {(skills.length > 0 || languages.length > 0) && (
                        <section>
                            <div className="bg-[#0f172a] text-white inline-block px-6 py-1.5 mb-6 shadow-sm">
                                <h2 className="text-sm font-bold uppercase tracking-widest">Habilidades Clave</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-50 p-6 rounded-lg border border-slate-100 gap-8">
                                <div>
                                    <h3 className="font-bold text-[#0f172a] border-b-2 border-slate-200 pb-2 mb-3">Competencias Técnicas</h3>
                                    <div className="space-y-4">
                                        {skills.map((skill: any, index: number) => (
                                            <div key={index}>
                                                <p className="text-xs font-bold text-slate-700 uppercase mb-1.5">{skill.name}</p>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {skill.keywords?.map((keyword: string, kIndex: number) => (
                                                        <span key={kIndex} className="px-2 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-medium text-slate-600">
                                                            {keyword}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {languages.length > 0 && (
                                    <div>
                                        <h3 className="font-bold text-[#0f172a] border-b-2 border-slate-200 pb-2 mb-3">Idiomas</h3>
                                        <ul className="space-y-2">
                                            {languages.map((lang: any, index: number) => (
                                                <li key={index} className="text-sm flex justify-between items-center bg-white p-2 rounded border border-slate-100">
                                                    <span className="font-medium text-slate-700">{lang.language}</span>
                                                    <span className="text-xs text-white bg-[#0f172a] px-2 py-0.5 rounded">{lang.fluency}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        )
    }

    // Default fallback (Simple/Debug)
    return <div>Template not found</div>
}

