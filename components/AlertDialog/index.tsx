import { ReactNode, RefObject, useLayoutEffect } from "react";
import styles from "./alert-dialog.module.css";

interface AlertDialogProps {
  activatorRef: RefObject<HTMLButtonElement>;
  cancelButtonProps: {
    onClick: () => void;
    text: string;
  };
  confirmButtonProps: {
    onClick: () => void;
    text: string;
  };
  message: ReactNode;
  onClose: () => void;
  title: string;
}

const AlertDialog = ({
  activatorRef,
  cancelButtonProps,
  confirmButtonProps,
  message,
  onClose,
  title,
}: AlertDialogProps) => {
  useLayoutEffect(() => {
    const alertDialogElement = document.getElementById("AlertDialog");
    const focusableElements: NodeListOf<HTMLButtonElement | HTMLAnchorElement> =
      alertDialogElement.querySelectorAll("button,a");
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    firstElement.focus();

    alertDialogElement.addEventListener("keydown", (e) => {
      const activeElement = document.activeElement;
      const isFirstElement = activeElement === firstElement;
      const isLastElement = activeElement === lastElement;

      if (e.key === "Tab" && !e.shiftKey && isLastElement) {
        e.preventDefault();
        firstElement.focus();
      } else if (e.key === "Tab" && e.shiftKey && isFirstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    });
  }, []);

  return (
    <div id="AlertDialog" className={styles.AlertDialog}>
      <div
        className={styles["AlertDialog--card"]}
        role="alertdialog"
        aria-labelledby="AlertDialog-title"
        aria-describedby="AlertDialog-message"
        aria-modal="true"
      >
        <div className={styles["AlertDialog--header"]}>
          <h2 id="AlertDialog-title">{title}</h2>
        </div>
        <div className={styles["AlertDialog--body"]}>
          <p id="AlertDialog-message">{message}</p>
        </div>
        <div className={styles["AlertDialog--footer"]}>
          <button
            onClick={() => {
              cancelButtonProps.onClick();
              activatorRef.current.focus();
              onClose();
            }}
          >
            {cancelButtonProps.text}
          </button>
          <button
            onClick={() => {
              confirmButtonProps.onClick();
              activatorRef.current.focus();
              onClose();
            }}
          >
            {confirmButtonProps.text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertDialog;
