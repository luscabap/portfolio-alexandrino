"use client";

import { FaMoon, FaSun } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  console.log({
    theme
  });
  
  function handleTheme() {
    const themeValidated = theme === "light" ? "dark" : "light";
    setTheme(themeValidated);
  }

  return (
    <Button size="icon" onClick={handleTheme} className="cursor-pointer">
      <FaSun className="absolute h-10 w-10 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
      <FaMoon className="absolute h-10 w-10 rotate-90 scale-0 dark:-rotate-0 dark:scale-100" />
    </Button>
  );
}
