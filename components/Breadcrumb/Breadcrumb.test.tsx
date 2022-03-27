import { render, screen } from "@testing-library/react";
import Breadcrumb from ".";

const links = [
  { label: "Test 1", href: "link-1" },
  { label: "Test 2", href: "link-2" },
];

describe("<Breadcrumb />", () => {
  let linkElements;
  let lastLink;
  beforeAll(() => {
    render(<Breadcrumb links={links} />);

    linkElements = screen.getAllByRole("link");
    lastLink = linkElements[linkElements.length - 1];
  });

  it("has an accessible name", () => {
    expect(screen.getByRole("navigation")).toHaveAccessibleName();
  });

  it("has the correct number of links", () => {
    expect(linkElements).toHaveLength(links.length);
  });

  it("has `aria-current` on the correct link", () => {
    expect(lastLink.getAttribute("aria-current")).toBe("page");
  });

  it("has the correct label and href for each link", () => {
    linkElements.forEach((linkElement, index) => {
      expect(linkElement.textContent).toBe(links[index].label);
      expect(linkElement.getAttribute("href")).toBe(links[index].href);
    });
  });
});
