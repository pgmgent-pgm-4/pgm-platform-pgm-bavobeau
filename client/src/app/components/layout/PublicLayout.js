import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useThemeContext } from "../../context";

const PublicLayout = ({ children, ...rest }) => {
  const { isDarkMode } = useThemeContext();
  return (
    <>
      <Header />
      <main className="card" data-bs-theme={isDarkMode ? "light" : "dark"}>
        <Outlet />
      </main>
    </>
  );
};

export default PublicLayout;
