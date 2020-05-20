import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "./pages/HomePage";
import BreadcrumbPage from "./pages/BreadcrumbPage";
import ListboxPage from "./pages/ListboxPage";
import SpinButtonPage from "./pages/SpinButtonPage";
import RadioGroupPage from "./pages/RadioGroupPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <nav className="main-navigation">
        <h1>a11y-components</h1>
        <Link to="/">Home</Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/breadcrumb" component={BreadcrumbPage} />
          <Route path="/listbox" component={ListboxPage} />
          <Route path="/spinbutton" component={SpinButtonPage} />
          <Route path="/radiogroup" component={RadioGroupPage} />
          <Route path="/*" component={NotFoundPage} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
