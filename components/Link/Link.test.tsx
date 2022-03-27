import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import keyCodes from "../../constants/keyCodes";
import Link from ".";

const testText = "My Link";
const testHref = "https://ashleemboyer.com";
const testAriaLabel = "My aria label";
const testTarget = "_blank";

describe("<Link />", () => {
  let linkElement;

  beforeEach(() => {
    render(
      <Link
        ariaLabel={testAriaLabel}
        href={testHref}
        target={testTarget}
        text={testText}
      />
    );
    linkElement = screen.getByRole("link");
  });

  it("renders correctly with `ariaLabel`, `href`, and `text`", () => {
    expect(linkElement.textContent).toBe(testText);
    expect(linkElement).toHaveAccessibleName();
  });

  it("renders with the correct `role` and `tabIndex`", () => {
    expect(linkElement).toBeDefined();
    expect(linkElement.getAttribute("tabIndex")).toBe("0");
  });

  it("invokes window.open the link when clicked", () => {
    const open = jest.fn();
    window.open = open;

    userEvent.click(linkElement);

    expect(open).toHaveBeenCalledWith(testHref, testTarget);
  });

  it("invokes window.open with the Enter key", () => {
    const open = jest.fn();
    window.open = open;

    userEvent.tab();

    expect(linkElement).toHaveFocus();

    userEvent.keyboard("{Enter}");

    expect(open).toHaveBeenCalledWith(testHref, testTarget);
  });
});

// describe("<Link />", () => {
//   describe("with `target` prop", () => {
//     it('opens the `href` in a new tab when given `"_blank"`', () => {
//       const open = sinon.spy();
//       window.open = open;

//       const wrapper = mount(<Link href={testHref} target="_blank" />);
//       wrapper.simulate("click", {
//         preventDefault: () => {},
//         stopPropagation: () => {},
//       });

//       expect(open.calledWith(testHref, "_blank")).toBeTruthy();
//     });
//   });
// });
