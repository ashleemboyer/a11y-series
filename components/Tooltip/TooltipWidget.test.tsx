import { render, screen } from "@testing-library/react";
import Tooltip from ".";

const testText = "Test tooltip.";

describe("<Tooltip />", () => {
  it.todo("re-write tests");
});

// describe("<TooltipWidget />", () => {
//   it("renders successfully with the correct aria attributes", () => {
//     const wrapper = shallow(<TooltipWidget text={testText} />);

//     const span = wrapper.find("span");
//     expect(span).toHaveLength(1);
//     expect(span.prop("tabIndex")).toBe("0");
//     expect(span.prop("aria-labelledby")).toBe("tooltip");
//     expect(span.find("FontAwesomeIcon")).toHaveLength(1);

//     const p = wrapper.find("p");
//     expect(p.prop("id")).toBe("tooltip");
//     expect(p.prop("role")).toBe("tooltip");
//     expect(p.prop("hidden")).toBeTruthy();
//     expect(p.text()).toBe(testText);
//   });

//   describe("onMouseEnter", () => {
//     it("shows the tooltip text", () => {
//       const wrapper = shallow(<TooltipWidget text={testText} />);
//       wrapper.find("span").simulate("mouseEnter");

//       const p = wrapper.find("p");
//       expect(p.prop("hidden")).toBe(undefined);
//     });
//   });

//   describe("onMouseLeave", () => {
//     it("hides the tooltip text", () => {
//       const wrapper = shallow(<TooltipWidget text={testText} />);

//       const span = wrapper.find("span");
//       span.simulate("mouseEnter");
//       span.simulate("mouseLeave");

//       const p = wrapper.find("p");
//       expect(p.prop("hidden")).toBeTruthy();
//     });
//   });

//   describe("onFocus", () => {
//     it("shows the tooltip text", () => {
//       const wrapper = shallow(<TooltipWidget text={testText} />);
//       wrapper.find("span").simulate("focus");

//       const p = wrapper.find("p");
//       expect(p.prop("hidden")).toBe(undefined);
//     });
//   });

//   describe("onBlur", () => {
//     it("hides the tooltip text", () => {
//       const wrapper = shallow(<TooltipWidget text={testText} />);

//       const span = wrapper.find("span");
//       span.simulate("focus");
//       span.simulate("blur");

//       const p = wrapper.find("p");
//       expect(p.prop("hidden")).toBeTruthy();
//     });
//   });

//   describe("when focused and onKeyDown", () => {
//     it("hides the tooltip text", () => {
//       const wrapper = shallow(<TooltipWidget text={testText} />);
//       wrapper.find("span").simulate("focus");
//       wrapper.find("span").simulate("keydown", {
//         keyCode: keyCodes.ESCAPE,
//       });

//       const p = wrapper.find("p");
//       expect(p.prop("hidden")).toBeTruthy();
//     });
//   });
// });
