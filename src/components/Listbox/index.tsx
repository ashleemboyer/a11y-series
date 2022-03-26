import React, { useState, useEffect } from "react";

import s from "./listbox.module.css";

const ARROW_UP = 38;
const ARROW_DOWN = 40;
const ESCAPE = 27;
const ENTER = 13;

const Listbox = ({ label, options }) => {
  const buttonRef = React.createRef();
  const listboxRef = React.createRef();

  const [isOpen, setIsOpen] = useState(true);
  const [indexOfSelectedOption, setIndexOfSelectedOption] = useState(0);

  useEffect(() => {
    if (isOpen && listboxRef.current) {
      listboxRef.current.focus();
    }
  }, [listboxRef, isOpen]);

  const selectedOption = options.find(
    (option) => option.id === options[indexOfSelectedOption].id
  );

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
    if (e.keyCode === ARROW_DOWN || e.keyCode === ARROW_UP) {
      setIsOpen(true);
    }
  };

  const handleListboxKeyDown = (e) => {
    if (e.keyCode === ARROW_UP) {
      focusPreviousOption();
    } else if (e.keyCode === ARROW_DOWN) {
      focusNextOption();
    } else if (e.keyCode === ENTER) {
      setIsOpen(false);
    } else if (e.keyCode === ESCAPE) {
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
        ref={buttonRef}
        aria-labelledby="listboxLabel"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={s.button}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        onKeyDown={handleButtonKeyDown}
      >
        {selectedOption.id ? selectedOption.label : "Choose"}
      </button>
      {isOpen && (
        <ul
          className={s.list}
          ref={listboxRef}
          tabIndex={isOpen ? 0 : -1}
          role="listbox"
          aria-activedescendant={selectedOption.id}
          onKeyDown={handleListboxKeyDown}
          onBlur={() => {
            setIsOpen(false);
          }}
        >
          {options.map((option, index) => (
            <li
              className={s.listItem}
              id={option.id}
              key={option.id}
              role="option"
              aria-selected={option.id === selectedOption.id}
              onClick={() => {
                setIndexOfSelectedOption(index);
                setIsOpen(false);
              }}
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
