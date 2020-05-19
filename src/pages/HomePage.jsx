import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <>
    <h2>Components</h2>
    <Link to="/breadcrumb">Breadcrumb</Link>
    <Link to="/listbox">Listbox</Link>
    <Link to="/spinbutton">SpinButton</Link>
  </>
);

export default Home;
