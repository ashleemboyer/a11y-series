import React from "react";

import { Breadcrumb } from "../components/Breadcrumb";

const BreadcrumbPage = () => (
  <>
    <h2>Breadcrumb</h2>
    <Breadcrumb
      links={[
        { label: "Link 1", href: "" },
        { label: "Link 2", href: "" },
        { label: "Link 3", href: "" }
      ]}
    />
  </>
);

export default BreadcrumbPage;
