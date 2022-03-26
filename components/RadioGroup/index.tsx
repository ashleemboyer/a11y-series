import React, { useState, useLayoutEffect } from "react";
import keyCodes from "../../constants/keyCodes";
import s from "./radio-group.module.css";

const getIndexOfOption = (option, options) => {
  let indexOfOption;

  options.forEach((o, index) => {
    if (o.value === option.value) {
      indexOfOption = index;
    }
  });

  return indexOfOption;
};

const RadioGroup = ({ label, options }) => {
  const [hasRunOnce, setHasRunOnce] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const focusNextOption = () => {
    let optionToFocus;
    const indexOfSelectedOption = getIndexOfOption(selectedOption, options);
    if (indexOfSelectedOption === options.length - 1) {
      optionToFocus = options[0];
    } else {
      optionToFocus = options[indexOfSelectedOption + 1];
    }
    setSelectedOption(optionToFocus);
  };

  const focusPreviousOption = () => {
    let optionToFocus;
    const indexOfSelectedOption = getIndexOfOption(selectedOption, options);
    if (indexOfSelectedOption === 0) {
      optionToFocus = options[options.length - 1];
    } else {
      optionToFocus = options[indexOfSelectedOption - 1];
    }
    setSelectedOption(optionToFocus);
  };

  useLayoutEffect(() => {
    if (!hasRunOnce) {
      setHasRunOnce(true);
      return;
    }

    selectedOption.ref.current.focus();
  }, [hasRunOnce, selectedOption]);

  return (
    <div
      role="radiogroup"
      aria-labelledby="radio_group_label"
      onFocus={() => {
        selectedOption.ref.current.focus();
      }}
      onKeyDown={(e) => {
        const keyCode = e.keyCode;
        if (
          keyCode === keyCodes.ARROW_RIGHT ||
          keyCode === keyCodes.ARROW_DOWN
        ) {
          e.preventDefault();
          focusNextOption();
        } else if (
          keyCode === keyCodes.ARROW_LEFT ||
          keyCode === keyCodes.ARROW_UP
        ) {
          e.preventDefault();
          focusPreviousOption();
        }
      }}
    >
      <label className={s.label} id="radio_group_label">
        {label}
      </label>
      {options.map((option, index) => {
        const isSelected = option.value === selectedOption.value;

        return (
          <div
            id={`radioButton_${index}`}
            key={`radioButton_${index}`}
            role="radio"
            tabIndex={isSelected ? 0 : 1}
            aria-checked={isSelected}
            ref={option.ref}
            className={isSelected ? s.selected : s.notSelected}
            onClick={() => {
              setSelectedOption(option);
            }}
          >
            <div className={s.ring}>
              <div className={s.circle}></div>
            </div>
            <span className={s.text}>{option.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default RadioGroup;
