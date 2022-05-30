import { useState } from "react";
// import Button from "./components/button/Button";
import Toast from "./toastBase";
// import styles from "./App.module.css";
import { Button } from "../button/styles";

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

const CustomToast: React.FC<ICustomToastProps> = () => {
  const [list, setList] = useState<IToastBase[]>([] as unknown as IToastBase[]);
  let toastProperties: IToastBase[] = [];

  // const showToast = (type: toastProps["type"], description: string) => {
  //   switch (type) {
  //     case "success":

  //       toastProperties = {
  //         id: list.length + 1,
  //         title: "Success",
  //         description: description,
  //         backgroundColor: "#5cb85c",
  //       };
  //       break;
  //     case "danger":
  //       toastProperties = {
  //         id: list.length + 1,
  //         title: "Danger",
  //         description: description,
  //         backgroundColor: "#d9534f",
  //       };
  //       break;
  //     case "info":
  //       toastProperties = {
  //         id: list.length + 1,
  //         title: "Info",
  //         description: description,
  //         backgroundColor: "#5bc0de",
  //       };
  //       break;
  //     case "warning":
  //       toastProperties = {
  //         id: list.length + 1,
  //         title: "Warning",
  //         description: description,
  //         backgroundColor: "#f0ad4e",
  //       };
  //       break;
  //     default:
  //       toastProperties = [];
  //   }
  //   setList([...list, toastProperties]);
  // };

  const showToast = (type: toastProps["type"], description: string) => {
    switch (type) {
      case "success":
        toastProperties.push({
          id: list.length + 1,
          title: "Success",
          description: description,
          backgroundColor: "#5cb85c",
        });

        break;
      case "danger":
        toastProperties.push({
          id: list.length + 1,
          title: "Danger",
          description: description,
          backgroundColor: "#d9534f",
        });
        break;
      case "info":
        toastProperties.push({
          id: list.length + 1,
          title: "Info",
          description: description,
          backgroundColor: "#5bc0de",
        });
        break;
      case "warning":
        toastProperties.push({
          id: list.length + 1,
          title: "Warning",
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
    // <ToastBase />
    // <div className={styles.root}>
    <>
      <h1>React Toast Component</h1>
      <div>
        <Button onClick={() => showToast("success", "foi um, sucesso")}>
          Success
        </Button>
        <Button onClick={() => showToast("danger", "isso é perigoso")}>
          Danger
        </Button>
        <Button onClick={() => showToast("info", "infoooo presta atenção")}>
          Info
        </Button>
        <Button onClick={() => showToast("warning", "eitaaa")}>Warning</Button>
      </div>
      <Toast toastlist={list} position="buttom-right" setList={setList} />
    </>

    // </div>
  );
};

export default CustomToast;
