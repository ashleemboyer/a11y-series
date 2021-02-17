import React, { useState } from 'react';
import { AlertDialog } from '../components/AlertDialog';

const AlertDialogPage = () => {
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const buttonRef = React.createRef();

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
              You're about to perform an action. Are you sure you want to do
              that? You can find more information about this{' '}
              <a href="/">here</a>.
            </span>
          }
          cancelButtonOptions={{
            text: 'Nope',
            onClick: () => {
              console.log('Clicked "Nope"');
            },
          }}
          confirmButtonOptions={{
            text: 'Yep',
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
