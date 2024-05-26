"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

type ToastFunction = (
  message: string,
  severity: "success" | "error" | "warning" | "info"
) => void;

interface ProviderWrapperProps {
  children: ReactNode;
}

const ToastContext = createContext<ToastFunction | undefined>(undefined);

export const useToast = (): ToastFunction => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast Error");
  }
  return context;
};

export const ToastProvider: React.FC<ProviderWrapperProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<
    "success" | "error" | "warning" | "info"
  >("info");

  const handleOpen: ToastFunction = (msg, sev) => {
    setMessage(msg);
    setSeverity(sev);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ToastContext.Provider value={handleOpen}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity={severity}
        >
          {message}
        </MuiAlert>
      </Snackbar>
    </ToastContext.Provider>
  );
};
