import React from "react";
import PropTypes from "prop-types";
import keyCodes from "../../constants/keyCodes";
import styles from "./Link.module.scss";

const handleClickOrKeydown = (e, href, target) => {
  e.preventDefault();
  e.stopPropagation();

  const eventType = e.type;
  if (
    eventType === "click" ||
    (eventType === "keydown" && e.keyCode === keyCodes.ENTER)
  ) {
    window.open(href, target);
  }
};

const Link = ({ text, href, ariaLabel, target }) => (
  <span
    className={styles.Link}
    aria-label={text ? undefined : ariaLabel}
    role="link"
    tabIndex="0"
    onClick={(e) => {
      handleClickOrKeydown(e, href, target);
    }}
    onKeyDown={(e) => {
      handleClickOrKeydown(e, href, target);
    }}
  >
    {text}
  </span>
);

Link.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string,
  target: PropTypes.string,
};

Link.defaultProps = {
  text: undefined,
  ariaLabel: undefined,
  target: "_self",
};

export default Link;
