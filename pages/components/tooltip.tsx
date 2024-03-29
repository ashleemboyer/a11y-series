import Tooltip from "components/Tooltip";

const tooltipText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const TooltipPage = () => (
  <div style={{ display: "flex", fontSize: "1.2rem" }}>
    <p style={{ marginRight: 12 }}>Hey! Hover/keyboard focus this tooltip!</p>
    <Tooltip text={tooltipText} />
  </div>
);

export default TooltipPage;
