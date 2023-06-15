import { Outlet } from "react-router-dom";

import { ThemeProvider } from "./context";

import "./App.scss";

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
