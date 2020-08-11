import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import keyCodes from "../../constants/keyCodes";
import styles from "./TooltipWidget.module.scss";

const TooltipWidget = ({ text }) => {
  const [isHidden, setIsHidden] = useState(true);

  const showTooltip = () => {
    setIsHidden(false);
  };

  const hideTooltip = () => {
    setIsHidden(true);
  };

  return (
    <div className={styles.TooltipWidget}>
      <span
        tabIndex="0"
        aria-labelledby="tooltip"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        onKeyDown={(e) => {
          if (e.keyCode === keyCodes.ESCAPE) {
            hideTooltip();
          }
        }}
      >
        <FontAwesomeIcon icon="info-circle" />
      </span>
      <p
        id="tooltip"
        role="tooltip"
        className={
          isHidden ? styles["TooltipText-hidden"] : styles["TooltipText"]
        }
        hidden={isHidden ? isHidden : undefined}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
      >
        {text}
      </p>
    </div>
  );
};

export default TooltipWidget;
