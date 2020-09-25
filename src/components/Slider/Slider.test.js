import React from "react";
import { shallow, mount } from "enzyme";
import sinon from "sinon";
import keyCodes from "../../constants/keyCodes";
import Slider from "./Slider";

let wrapper;
const testMinValue = 0;
const testMaxValue = 100;
const testStepSize = 10;
const testInitialValue = 27;
const testLabel = "test-label";
const testAriaLabel = "test-aria-label";

describe("<Slider />", () => {
  beforeEach(() => {
    wrapper = shallow(
      <Slider
        minValue={testMinValue}
        maxValue={testMaxValue}
        stepSize={testStepSize}
        initialValue={testInitialValue}
      />
    );
  });

  it("renders successfully with the correct aria attributes", () => {
    const slider = wrapper.find('[role="slider"]');

    expect(slider).toHaveLength(1);
    expect(slider.prop("tabIndex")).toBe("0");
    expect(slider.prop("aria-valuemin")).toBe(testMinValue);
    expect(slider.prop("aria-valuenow")).toBe(testInitialValue);
    expect(slider.prop("aria-valuemax")).toBe(testMaxValue);
    expect(slider.prop("aria-labelledby")).toBeUndefined();
    expect(slider.prop("aria-label")).toBeUndefined();
  });

  describe("with the `initialValue` prop", () => {
    it("has the correct `aria-valuenow`", () => {
      wrapper = shallow(
        <Slider
          minValue={testMinValue}
          maxValue={testMaxValue}
          stepSize={testStepSize}
          initialValue={testInitialValue}
        />
      );

      const slider = wrapper.find('[role="slider"]');
      expect(slider.prop("aria-valuenow")).toBe(testInitialValue);
    });
  });

  describe("with the `onChangeCallback` prop", () => {
    it("invokes the callback when the current value changes", () => {
      const handleOnChange = sinon.spy();
      wrapper = mount(
        <Slider
          minValue={testMinValue}
          maxValue={testMaxValue}
          stepSize={testStepSize}
          initialValue={testInitialValue}
          onChangeCallback={handleOnChange}
        />
      );
      wrapper
        .find('[role="slider"]')
        .simulate("keydown", { keyCode: keyCodes.ARROW_UP });

      expect(handleOnChange).toHaveProperty("callCount", 1);
    });

    it("does not invoke the callback when the current value has not changed", () => {
      const handleOnChange = sinon.spy();
      wrapper = mount(
        <Slider
          minValue={testMinValue}
          maxValue={testMaxValue}
          stepSize={testStepSize}
          initialValue={testMaxValue}
          onChangeCallback={handleOnChange}
        />
      );
      wrapper
        .find('[role="slider"]')
        .simulate("keydown", { keyCode: keyCodes.ARROW_UP });

      expect(handleOnChange).toHaveProperty("callCount", 0);
    });
  });

  describe("with the `label` and `ariaLabel` props", () => {
    it("renders a div with `id` 'slider-label' when given only `label`", () => {
      wrapper = shallow(
        <Slider
          minValue={testMinValue}
          maxValue={testMaxValue}
          stepSize={testStepSize}
          label={testLabel}
        />
      );

      const slider = wrapper.find('[role="slider"]');
      expect(slider.prop("aria-labelledby")).toBe("slider-label");
      expect(slider.prop("aria-label")).toBeUndefined();
    });

    it("renders sets the `aria-label` attribute when given only `ariaLabel`", () => {
      wrapper = shallow(
        <Slider
          minValue={testMinValue}
          maxValue={testMaxValue}
          stepSize={testStepSize}
          ariaLabel={testAriaLabel}
        />
      );

      const slider = wrapper.find('[role="slider"]');
      expect(slider.prop("aria-labelledby")).toBeUndefined();
      expect(slider.prop("aria-label")).toBe(testAriaLabel);
    });

    it("renders a div with `id` 'slider-label' when given both `label` and `ariaLabel`", () => {
      wrapper = shallow(
        <Slider
          minValue={testMinValue}
          maxValue={testMaxValue}
          stepSize={testStepSize}
          label={testLabel}
          ariaLabel={testAriaLabel}
        />
      );

      const slider = wrapper.find('[role="slider"]');
      expect(slider.prop("aria-labelledby")).toBe("slider-label");
      expect(slider.prop("aria-label")).toBeUndefined();
    });
  });

  describe("onKeyDown", () => {
    it("increments by `stepSize` on arrow up", () => {
      let slider = wrapper.find('[role="slider"]');
      slider.simulate("keydown", {
        keyCode: keyCodes.ARROW_UP,
      });

      slider = wrapper.find('[role="slider"]');
      expect(slider.prop("aria-valuenow")).toBe(
        testInitialValue + testStepSize
      );
    });

    it("increments by `stepSize` on arrow right", () => {
      let slider = wrapper.find('[role="slider"]');
      slider.simulate("keydown", {
        keyCode: keyCodes.ARROW_RIGHT,
      });

      slider = wrapper.find('[role="slider"]');
      expect(slider.prop("aria-valuenow")).toBe(
        testInitialValue + testStepSize
      );
    });

    it("decrements by `stepSize` on arrow left", () => {
      let slider = wrapper.find('[role="slider"]');
      slider.simulate("keydown", {
        keyCode: keyCodes.ARROW_LEFT,
      });

      slider = wrapper.find('[role="slider"]');
      expect(slider.prop("aria-valuenow")).toBe(
        testInitialValue - testStepSize
      );
    });

    it("decrements by `stepSize` on arrow down", () => {
      let slider = wrapper.find('[role="slider"]');
      slider.simulate("keydown", {
        keyCode: keyCodes.ARROW_DOWN,
      });

      slider = wrapper.find('[role="slider"]');
      expect(slider.prop("aria-valuenow")).toBe(
        testInitialValue - testStepSize
      );
    });

    it("increments by `stepSize` * 2 on page up", () => {
      let slider = wrapper.find('[role="slider"]');
      slider.simulate("keydown", {
        keyCode: keyCodes.PAGE_UP,
      });

      slider = wrapper.find('[role="slider"]');
      expect(slider.prop("aria-valuenow")).toBe(
        testInitialValue + 2 * testStepSize
      );
    });

    it("decrements by `stepSize` * 2 on page down", () => {
      let slider = wrapper.find('[role="slider"]');
      slider.simulate("keydown", {
        keyCode: keyCodes.PAGE_DOWN,
      });

      slider = wrapper.find('[role="slider"]');
      expect(slider.prop("aria-valuenow")).toBe(
        testInitialValue - 2 * testStepSize
      );
    });

    it("sets the current value to `minValue` on home", () => {
      let slider = wrapper.find('[role="slider"]');
      slider.simulate("keydown", {
        keyCode: keyCodes.HOME,
      });

      slider = wrapper.find('[role="slider"]');
      expect(slider.prop("aria-valuenow")).toBe(testMinValue);
    });

    it("sets the current value to `maxValue` on end", () => {
      let slider = wrapper.find('[role="slider"]');
      slider.simulate("keydown", {
        keyCode: keyCodes.END,
      });

      slider = wrapper.find('[role="slider"]');
      expect(slider.prop("aria-valuenow")).toBe(testMaxValue);
    });
  });
});
