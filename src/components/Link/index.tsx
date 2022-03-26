import keyCodes from "../../constants/keyCodes";
import s from "./link.module.css";

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

interface LinkProps {
  ariaLabel?: string;
  href: string;
  target?: string;
  text: string;
}

const Link = ({ ariaLabel, href, target, text }: LinkProps) => (
  <span
    aria-label={ariaLabel}
    className={s.root}
    role="link"
    tabIndex={0}
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

export default Link;
