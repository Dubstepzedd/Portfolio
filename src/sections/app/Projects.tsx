import { SiGithub } from "react-icons/si";

interface ProjectProps {
    title: string;
    description: string;
    skills: string[];
    githubLink: string;
    isCompleted: boolean;
}

const Project = ({ title, description, skills, githubLink, isCompleted }: ProjectProps) => {
    return (
        <div className="group flex flex-col justify-between rounded-xl border border-muted/50 bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-md">
            <div className="mb-4 flex items-start justify-between">
                <div className="mb-2 flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-foreground">
                        {title}
                    </h3>
                    <span
                        className={`rounded-md px-2 py-1 text-[10px] font-semibold uppercase ${
                            isCompleted
                            ? "bg-primary/10 text-primary"
                            : "bg-yellow-500/10 text-yellow-500"
                        }`}
                    >
                        {isCompleted ? "Completed" : "In Progress"}
                    </span>
                </div>
                <div className="flex gap-3 text-muted-foreground">
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-foreground transition-colors"
                        >
                            <SiGithub className="w-6 h-6" />
                        </a>
                </div>
            </div>

            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {description}
            </p>

            <div className="mt-auto flex flex-wrap gap-2">
                {skills.map((value: string) => (
                    <span
                        key={value}
                        className="rounded-md bg-muted px-2 py-1 text-[12px] font-semibold uppercase tracking-wider text-foreground/80"
                    >
                        {value}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center pt-16 scroll-mt-16 px-10">
            <div className="section-container font-mono">
                <h1 className="text-muted-foreground mb-8 uppercase">Featured Projects</h1>
                <div className="grid lg:grid-cols-2 xs:grid-cols-1 gap-x-12 gap-y-8">
                    <Project
                        title={"Game Engine"}
                        description={
                            "A simple game engien created with C++ and OpenGL. \
                            The project was initiated to explore good architecture and graphics programming."
                        }
                        skills={
                            ["C++", "OpenGL", "CMake"]
                        }
                        githubLink="https://github.com/Dubstepzedd/GameEngine"
                        isCompleted={false}
                    />
                    <Project
                        title={"MNIST Classifier"}
                        description={
                            "The first step into Neural Networks for me. \
                            I created a perceptron neural network from scratch to learn the basics of Neural networks. \
                            The neural network identifier digits with a high accuracy after some certain tweaks. MNIST is the dataset it is trained on."
                        }
                        skills={
                            ["Python", "Neural Networks"]
                        }
                        githubLink="https://github.com/Dubstepzedd/mnist-classifier"
                        isCompleted={true}
                    />
                    <Project
                        title={"Equation Parser"}
                        description={
                            "This is a fun project that taught me basics of parsers and tokenizers. The project takes in an equation and calculates the result."
                        }
                        skills={
                            ["Java", "Maven", "Parsing & Tokenizers"]
                        }
                        githubLink="https://github.com/Dubstepzedd/EquationParser"
                        isCompleted={false}
                    />
                    <Project
                        title="Portfolio Website"
                        description="A personal portfolio designed to showcase my projects and technical skills. Built with modern web technologies, focusing on responsive design, accessibility, and a clean UI/UX."
                        skills={["React", "TypeScript", "Tailwind CSS", "Vite"]}
                        githubLink="https://github.com/Dubstepzedd/Portfolio"
                        isCompleted={false}
                    />
                    <Project
                        title="CartSync"
                        description="Cross-platform mobile application for synchronizing shopping lists in real-time. Features a responsive Flutter UI connected to a Python backend, utilizing sockets & streams to keep the 'Cart' in-sync across all instances."
                        skills={["Flask", "Dart", "Flutter", "SQLite"]}
                        githubLink="https://github.com/Dubstepzedd/CartSync"
                        isCompleted={false}
                    />

                </div>
            </div>
        </section>
    )
}

export default Projects;