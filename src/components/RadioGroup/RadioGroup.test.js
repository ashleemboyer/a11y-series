import React from "react";
import { shallow } from "enzyme";
import keyCodes from "../../constants/keyCodes";
import RadioGroup from "./RadioGroup";

const testLabel = "Favorite Golden Girls";
const testOptions = [
  { label: "Rose Nylund", value: "rose_nylund", ref: React.createRef() },
  {
    label: "Blanche Devereaux",
    value: "blanche_devereaux",
    ref: React.createRef(),
  },
  {
    label: "Dorothy Zbornak",
    value: "dorothy_zbornak",
    ref: React.createRef(),
  },
  {
    label: "Sophia Petrillo",
    value: "sophia_petrillo",
    ref: React.createRef(),
  },
];

describe("<RadioGroup />", () => {
  it("renders successfully with the correct aria attributes", () => {
    const wrapper = shallow(
      <RadioGroup label={testLabel} options={testOptions} />
    );

    const radioGroup = wrapper.find('[role="radiogroup"]');
    expect(radioGroup.prop("aria-labelledby")).toBe("radio_group_label");
    expect(radioGroup).toHaveLength(1);

    const radioButtons = wrapper.find('[role="radio"]');
    expect(radioButtons).toHaveLength(testOptions.length);
    radioButtons.forEach((radioButton, index) => {
      expect(radioButton.prop("tabIndex")).toBe(index === 0 ? "0" : "-1");
      expect(radioButton.prop("aria-checked")).toBe(index === 0);
    });
  });

  describe("option onClick", () => {
    const wrapper = shallow(
      <RadioGroup label={testLabel} options={testOptions} />
    );

    wrapper.find('[role="radio"]').last().simulate("click");

    const radioButtons = wrapper.find('[role="radio"]');
    const lastIndex = testOptions.length - 1;
    radioButtons.forEach((radioButton, index) => {
      expect(radioButton.prop("tabIndex")).toBe(
        index === lastIndex ? "0" : "-1"
      );
      expect(radioButton.prop("aria-checked")).toBe(index === lastIndex);
    });
  });

  describe("onKeyDown", () => {
    it("selects the next option on arrow down", () => {
      const wrapper = shallow(
        <RadioGroup label={testLabel} options={testOptions} />
      );

      wrapper.find('[role="radiogroup"]').simulate("keydown", {
        keyCode: keyCodes.ARROW_DOWN,
        preventDefault: () => {},
      });

      const radioButtons = wrapper.find('[role="radio"]');
      const indexOfSelected = 1;
      radioButtons.forEach((radioButton, index) => {
        expect(radioButton.prop("tabIndex")).toBe(
          index === indexOfSelected ? "0" : "-1"
        );
        expect(radioButton.prop("aria-checked")).toBe(
          index === indexOfSelected
        );
      });
    });

    it("selects the next option on arrow right", () => {
      const wrapper = shallow(
        <RadioGroup label={testLabel} options={testOptions} />
      );

      wrapper.find('[role="radiogroup"]').simulate("keydown", {
        keyCode: keyCodes.ARROW_RIGHT,
        preventDefault: () => {},
      });

      const radioButtons = wrapper.find('[role="radio"]');
      const indexOfSelected = 1;
      radioButtons.forEach((radioButton, index) => {
        expect(radioButton.prop("tabIndex")).toBe(
          index === indexOfSelected ? "0" : "-1"
        );
        expect(radioButton.prop("aria-checked")).toBe(
          index === indexOfSelected
        );
      });
    });

    it("selects the next option on arrow up", () => {
      const wrapper = shallow(
        <RadioGroup label={testLabel} options={testOptions} />
      );

      wrapper.find('[role="radiogroup"]').simulate("keydown", {
        keyCode: keyCodes.ARROW_UP,
        preventDefault: () => {},
      });

      const radioButtons = wrapper.find('[role="radio"]');
      const indexOfSelected = testOptions.length - 1;
      radioButtons.forEach((radioButton, index) => {
        expect(radioButton.prop("tabIndex")).toBe(
          index === indexOfSelected ? "0" : "-1"
        );
        expect(radioButton.prop("aria-checked")).toBe(
          index === indexOfSelected
        );
      });
    });

    it("selects the next option on arrow left", () => {
      const wrapper = shallow(
        <RadioGroup label={testLabel} options={testOptions} />
      );

      wrapper.find('[role="radiogroup"]').simulate("keydown", {
        keyCode: keyCodes.ARROW_LEFT,
        preventDefault: () => {},
      });

      const radioButtons = wrapper.find('[role="radio"]');
      const indexOfSelected = testOptions.length - 1;
      radioButtons.forEach((radioButton, index) => {
        expect(radioButton.prop("tabIndex")).toBe(
          index === indexOfSelected ? "0" : "-1"
        );
        expect(radioButton.prop("aria-checked")).toBe(
          index === indexOfSelected
        );
      });
    });
  });
});
