import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { color } from "../../constants/constants";

const Wrapper = ({ children }: { children: ReactNode }) => {
  const darkTheme = useSelector((state: RootState) => state.theme);

  return (
    <div
      style={{
        backgroundColor: darkTheme.dark ? color.gray : color.white,
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
