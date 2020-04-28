import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "./pages/HomePage";
import BreadcrumbPage from "./pages/BreadcrumbPage";
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
          <Route path="/*" component={NotFoundPage} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
