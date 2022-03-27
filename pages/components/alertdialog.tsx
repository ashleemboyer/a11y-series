import { useRef, useState } from "react";
import Link from "next/link";
import AlertDialog from "components/AlertDialog";

const AlertDialogPage = () => {
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>();

  return (
    <>
      <button
        onClick={() => {
          setShowAlertDialog(true);
        }}
        ref={buttonRef}
      >
        Open AlertDialog
      </button>
      {showAlertDialog && (
        <AlertDialog
          title="Are you sure?"
          message={
            <span>
              You&apos;re about to perform an action. Are you sure you want to
              do that? You can find more information about this{" "}
              <Link href="/">here</Link>.
            </span>
          }
          cancelButtonProps={{
            text: "Nope",
            onClick: () => {
              console.log('Clicked "Nope"');
            },
          }}
          confirmButtonProps={{
            text: "Yep",
            onClick: () => {
              console.log('Clicked "Yep"');
            },
          }}
          onClose={() => {
            setShowAlertDialog(false);
          }}
          activatorRef={buttonRef}
        />
      )}
    </>
  );
};

export default AlertDialogPage;
