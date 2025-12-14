import { useEffect, useState } from "react";
import type { Theme } from "./ThemeContext";
import { ThemeProviderContext } from "./ThemeContext";


export const ThemeProvider = ({children, defaultTheme} : { children: React.ReactNode, defaultTheme?: Theme;}) => {

    const [theme, setTheme] = useState<Theme>(() => {
        const stored = localStorage.getItem("theme") as Theme;
        return stored || defaultTheme;
    });

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeProviderContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeProviderContext.Provider>
    );
}
