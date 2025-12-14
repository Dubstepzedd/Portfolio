import { Terminal } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavProps {
    name: string;
    path: string;
}

const NavItem = ({ name, path } : NavProps) => {
    return (
        <a href={path}>
            <span className="select-none text-muted-foreground hover:text-foreground transition-colors">
                {name}
            </span>
        </a>
    )
}

const Header = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 px-10 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
            <div className="flex h-16 items-center justify-between section-container">
                <a href="#" className="flex flex-row items-center gap-2 font-mono text-sm font-medium">
                    <Terminal className="h-4 w-4 text-primary"/>
                    <span className="hidden text-foreground transition-colors group-hover:text-primary sm:block">
                        Liam Andersson
                    </span>
                </a>

                <div className="flex flex-row items-center gap-3 sm:gap-8">
                    <NavItem name="Home" path="#"/>
                    <NavItem name="Skills" path="#skills"/>
                    <NavItem name="Projects" path="#projects"/>
                    <ThemeToggle/>
                </div>
            </div>
        </nav>
    )
}

export default Header;