
interface StackSectionProps {
    title: string;
    objects: string[];
}

const Skill = ({title, objects} : StackSectionProps) => {
    return (
        <div className="font-mono">
            <p className="text-muted-foreground mb-4">{title}</p>
            <div className="flex flex-row flex-wrap gap-3">
                {objects.map((value: string) => {
                    return   <span
                        key={value}
                        className="rounded-md bg-muted px-2 py-1 text-sm uppercase tracking-wider text-foreground/80"
                    >
                    {value}
                    </span>
                })}
            </div>
        </div>
    )
}

const Skills = () => {

    return (
        <section id="skills" className="min-h-screen flex items-center pt-16 scroll-mt-16 px-10">
            <div className="section-container">
                <h1 className="text-muted-foreground mb-8 uppercase">Skills</h1>
                <div className="grid md:grid-cols-2 xs:grid-cols-1 gap-x-12 gap-y-8">
                    <Skill title={"Languages"} objects={["C#", "Java", "Python", "Typescript", "C++", "Dart", "SQL"]}/>
                    <Skill title={"Frontend"} objects={["React", "Tailwind CSS", "WPF", "HTML", "Android", "Flutter", "React Native", "OpenGL"]}/>
                    <Skill title={"Backend"} objects={["Flask", "FastAPI", "PostgreSQL", "SQLAlchemy", "Azure", "Firebase"]}/>
                    <Skill title={"Infrastructure & Tools"} objects={["Kubernetes", "Docker", "Git", "Bash", "CI/CD", "Helm", "CMake"]}/>
                </div>
            </div>
        </section>
    )
}

export default Skills;