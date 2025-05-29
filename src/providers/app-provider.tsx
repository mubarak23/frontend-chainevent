import { ReactNode } from "react";

const AppProvider = ({ children }: { children: ReactNode }) => {
  return <main>{children}</main>;
};

export default AppProvider;
