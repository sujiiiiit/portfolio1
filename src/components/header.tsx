import { useState, useEffect } from "react";

const Header = () => {
  // Get initial theme preference from local storage with error handling
  const getInitialTheme = () => {
    try {
      const storedTheme = localStorage.getItem("theme");
      return storedTheme || "light"; // Default to light if no theme stored
    } catch (error) {
      console.error("Error retrieving theme from local storage:", error);
      return "light"; // Set a default theme if local storage retrieval fails
    }
  };

  // Check for system theme preference using prefers-color-scheme
  const getSystemThemePreference = () => {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDarkMode ? "dark" : "light";
  };

  const [darkMode, setDarkMode] = useState(
    getInitialTheme() || getSystemThemePreference()
  );

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode === "dark"); // Apply theme class to body
    localStorage.setItem("theme", darkMode); // Save theme to local storage
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <header className="flex items-center bg-transparent p-4 px-5 font-SyoogBold">
      <div
        className={`text-2xl sm:text-3xl ${
          darkMode === "dark" ? "dark:text-white" : ""
        }`}
      >
        /Developer
      </div>
      <button
        onClick={toggleDarkMode}
        className=" flex align-middle items-center justify-center ml-auto bg-transparent outline-none focus:outline-none border-none"
        style={{ border: "none" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 xs:w-6 xs:h-6 "
          fill={darkMode === "dark" ? "#fff" : "#000000"}
          viewBox="0 0 256 256"
        >
          <path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Z"></path>
        </svg>
      </button>
    </header>
  );
};

export default Header;
