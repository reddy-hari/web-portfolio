import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Wrapper = ({ children }: { children: ReactNode }) => {
  const darkTheme = useSelector((state: RootState) => state.theme);

  return (
    <div
      style={{
        backgroundColor: darkTheme.dark ? "#181A1B" : "#fff",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
