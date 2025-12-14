import { ArrowRight, BookOpen } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const PATH_RESUME = "/files/Resume.pdf"

const Home = () => {
    return (
        <section className="min-h-screen flex items-center pt-16 scroll-mt-16 px-10">
            <div className="section-container py-20">
                <h2 className="font-mono text-md text-primary mb-3">Hello, I'm</h2>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold font-mono mb-3">
                    Liam Andersson
                </h1>
                <h2 className="text-2xl sm:text-3xl text-muted-foreground font-light mb-6">
                    Software Engineer
                </h2>
                <p className="text-muted-foreground text-lg mb-10 max-w-3xl">
                    I love building software the right way - secure, maintainable, and well-architected.
                    I take pride in owning what I build, helping others grow, and always having a new technology on my radar to learn.
                </p>
                <div className="flex flex-row gap-4 mb-4">
                    <a href={PATH_RESUME} target="_blank" className="flex flex-row items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80 active:scale-95">
                        <BookOpen className="w-5 h-5" />
                        <span>Open Resume</span>
                    </a>
                    <a href="#projects" className="flex flex-row items-center justify-center gap-2 rounded-lg border border-input bg-background px-6 py-2.5 text-sm font-medium transition-colors hover:bg-foreground/10 active:scale-95">
                        <span>View Projects</span>
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
                <div className="flex flex-row gap-4">
                    <a
                        href="https://github.com/dubstepzedd"
                        target="_blank"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <SiGithub className="w-6 h-6" />
                    </a>

                    <a
                        href="https://linkedin.com/in/liam--andersson"
                        target="_blank"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <SiLinkedin className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home;