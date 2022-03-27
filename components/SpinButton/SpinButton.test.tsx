import { render, screen } from "@testing-library/react";
import SpinButton from ".";

const testAriaLabel = "Test Label";
const testInitialIndex = 1;
const testValues = [
  { value: 10, valueText: "tenth" },
  { value: 11, valueText: "eleventh" },
  { value: 12, valueText: "twelfth" },
];

describe("<SpinButton />", () => {
  it.todo("re-write tests");
});

// describe("<SpinButton />", () => {
//   it("renders successfully with the correct aria attributes", () => {
//     const wrapper = shallow(
//       <SpinButton
//         ariaLabel={testAriaLabel}
//         initialIndex={testInitialIndex}
//         values={testValues}
//       />
//     );

//     const controlButtons = wrapper.find("button");
//     expect(controlButtons).toHaveLength(2);
//     expect(controlButtons.first().prop("tabIndex")).toBe("-1");
//     expect(controlButtons.first().prop("aria-label")).toBe(
//       `Previous ${testAriaLabel}`
//     );
//     expect(controlButtons.last().prop("tabIndex")).toBe("-1");
//     expect(controlButtons.last().prop("aria-label")).toBe(
//       `Next ${testAriaLabel}`
//     );

//     const previousValue = wrapper.find(".previousValue");
//     expect(previousValue).toHaveLength(1);
//     expect(previousValue.prop("aria-hidden")).toBeTruthy();
//     expect(previousValue.text()).toBe(`${testValues[0].value}`);

//     const nextValue = wrapper.find(".nextValue");
//     expect(nextValue).toHaveLength(1);
//     expect(nextValue.prop("aria-hidden")).toBeTruthy();
//     expect(nextValue.text()).toBe(`${testValues[2].value}`);

//     const spinbutton = wrapper.find('[role="spinbutton"]');
//     expect(spinbutton).toHaveLength(1);
//     expect(spinbutton.prop("tabIndex")).toBe("0");
//     expect(spinbutton.prop("aria-valuenow")).toBe(testInitialIndex);
//     expect(spinbutton.prop("aria-valuetext")).toBe(
//       testValues[testInitialIndex].valueText
//     );
//     expect(spinbutton.prop("aria-valuemin")).toBe(0);
//     expect(spinbutton.prop("aria-valuemax")).toBe(testValues.length - 1);
//     expect(spinbutton.prop("aria-label")).toBe(testAriaLabel);
//     expect(spinbutton.text()).toBe(`${testValues[testInitialIndex].value}`);
//   });

//   describe("button onClick", () => {
//     it("decrements the index when the first button is clicked", () => {
//       const wrapper = shallow(
//         <SpinButton
//           ariaLabel={testAriaLabel}
//           initialIndex={testInitialIndex}
//           values={testValues}
//         />
//       );

//       wrapper.find("button").first().simulate("click");

//       const newIndex = 0;
//       const spinbutton = wrapper.find('[role="spinbutton"]');
//       expect(spinbutton.prop("aria-valuenow")).toBe(newIndex);
//       expect(spinbutton.prop("aria-valuetext")).toBe(
//         testValues[newIndex].valueText
//       );
//       expect(spinbutton.text()).toBe(`${testValues[newIndex].value}`);
//     });

//     it("increments the index when the second button is clicked", () => {
//       const wrapper = shallow(
//         <SpinButton
//           ariaLabel={testAriaLabel}
//           initialIndex={testInitialIndex}
//           values={testValues}
//         />
//       );

//       wrapper.find("button").last().simulate("click");

//       const newIndex = 2;
//       const spinbutton = wrapper.find('[role="spinbutton"]');
//       expect(spinbutton.prop("aria-valuenow")).toBe(newIndex);
//       expect(spinbutton.prop("aria-valuetext")).toBe(
//         testValues[newIndex].valueText
//       );
//       expect(spinbutton.text()).toBe(`${testValues[newIndex].value}`);
//     });
//   });

//   describe("onKeyDown", () => {
//     it("increments on arrow up", () => {
//       const wrapper = shallow(
//         <SpinButton
//           ariaLabel={testAriaLabel}
//           initialIndex={testInitialIndex}
//           values={testValues}
//         />
//       );

//       wrapper.find('[role="spinbutton"]').simulate("keydown", {
//         keyCode: keyCodes.ARROW_DOWN,
//       });

//       const newIndex = 0;
//       const spinbutton = wrapper.find('[role="spinbutton"]');
//       expect(spinbutton.prop("aria-valuenow")).toBe(newIndex);
//       expect(spinbutton.prop("aria-valuetext")).toBe(
//         testValues[newIndex].valueText
//       );
//       expect(spinbutton.text()).toBe(`${testValues[newIndex].value}`);
//     });

//     it("decrements on arrow down", () => {
//       const wrapper = shallow(
//         <SpinButton
//           ariaLabel={testAriaLabel}
//           initialIndex={testInitialIndex}
//           values={testValues}
//         />
//       );

//       wrapper.find('[role="spinbutton"]').simulate("keydown", {
//         keyCode: keyCodes.ARROW_UP,
//       });

//       const newIndex = 2;
//       const spinbutton = wrapper.find('[role="spinbutton"]');
//       expect(spinbutton.prop("aria-valuenow")).toBe(newIndex);
//       expect(spinbutton.prop("aria-valuetext")).toBe(
//         testValues[newIndex].valueText
//       );
//       expect(spinbutton.text()).toBe(`${testValues[newIndex].value}`);
//     });
//   });
// });
