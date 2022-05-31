import { useCallback, useEffect } from "react";
import { IToastBase } from ".";
import {
  CloseButton,
  ContainerToast,
  Description,
  Title,
  Toast,
} from "./styles";

interface IToastProps {
  toastlist: IToastBase[];
  position: string;
  setList: (e: any) => void;
}
const ToastBase: React.FC<IToastProps> = ({ toastlist, position, setList }) => {
  const deleteToast = useCallback(
    (id: number) => {
      const toastListItem = toastlist.filter((e) => e.id !== id);
      setList(toastListItem);
    },
    [toastlist, setList]
  );

  useEffect(() => {
    if (!toastlist) return;
    const interval = setInterval(() => {
      if (toastlist.length) {
        deleteToast(toastlist[0].id);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [toastlist, deleteToast]);

  return (
    <ContainerToast>
      {toastlist.map((toast, i) => (
        <Toast
          key={toast.id}
          style={{ backgroundColor: toast.backgroundColor }}
        >
          <CloseButton onClick={() => deleteToast(toast.id)}>X</CloseButton>
          <div>
            <Title>{toast.title}</Title>
            <Description>{toast.description}</Description>
          </div>
        </Toast>
      ))}
    </ContainerToast>
  );
};

export default ToastBase;
