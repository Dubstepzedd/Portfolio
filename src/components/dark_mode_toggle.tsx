import React from "react";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material"; // Import icons
import { useTheme } from "../theme/theme_context";

const DarkModeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    const handleToggle = () => {
        toggleTheme();
    };

    return (
        <IconButton onClick={handleToggle} color="inherit">
            {theme == "light" ? <Brightness4/> : <Brightness7/>}
        </IconButton>
    );
};

export default DarkModeToggle;
