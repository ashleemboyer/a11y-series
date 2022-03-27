import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Slider, { SliderProps } from ".";

const testMinValue = 0;
const testMaxValue = 100;
const testStepSize = 10;
const testInitialValue = 27;
const testLabel = "test-label";
const testAriaLabel = "test-aria-label";

type SetupProps = Pick<SliderProps, "ariaLabel" | "initialValue" | "onChange">;

const setup = ({ ariaLabel, initialValue, onChange }: SetupProps = {}) => {
  render(
    <Slider
      ariaLabel={ariaLabel}
      initialValue={initialValue}
      label={testLabel}
      maxValue={testMaxValue}
      minValue={testMinValue}
      onChange={onChange}
      stepSize={testStepSize}
    />
  );
};

describe("<Slider />", () => {
  it("renders successfully", () => {
    setup();

    const sliderElement = screen.getByRole("slider");
    expect(sliderElement).toHaveAccessibleName();
    expect(sliderElement.getAttribute("aria-valuemax")).toBe(`${testMaxValue}`);
    expect(sliderElement.getAttribute("aria-valuemin")).toBe(`${testMinValue}`);
    expect(sliderElement.getAttribute("aria-valuenow")).toBe(`${testMinValue}`);
    expect(sliderElement.getAttribute("tabIndex")).toBe("0");
  });

  it("sets `aria-valuenow` correctly with `initialValue`", () => {
    setup({ initialValue: testInitialValue });
    expect(screen.getByRole("slider").getAttribute("aria-valuenow")).toBe(
      `${testInitialValue}`
    );
  });

  it("decrements by `stepSize` with ArrowDown or ArrowLeft", () => {
    setup({ initialValue: testInitialValue });

    userEvent.tab();
    expect(screen.getByRole("slider")).toHaveFocus();

    userEvent.keyboard("{ArrowDown}");
    expect(screen.getByRole("slider").getAttribute("aria-valuenow")).toBe(
      `${testInitialValue - testStepSize}`
    );

    userEvent.keyboard("{ArrowLeft}");
    expect(screen.getByRole("slider").getAttribute("aria-valuenow")).toBe(
      `${testInitialValue - 2 * testStepSize}`
    );
  });

  it("increments by `stepSize` with ArrowUp or ArrowRight", () => {
    setup({ initialValue: testInitialValue });

    userEvent.tab();
    expect(screen.getByRole("slider")).toHaveFocus();

    userEvent.keyboard("{ArrowUp}");
    expect(screen.getByRole("slider").getAttribute("aria-valuenow")).toBe(
      `${testInitialValue + testStepSize}`
    );

    userEvent.keyboard("{ArrowRight}");
    expect(screen.getByRole("slider").getAttribute("aria-valuenow")).toBe(
      `${testInitialValue + 2 * testStepSize}`
    );
  });

  it("decrements by 2 * `stepSize` with PageDown", () => {
    setup({ initialValue: testInitialValue });

    userEvent.tab();
    expect(screen.getByRole("slider")).toHaveFocus();

    userEvent.keyboard("{PageDown}");
    expect(screen.getByRole("slider").getAttribute("aria-valuenow")).toBe(
      `${testInitialValue - 2 * testStepSize}`
    );
  });

  it("increments by 2 * `stepSize` with PageUp", () => {
    setup({ initialValue: testInitialValue });

    userEvent.tab();
    expect(screen.getByRole("slider")).toHaveFocus();

    userEvent.keyboard("{PageUp}");
    expect(screen.getByRole("slider").getAttribute("aria-valuenow")).toBe(
      `${testInitialValue + 2 * testStepSize}`
    );
  });

  it("sets value to `minValue` on Home", () => {
    setup({ initialValue: testInitialValue });

    userEvent.tab();
    expect(screen.getByRole("slider")).toHaveFocus();

    userEvent.keyboard("{Home}");
    expect(screen.getByRole("slider").getAttribute("aria-valuenow")).toBe(
      `${testMinValue}`
    );
  });

  it("sets value to `maxValue` on Home", () => {
    setup({ initialValue: testInitialValue });

    userEvent.tab();
    expect(screen.getByRole("slider")).toHaveFocus();

    userEvent.keyboard("{End}");
    expect(screen.getByRole("slider").getAttribute("aria-valuenow")).toBe(
      `${testMaxValue}`
    );
  });

  it("invokes onChange when value changes", () => {
    const onChangeSpy = jest.fn();
    setup({ initialValue: testInitialValue, onChange: onChangeSpy });

    userEvent.tab();
    expect(screen.getByRole("slider")).toHaveFocus();
    userEvent.keyboard("{ArrowDown}");
    expect(onChangeSpy).toHaveBeenCalledTimes(1);
  });

  it("does not invoke onChange when value does not change", () => {
    const onChangeSpy = jest.fn();
    setup({ onChange: onChangeSpy });

    userEvent.tab();
    expect(screen.getByRole("slider")).toHaveFocus();
    expect(screen.getByRole("slider").getAttribute("aria-valuenow")).toBe(
      `${testMinValue}`
    );

    userEvent.keyboard("{ArrowDown}");
    expect(screen.getByRole("slider").getAttribute("aria-valuenow")).toBe(
      `${testMinValue}`
    );
    expect(onChangeSpy).not.toHaveBeenCalled();
  });
});
