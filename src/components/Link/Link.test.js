import React from "react";
import { shallow, mount } from "enzyme";
import sinon from "sinon";
import keyCodes from "../../constants/keyCodes";
import Link from "./Link";

const testText = "My Link";
const testHref = "https://ashleemboyer.com";
const testAriaLabel = "My aria label";

describe("<Link />", () => {
  it("renders successfully with the required props", () => {
    const wrapper = shallow(<Link href={testHref} />);

    expect(wrapper.find("span")).toHaveLength(1);
    expect(wrapper.find("span").prop("role")).toBe("link");
    expect(wrapper.find("span").prop("tabIndex")).toBe("0");
  });

  it("opens the link when clicked", () => {
    const open = sinon.spy();
    window.open = open;

    const wrapper = mount(<Link href={testHref} />);
    wrapper.simulate("click", {
      preventDefault: () => {},
      stopPropagation: () => {},
    });

    expect(open).toHaveProperty("callCount", 1);
  });

  it("opens when focused and the Enter key is pressed", () => {
    const open = sinon.spy();
    window.open = open;

    const wrapper = mount(<Link href={testHref} />);
    wrapper.simulate("keyDown", {
      preventDefault: () => {},
      stopPropagation: () => {},
      keyCode: keyCodes.ENTER,
    });

    expect(open).toHaveProperty("callCount", 1);
  });

  describe("with the `text` and `ariaLabel` props", () => {
    it("renders the `text` when both props are provided", () => {
      const wrapper = shallow(
        <Link href={testHref} text={testText} ariaLabel={testAriaLabel} />
      );

      expect(wrapper.find("span").text()).toBe(testText);
      expect(wrapper.find("span").prop("aria-label")).toBe(undefined);
    });

    it("renders the `text` when only that prop is provided", () => {
      const wrapper = shallow(<Link href={testHref} text={testText} />);

      expect(wrapper.find("span").text()).toBe(testText);
      expect(wrapper.find("span").prop("aria-label")).toBe(undefined);
    });

    it("renders a span with the `aria-label` property when only that prop is provided", () => {
      const wrapper = shallow(
        <Link href={testHref} ariaLabel={testAriaLabel} />
      );

      expect(wrapper.find("span").text()).toBe("");
      expect(wrapper.find("span").prop("aria-label")).toBe(testAriaLabel);
    });
  });

  describe("with `target` prop", () => {
    it('opens the `href` in a new tab when given `"_blank"`', () => {
      const open = sinon.spy();
      window.open = open;

      const wrapper = mount(<Link href={testHref} target="_blank" />);
      wrapper.simulate("click", {
        preventDefault: () => {},
        stopPropagation: () => {},
      });

      expect(open.calledWith(testHref, "_blank")).toBeTruthy();
    });
  });
});
