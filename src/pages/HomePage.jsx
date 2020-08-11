import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <>
    <h2>Components</h2>
    <Link to="/breadcrumb">Breadcrumb</Link>
    <Link to="/listbox">Listbox</Link>
    <Link to="/spinbutton">SpinButton</Link>
    <Link to="/radiogroup">RadioGroup</Link>
    <Link to="/link">Link</Link>
    <Link to="/tooltip-widget">TooltipWidget</Link>
  </>
);

export default Home;
