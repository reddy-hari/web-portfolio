import { Outlet } from "react-router-dom";
import Navigation from "./common/Navigation";
import ThemeWrapper from "./common/ThemeWrapper";
import Home from "./pages/Home";
import "./styles/dark-theme.css";

function App() {
  return (
    <div>
      <ThemeWrapper>
        <Outlet />
      </ThemeWrapper>
    </div>
  );
}

export default App;
