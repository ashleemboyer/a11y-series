import React from "react";
import { shallow } from "enzyme";

import Breadcrumb from "./Breadcrumb";

const links = [
  { label: "Test 1", href: "link-1" },
  { label: "Test 2", href: "link-2" }
];

describe("<Breadcrumb />", () => {
  it("renders successfully with the correct aria attributes", () => {
    const wrapper = shallow(<Breadcrumb links={links} />);
    const nav = wrapper.find("nav");
    const navProps = nav.props();
    const anchorElements = wrapper.find("a");

    expect(nav).toHaveLength(1);
    expect(navProps["aria-label"]).toBe("Breadcrumb");
    expect(anchorElements).toHaveLength(links.length);
    expect(anchorElements.first().text()).toBe(links[0].label);
    expect(anchorElements.first().props()["href"]).toBe(links[0].href);
    expect(anchorElements.last().props()["aria-current"]).toBe("page");
  });
});
