import { useLayoutEffect } from "react";
import styles from "./alert-dialog.module.css";

const AlertDialog = ({
  title,
  message,
  cancelButtonOptions,
  confirmButtonOptions,
  onClose,
  activatorRef,
}) => {
  useLayoutEffect(() => {
    const alertDialogElement = document.getElementById("AlertDialog");
    const focusableElements = alertDialogElement.querySelectorAll("button,a");
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
              cancelButtonOptions.onClick();
              activatorRef.current.focus();
              onClose();
            }}
          >
            {cancelButtonOptions.text}
          </button>
          <button
            onClick={() => {
              confirmButtonOptions.onClick();
              activatorRef.current.focus();
              onClose();
            }}
          >
            {confirmButtonOptions.text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertDialog;
