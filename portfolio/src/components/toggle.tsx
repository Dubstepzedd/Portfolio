import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material"; // Import icons
import { useTheme } from "../theme/theme_context";

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);
    const { toggleTheme } = useTheme();

    const handleToggle = () => {
        setDarkMode(!darkMode);
        toggleTheme();
    };

    return (
        <IconButton onClick={handleToggle} color="inherit">
            {darkMode ? <Brightness7/> : <Brightness4/>}
        </IconButton>
    );
};

export default DarkModeToggle;
