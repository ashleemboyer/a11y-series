import React, { useState } from "react";
import keyCodes from "../../constants/keyCodes";
import s from "./slider.module.css";

const THUMB_SIZE = 24;

const Slider = ({
  ariaLabel,
  initialValue,
  label,
  maxValue,
  minValue,
  onChangeCallback,
  stepSize,
}) => {
  const [currentValue, setCurrentValue] = useState(initialValue || minValue);
  const currentValuePercentage = (currentValue / (maxValue - minValue)) * 100;

  const handleKeyDown = ({ keyCode }) => {
    let possibleNewValue;

    if (keyCode === keyCodes.ARROW_RIGHT || keyCode === keyCodes.ARROW_UP) {
      possibleNewValue = currentValue + stepSize;
    } else if (
      keyCode === keyCodes.ARROW_LEFT ||
      keyCode === keyCodes.ARROW_DOWN
    ) {
      possibleNewValue = currentValue - stepSize;
    } else if (keyCode === keyCodes.PAGE_UP) {
      possibleNewValue = currentValue + 2 * stepSize;
    } else if (keyCode === keyCodes.PAGE_DOWN) {
      possibleNewValue = currentValue - 2 * stepSize;
    } else if (keyCode === keyCodes.HOME) {
      possibleNewValue = minValue;
    } else if (keyCode === keyCodes.END) {
      possibleNewValue = maxValue;
    }

    if (possibleNewValue === undefined) {
      return;
    }

    const newValue = Math.min(Math.max(possibleNewValue, minValue), maxValue);
    if (newValue !== currentValue) {
      onChangeCallback(newValue);
      setCurrentValue(newValue);
    }
  };

  return (
    <div className={s.root}>
      {label && (
        <div id="slider-label" className={s.SliderLabel}>
          {label}
        </div>
      )}
      <div className={s.Slider}>
        <div className={s.SliderRail}></div>
        <div
          role="slider"
          tabIndex={0}
          aria-valuemin={minValue}
          aria-valuenow={currentValue}
          aria-valuemax={maxValue}
          aria-labelledby={label ? "slider-label" : undefined}
          aria-label={label ? undefined : ariaLabel}
          className={s.SliderThumb}
          style={{
            left: `calc(${currentValuePercentage}% - ${THUMB_SIZE}px / 2)`,
          }}
          onKeyDown={handleKeyDown}
        ></div>
      </div>
    </div>
  );
};

export default Slider;
