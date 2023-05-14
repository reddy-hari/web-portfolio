import React, { ReactNode, useState } from "react";

const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={isDarkTheme ? "dark-theme" : ""}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {children}
    </div>
  );
};

export default ThemeWrapper;
