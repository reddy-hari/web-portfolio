import { Outlet } from "react-router-dom";
import ThemeWrapper from "./common/ThemeWrapper";

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
