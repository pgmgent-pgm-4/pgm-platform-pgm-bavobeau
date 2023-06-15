import { useThemeContext } from "../../context";

const ThemeToggle = () => {
  const { isDarkMode, handleThemeChange } = useThemeContext();
  return (
    <button onClick={() => handleThemeChange(!isDarkMode)}>
      {isDarkMode ? "Dark Theme" : "Light Theme"}
    </button>
  );
};

export default ThemeToggle;
