import * as React from "react";
import { ToastTA } from "./toast-ta";
import { ToastViewport } from "./toast-ta";
import { useToast } from "./use-toast-ta";

export function ToasterTA() {
  const { toasts } = useToast();

  return (
    <ToastViewport>
      {toasts.map(({ id, ...props }) => (
        <ToastTA key={id} {...props} />
      ))}
    </ToastViewport>
  );
};