import React from "react";
import { shallow, mount } from "enzyme";

import Listbox from "./Listbox";

const ARROW_UP = 38;
const ARROW_DOWN = 40;
const ESCAPE = 27;
const ENTER = 13;

const testLabel = "Favorite animal";
const testOptions = [
  {
    label: "Cat",
    id: "cat"
  },
  {
    label: "Dog",
    id: "dog"
  },
  {
    label: "Fish",
    id: "fish"
  }
];

describe("<Listbox />", () => {
  it("renders successfully with the correct aria attributes", () => {
    const wrapper = shallow(
      <Listbox label={testLabel} options={testOptions} />
    );

    const label = wrapper.find("label");
    expect(label).toHaveLength(1);
    expect(label.text()).toBe(testLabel);

    const button = wrapper.find("button");
    expect(button).toHaveLength(1);
    expect(button.prop("aria-labelledby")).toBe(label.prop("id"));
    expect(button.prop("aria-haspopup")).toBe("listbox");
    expect(button.prop("aria-expanded")).toBeFalsy();
    expect(button.text()).toBe(testOptions[0].label);
  });

  describe("button onClick", () => {
    it("expands with the correct aria attributes", () => {
      const wrapper = shallow(
        <Listbox label={testLabel} options={testOptions} />
      );
      let button = wrapper.find("button");
      button.simulate("click");

      button = wrapper.find("button");
      expect(button.prop("aria-expanded")).toBeTruthy();

      const ul = wrapper.find("ul");
      expect(ul).toHaveLength(1);
      expect(ul.prop("tabIndex")).toBe("0");
      expect(ul.prop("role")).toBe("listbox");
      expect(ul.prop("aria-activedescendant")).toBe(testOptions[0].id);

      const li = wrapper.find("li");
      expect(li).toHaveLength(testOptions.length);
      expect(li.first().prop("id")).toBe(testOptions[0].id);
      expect(li.first().prop("role")).toBe("option");
      expect(li.first().prop("aria-selected")).toBeTruthy();
    });

    it("collapses with the correct aria attributes", () => {
      const wrapper = mount(
        <Listbox label={testLabel} options={testOptions} />
      );
      wrapper.find("button").simulate("click");
      wrapper.find("button").simulate("click");

      const button = wrapper.find("button");
      expect(button.prop("aria-expanded")).toBeFalsy();
      expect(wrapper.find("ul")).toHaveLength(0);
    });
  });

  describe("listbox onClick", () => {
    it("selects the option that was clicked and collapses", () => {
      const wrapper = shallow(
        <Listbox label={testLabel} options={testOptions} />
      );
      wrapper.find("button").simulate("click");

      console.log(wrapper.props());

      expect(
        wrapper
          .find("li")
          .last()
          .prop("aria-selected")
      ).toBeFalsy();
      wrapper
        .find("li")
        .last()
        .simulate("click");
      expect(wrapper.find("ul")).toHaveLength(0);

      wrapper.find("button").simulate("click");
      expect(
        wrapper
          .find("li")
          .last()
          .prop("aria-selected")
      ).toBeTruthy();
    });
  });

  describe("onKeyDown when collapsed", () => {
    it("expands on arrow down", () => {
      const wrapper = shallow(
        <Listbox label={testLabel} options={testOptions} />
      );
      wrapper.find("button").simulate("keydown", {
        keyCode: ARROW_DOWN
      });

      expect(wrapper.find("ul")).toHaveLength(1);
    });

    it("expands on arrow up", () => {
      const wrapper = shallow(
        <Listbox label={testLabel} options={testOptions} />
      );
      wrapper.find("button").simulate("keydown", {
        keyCode: ARROW_UP
      });

      expect(wrapper.find("ul")).toHaveLength(1);
    });
  });

  describe("onKeyDown when expanded", () => {
    it("collapses on escape", () => {
      const wrapper = mount(
        <Listbox label={testLabel} options={testOptions} />
      );
      wrapper.find("button").simulate("click");
      wrapper.find("ul").simulate("keydown", {
        keyCode: ESCAPE
      });

      const button = wrapper.find("button");
      expect(button.prop("aria-expanded")).toBeFalsy();
      expect(wrapper.find("ul")).toHaveLength(0);
    });

    it("collapses on enter", () => {
      const wrapper = mount(
        <Listbox label={testLabel} options={testOptions} />
      );
      wrapper.find("button").simulate("click");
      wrapper.find("ul").simulate("keydown", {
        keyCode: ENTER
      });

      const button = wrapper.find("button");
      expect(button.prop("aria-expanded")).toBeFalsy();
      expect(wrapper.find("ul")).toHaveLength(0);
    });

    describe("when key is arrow down", () => {
      let wrapper;
      beforeEach(() => {
        wrapper = shallow(<Listbox label={testLabel} options={testOptions} />);
        wrapper.find("button").simulate("click");
      });

      it("selects first option if current option is the last", () => {
        wrapper
          .find("li")
          .last()
          .simulate("click");
        wrapper.find("button").simulate("click");
        wrapper.find("ul").simulate("keydown", { keyCode: ARROW_DOWN });
        expect(
          wrapper
            .find("li")
            .first()
            .prop("aria-selected")
        ).toBeTruthy();
      });

      it("selects next option if current option is not the last", () => {
        wrapper.find("ul").simulate("keydown", { keyCode: ARROW_DOWN });
        expect(
          wrapper
            .find("li")
            .at(1)
            .prop("aria-selected")
        ).toBeTruthy();
      });
    });

    describe("when key is arrow up", () => {
      let wrapper;
      beforeEach(() => {
        wrapper = shallow(<Listbox label={testLabel} options={testOptions} />);
        wrapper.find("button").simulate("click");
      });

      it("selects last option if current option is the first", () => {
        wrapper.find("ul").simulate("keydown", { keyCode: ARROW_UP });
        expect(
          wrapper
            .find("li")
            .last()
            .prop("aria-selected")
        ).toBeTruthy();
      });

      it("selects previous option if current option is not the first", () => {
        wrapper
          .find("li")
          .last()
          .simulate("click");
        wrapper.find("button").simulate("click");
        wrapper.find("ul").simulate("keydown", { keyCode: ARROW_UP });
        expect(
          wrapper
            .find("li")
            .at(1)
            .prop("aria-selected")
        ).toBeTruthy();
      });
    });
  });
});
