
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
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xs:grid-cols-1 gap-x-12 gap-y-8">
                    <Skill title={"Languages"} objects={["Java", "Python", "C/C++", "SQL", "JavaScript/TypeScript", "HTML/CSS", "Dart", "C#", "Golang", "Bash"]}/>
                    <Skill title={"Frameworks"} objects={["React", "Next.js", "Angular", "Flask", "FastAPI", "LangChain", "Flutter", "React Native", ".NET"]}/>
                    <Skill title={"Infrastructure & DevOps"} objects={["Kubernetes", "Helm", "Docker", "HashiCorp Vault", "Terraform", "Pulumi", "Ansible", "GitLab CI/CD", "Jenkins", "Git"]}/>
                    <Skill title={"Databases"} objects={["PostgreSQL", "MySQL", "Redis", "Firestore", "OpenSearch"]}/>
                    <Skill title={"Cloud Providers"} objects={["Azure", "Firebase", "Cloudflare", "AWS EKS & EC2", "GCP GKE & GCE"]}/>
                    <Skill title={"Practices"} objects={["Infrastructure-as-Code", "RAG/LLM Integration", "WebSockets/SSE", "Agile/Scrum", "Unit Testing"]}/>
                </div>
            </div>
        </section>
    )
}

export default Skills;