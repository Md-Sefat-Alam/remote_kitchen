"use client";

import store from "@/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

interface ProviderWrapperProps {
  children: ReactNode;
}

const ProviderWrapper: React.FC<ProviderWrapperProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderWrapper;
