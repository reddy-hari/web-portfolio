import React, { ReactNode, useState } from "react";

const ThemeWrapper = ({ children }: { children: ReactNode }) => {  

  return (
    <div>
      {children}
    </div>
  );
};

export default ThemeWrapper;
