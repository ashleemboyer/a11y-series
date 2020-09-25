import React, { useState } from "react";
import PropTypes from "prop-types";
import keyCodes from "../../constants/keyCodes";
import styles from "./Slider.module.scss";

const Slider = ({
  minValue,
  maxValue,
  stepSize,
  initialValue,
  onChangeCallback,
  label,
  ariaLabel,
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
    <div className={styles.SliderContainer}>
      {label && (
        <div id="slider-label" className={styles.SliderLabel}>
          {label}
        </div>
      )}
      <div className={styles.Slider}>
        <div className={styles.SliderRail}></div>
        <div
          role="slider"
          tabIndex="0"
          aria-valuemin={minValue}
          aria-valuenow={currentValue}
          aria-valuemax={maxValue}
          aria-labelledby={label ? "slider-label" : undefined}
          aria-label={label ? undefined : ariaLabel}
          className={styles.SliderThumb}
          style={{
            left: `calc(${currentValuePercentage}% - ${styles.thumbSize} / 2)`,
          }}
          onKeyDown={handleKeyDown}
        ></div>
      </div>
    </div>
  );
};

Slider.propTypes = {
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  stepSize: PropTypes.number.isRequired,
  initialValue: PropTypes.number,
  onChangeCallback: PropTypes.func,
  label: PropTypes.string,
  ariaLabel: PropTypes.string,
};

Slider.defaultProps = {
  onChangeCallback: () => {},
};

export default Slider;
