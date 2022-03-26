import { useState } from "react";
import keyCodes from "../../constants/keyCodes";
import s from "./spin-button.module.css";

const SpinButton = ({ ariaLabel, values, initialIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const firstValue = values[0];
  const lastValue = values[values.length - 1];
  const currentValue = values[currentIndex];
  const previousValue =
    currentIndex === 0 ? lastValue : values[currentIndex - 1];
  const nextValue =
    currentIndex === values.length - 1 ? firstValue : values[currentIndex + 1];

  const incrementCurrentIndex = () => {
    if (currentIndex === values.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const decrementCurrentIndex = () => {
    if (currentIndex === 0) {
      setCurrentIndex(values.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={s.SpinButton}>
      <button
        tabIndex={-1}
        onClick={decrementCurrentIndex}
        aria-label={`Previous ${ariaLabel}`}
      >
        &#8593;
      </button>
      <div className={s.previousValue} aria-hidden="true">
        {previousValue.value}
      </div>
      <div
        className={s.currentValue}
        role="spinbutton"
        tabIndex={0}
        aria-valuenow={currentIndex}
        aria-valuetext={`${currentValue.valueText}`}
        aria-valuemin={0}
        aria-valuemax={values.length - 1}
        aria-label={ariaLabel}
        onKeyDown={(e) => {
          if (e.keyCode === keyCodes.ARROW_DOWN) {
            decrementCurrentIndex();
          } else if (e.keyCode === keyCodes.ARROW_UP) {
            incrementCurrentIndex();
          }
        }}
      >
        {currentValue.value}
      </div>
      <div className={s.nextValue} aria-hidden="true">
        {nextValue.value}
      </div>
      <button
        tabIndex={-1}
        onClick={incrementCurrentIndex}
        aria-label={`Next ${ariaLabel}`}
      >
        &#8595;
      </button>
    </div>
  );
};

export default SpinButton;
