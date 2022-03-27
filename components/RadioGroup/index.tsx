import React, { RefObject, useState, useRef } from "react";
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

interface RadioGroupProps {
  label: string;
  options: {
    label: string;
    value: string;
    ref: RefObject<HTMLDivElement>;
  }[];
}

const RadioGroup = ({ label, options }: RadioGroupProps) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const shouldFocusOption = useRef(false);

  if (shouldFocusOption) {
    selectedOption?.ref?.current?.focus();
  }

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

  return (
    <div
      role="radiogroup"
      aria-labelledby="radio_group_label"
      onKeyDown={(e) => {
        console.log("keydown", e.key);
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
          e.preventDefault();
          e.stopPropagation();
          focusNextOption();
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          e.preventDefault();
          e.stopPropagation();
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
            aria-checked={isSelected}
            className={isSelected ? s.selected : s.notSelected}
            id={option.value}
            key={option.value}
            onClick={() => {
              setSelectedOption(option);
              shouldFocusOption.current = true;
            }}
            ref={option.ref}
            role="radio"
            tabIndex={isSelected ? 0 : -1}
          >
            <div className={s.ring}>
              <div className={s.circle}></div>
            </div>
            <span className={s.text}>{option.label}</span>
          </div>
        );
      })}
      <a href="hello">test</a>
    </div>
  );
};

export default RadioGroup;
