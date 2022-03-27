import React, { useState, useEffect } from "react";

import s from "./listbox.module.css";

const ARROW_UP = 38;
const ARROW_DOWN = 40;
const ESCAPE = 27;
const ENTER = 13;

interface ListboxProps {
  label: string;
  options: { id: string; label: string }[];
}

const Listbox = ({ label, options }: ListboxProps) => {
  const buttonRef = React.createRef<HTMLButtonElement>();
  const listboxRef = React.createRef<HTMLUListElement>();

  const [isOpen, setIsOpen] = useState(false);
  const [indexOfSelectedOption, setIndexOfSelectedOption] =
    useState<number>(null);

  useEffect(() => {
    if (isOpen && listboxRef.current) {
      listboxRef.current.focus();
    }
  }, [listboxRef, isOpen]);

  const selectedOption =
    indexOfSelectedOption !== null
      ? options.find(
          (option) => option.id === options[indexOfSelectedOption].id
        )
      : null;

  const focusPreviousOption = () => {
    let newIndex;

    if (indexOfSelectedOption === 0) {
      newIndex = options.length - 1;
    } else {
      newIndex = indexOfSelectedOption - 1;
    }

    setIndexOfSelectedOption(newIndex);
  };

  const focusNextOption = () => {
    let newIndex;

    if (indexOfSelectedOption === options.length - 1) {
      newIndex = 0;
    } else {
      newIndex = indexOfSelectedOption + 1;
    }

    setIndexOfSelectedOption(newIndex);
  };

  const handleButtonKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setIndexOfSelectedOption(0);
      setIsOpen(true);
    } else if (e.key === "ArrowUp") {
      setIndexOfSelectedOption(options.length - 1);
      setIsOpen(true);
    }
  };

  const handleListboxKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      focusPreviousOption();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      focusNextOption();
    } else if (e.key === "Enter" || e.key === "Escape") {
      e.preventDefault();
      setIsOpen(false);
      buttonRef.current.focus();
    }
  };

  return (
    <div className={s.root}>
      <label className={s.label} id="listboxLabel">
        {label}
      </label>
      <button
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-labelledby="listboxLabel"
        className={s.button}
        onClick={() => {
          if (indexOfSelectedOption === null) {
            setIndexOfSelectedOption(0);
          }
          setIsOpen(!isOpen);
        }}
        onKeyDown={handleButtonKeyDown}
        ref={buttonRef}
      >
        {selectedOption ? selectedOption.label : "Choose"}
      </button>
      {isOpen && (
        <ul
          aria-activedescendant={selectedOption.id}
          className={s.list}
          onKeyDown={handleListboxKeyDown}
          ref={listboxRef}
          role="listbox"
          tabIndex={0}
        >
          {options.map((option, index) => (
            <li
              aria-selected={option.id === selectedOption.id}
              className={s.listItem}
              id={option.id}
              key={option.id}
              onClick={() => {
                setIndexOfSelectedOption(index);
                setIsOpen(false);
              }}
              role="option"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Listbox;
