import { createRef } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RadioGroup from ".";

const testLabel = "Favorite Golden Girls";
const testOptions = [
  { label: "Rose Nylund", value: "rose_nylund", ref: createRef() },
  {
    label: "Blanche Devereaux",
    value: "blanche_devereaux",
  },
  {
    label: "Dorothy Zbornak",
    value: "dorothy_zbornak",
  },
  {
    label: "Sophia Petrillo",
    value: "sophia_petrillo",
  },
];

describe("<RadioGroup />", () => {
  let radioGroupElement;
  let radioOptions;

  beforeEach(() => {
    render(<RadioGroup label={testLabel} options={testOptions} />);
    radioGroupElement = screen.getByRole("radiogroup");
    radioOptions = screen.getAllByRole("radio");
  });

  it("renders successfully", () => {
    expect(radioGroupElement).toHaveAccessibleName();
    expect(radioOptions).toHaveLength(testOptions.length);
    radioOptions.forEach((radioOption, index) => {
      expect(radioOption.getAttribute("aria-checked")).toBe(
        index === 0 ? "true" : "false"
      );
      expect(radioOption.getAttribute("id")).toBe(testOptions[index].value);
      expect(radioOption.getAttribute("tabIndex")).toBe(
        index === 0 ? "0" : "-1"
      );
    });
  });

  it("is only one tab stop", () => {
    userEvent.tab();

    expect(radioOptions[0]).toHaveFocus();

    userEvent.tab();

    radioOptions.forEach((option) => {
      expect(option).not.toHaveFocus();
    });
  });

  it("selects an option on click", () => {
    expect(radioOptions[1].getAttribute("aria-checked")).toBe("false");
    userEvent.click(radioOptions[1]);
    expect(radioOptions[1].getAttribute("aria-checked")).toBe("true");
  });

  it("selects the next option on ArrowDown or ArrowRight", () => {
    userEvent.tab();
    expect(radioOptions[0]).toHaveFocus();
    expect(radioOptions[1].getAttribute("aria-checked")).toBe("false");

    userEvent.keyboard("{ArrowDown}");
    expect(radioOptions[1]).toHaveFocus();
    expect(radioOptions[1].getAttribute("aria-checked")).toBe("true");

    userEvent.keyboard("{ArrowRight}");
    expect(radioOptions[2]).toHaveFocus();
    expect(radioOptions[2].getAttribute("aria-checked")).toBe("true");
  });

  it("selects the previous option on ArrowUp or ArrowLeft", () => {
    userEvent.tab();
    expect(radioOptions[0]).toHaveFocus();
    expect(radioOptions[0].getAttribute("aria-checked")).toBe("true");

    userEvent.keyboard("{ArrowDown}");
    expect(radioOptions[1]).toHaveFocus();
    expect(radioOptions[1].getAttribute("aria-checked")).toBe("true");

    userEvent.keyboard("{ArrowDown}");
    expect(radioOptions[2]).toHaveFocus();
    expect(radioOptions[2].getAttribute("aria-checked")).toBe("true");

    userEvent.keyboard("{ArrowUp}");
    expect(radioOptions[1]).toHaveFocus();
    expect(radioOptions[1].getAttribute("aria-checked")).toBe("true");

    userEvent.keyboard("{ArrowLeft}");
    expect(radioOptions[0]).toHaveFocus();
    expect(radioOptions[0].getAttribute("aria-checked")).toBe("true");
  });
});
