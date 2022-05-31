import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

import ToastBase from "../components/toast/toastBase";

interface ICustomToastProps {
  description?: string;
  title?: string;
  type?: string;
}

type toastProps = {
  id: number;
  title: string;
  description: string;
  backgroundColor: string;
  type: "success" | "danger" | "info" | "warning";
};

export interface IToastBase extends Omit<toastProps, "type"> {}

interface ToastContextData {
  showToast: (
    type: toastProps["type"],
    title: string,
    description: string
  ) => void;
}

type ToastProviderProps = {
  children: ReactNode;
};

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

function ToastProvider({ children }: ToastProviderProps) {
  const [list, setList] = useState<IToastBase[]>([] as unknown as IToastBase[]);
  let toastProperties: IToastBase[] = [];

  const showToast = (
    type: toastProps["type"],
    title: string,
    description: string
  ) => {
    switch (type) {
      case "success":
        toastProperties.push({
          id: list.length + 1,
          title: title,
          description: description,
          backgroundColor: "#5cb85c",
        });

        break;
      case "danger":
        toastProperties.push({
          id: list.length + 1,
          title: title,
          description: description,
          backgroundColor: "#d9534f",
        });
        break;
      case "info":
        toastProperties.push({
          id: list.length + 1,
          title: title,
          description: description,
          backgroundColor: "#5bc0de",
        });
        break;
      case "warning":
        toastProperties.push({
          id: list.length + 1,
          title: title,
          description: description,
          backgroundColor: "#f0ad4e",
        });
        break;
      default:
        toastProperties = [];
    }
    setList([...list, ...toastProperties]);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <>
        <ToastBase toastlist={list} position="buttom-right" setList={setList} />
        {children}
      </>
    </ToastContext.Provider>
  );
}

function useToast() {
  const context = useContext(ToastContext);

  return context;
}

export { ToastProvider, useToast };
