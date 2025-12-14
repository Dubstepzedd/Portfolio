import { Terminal } from "lucide-react";

const Footer = () => {
    return (
        <footer className="mt-12 py-12 border-t border-border/50">
            <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                    <Terminal className="h-4 w-4 text-primary" />
                    <span className="font-mono text-sm">Liam Andersson</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;