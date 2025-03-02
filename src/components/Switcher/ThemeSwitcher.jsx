// 'use client'; // uncomment this line if you're using Next.js App Directory Setup

// components/ThemeSwitcher.tsx
import useDarkMode from "use-dark-mode";

export const ThemeSwitcher = () => {
  const darkMode = useDarkMode(false);

  return (
    <div>
      <button onClick={darkMode.disable}>Light Mode</button>
      <button onClick={darkMode.enable}>Dark Mode</button>
    </div>
  )
};