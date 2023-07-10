import { Outlet } from "react-router-dom";
import Wrapper from "./common/Wrapper";

function App() {
  return (
    <>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
}

export default App;
