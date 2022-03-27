import React, { useState } from "react";
import keyCodes from "../../constants/keyCodes";
import s from "./slider.module.css";

const THUMB_SIZE = 24;

export interface SliderProps {
  ariaLabel?: string;
  initialValue?: number;
  label: string;
  maxValue: number;
  minValue: number;
  onChange?: (newValue: number) => void;
  stepSize: number;
}

const Slider = ({
  ariaLabel,
  initialValue,
  label,
  maxValue,
  minValue,
  onChange,
  stepSize,
}: SliderProps) => {
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
      setCurrentValue(newValue);

      if (onChange) {
        onChange(newValue);
      }
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
          aria-label={ariaLabel}
          aria-labelledby={label ? "slider-label" : undefined}
          aria-valuemax={maxValue}
          aria-valuemin={minValue}
          aria-valuenow={currentValue}
          className={s.SliderThumb}
          onKeyDown={handleKeyDown}
          role="slider"
          style={{
            left: `calc(${currentValuePercentage}% - ${THUMB_SIZE}px / 2)`,
          }}
          tabIndex={0}
        ></div>
      </div>
    </div>
  );
};

export default Slider;
