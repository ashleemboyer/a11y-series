import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import HomePage from "./pages/HomePage";
import BreadcrumbPage from "./pages/BreadcrumbPage";
import ListboxPage from "./pages/ListboxPage";
import SpinButtonPage from "./pages/SpinButtonPage";
import RadioGroupPage from "./pages/RadioGroupPage";
import LinkPage from "./pages/LinkPage";
import TooltipWidgetPage from "./pages/TooltipWidgetPage";
import NotFoundPage from "./pages/NotFoundPage";

library.add(fas);

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
          <Route path="/link" component={LinkPage} />
          <Route path="/tooltip-widget" component={TooltipWidgetPage} />
          <Route path="/*" component={NotFoundPage} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
