import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Listbox from ".";

const testLabel = "Favorite animal";
const testOptions = [
  {
    label: "Cat",
    id: "cat",
  },
  {
    label: "Dog",
    id: "dog",
  },
  {
    label: "Fish",
    id: "fish",
  },
];

describe("<Listbox />", () => {
  let listboxLabel;
  let listboxButton;
  beforeEach(() => {
    render(<Listbox label={testLabel} options={testOptions} />);
    listboxLabel = screen.getByText(testLabel);
    listboxButton = screen.getByRole("button");
  });

  it("renders successfully", () => {
    expect(listboxLabel).toBeDefined();
    expect(listboxButton).toBeDefined();
  });

  it("renders with the correct ARIA attributes", () => {
    expect(listboxButton).toHaveAccessibleName();
    expect(listboxButton.getAttribute("aria-expanded")).toBe("false");
    expect(listboxButton.getAttribute("aria-haspopup")).toBe("listbox");
    expect(listboxButton.getAttribute("aria-labelledby")).toBe(
      listboxLabel.getAttribute("id")
    );
  });

  it("opens on click and has the correct attributes and children", () => {
    userEvent.click(listboxButton);

    const listboxElement = screen.getByRole("listbox");
    const optionElements = screen.getAllByRole("option");

    expect(listboxButton.getAttribute("aria-expanded")).toBe("true");
    expect(listboxElement.getAttribute("aria-activedescendant")).toBe(
      testOptions[0].id
    );
    expect(listboxElement.getAttribute("tabIndex")).toBe("0");
    expect(optionElements).toHaveLength(testOptions.length);
    optionElements.forEach((optionElement, index) => {
      expect(optionElement.getAttribute("aria-selected")).toBe(
        index === 0 ? "true" : "false"
      );
      expect(optionElement.getAttribute("id")).toBe(testOptions[index].id);
      expect(optionElement.textContent).toBe(testOptions[index].label);
    });
  });

  it("closes on click", () => {
    userEvent.click(listboxButton);
    expect(listboxButton.getAttribute("aria-expanded")).toBe("true");
    expect(screen.getByRole("listbox")).toBeDefined();

    userEvent.click(listboxButton);
    expect(listboxButton.getAttribute("aria-expanded")).toBe("false");
    expect(screen.queryByRole("listbox")).toBeNull();
  });

  it("selects the clicked option and closes", () => {
    userEvent.click(listboxButton);
    userEvent.click(screen.getByText(testOptions[1].label));

    expect(listboxButton.getAttribute("aria-expanded")).toBe("false");
    expect(screen.queryByRole("listbox")).toBeNull();
    expect(listboxButton.textContent).toBe(testOptions[1].label);
  });

  it("expands on ArrowDown and selects the first item", () => {
    userEvent.tab();

    expect(listboxButton).toHaveFocus();
    expect(screen.queryByRole("listbox")).toBeNull();

    userEvent.keyboard("{ArrowDown}");
    expect(screen.getByRole("listbox")).toHaveFocus();
    expect(screen.getAllByRole("option")[0].getAttribute("aria-selected")).toBe(
      "true"
    );
  });

  it("expands on ArrowUp and selects the last item", () => {
    userEvent.tab();

    expect(listboxButton).toHaveFocus();
    expect(screen.queryByRole("listbox")).toBeNull();

    userEvent.keyboard("{ArrowUp}");
    expect(screen.getByRole("listbox")).toHaveFocus();
    expect(
      screen
        .getAllByRole("option")
        [testOptions.length - 1].getAttribute("aria-selected")
    ).toBe("true");
  });

  it("wraps selection with ArrowDown", () => {
    userEvent.tab();

    expect(listboxButton).toHaveFocus();
    expect(screen.queryByRole("listbox")).toBeNull();

    userEvent.keyboard("{ArrowDown}");
    expect(screen.getAllByRole("option")[0].getAttribute("aria-selected")).toBe(
      "true"
    );

    userEvent.keyboard("{ArrowDown}");
    expect(screen.getAllByRole("option")[1].getAttribute("aria-selected")).toBe(
      "true"
    );

    userEvent.keyboard("{ArrowDown}");
    expect(screen.getAllByRole("option")[2].getAttribute("aria-selected")).toBe(
      "true"
    );

    userEvent.keyboard("{ArrowDown}");
    expect(screen.getAllByRole("option")[0].getAttribute("aria-selected")).toBe(
      "true"
    );
  });

  it("wraps focus with ArrowUp", () => {
    userEvent.tab();

    expect(listboxButton).toHaveFocus();
    expect(screen.queryByRole("listbox")).toBeNull();

    userEvent.keyboard("{ArrowUp}");
    expect(screen.getAllByRole("option")[2].getAttribute("aria-selected")).toBe(
      "true"
    );

    userEvent.keyboard("{ArrowUp}");
    expect(screen.getAllByRole("option")[1].getAttribute("aria-selected")).toBe(
      "true"
    );

    userEvent.keyboard("{ArrowUp}");
    expect(screen.getAllByRole("option")[0].getAttribute("aria-selected")).toBe(
      "true"
    );

    userEvent.keyboard("{ArrowUp}");
    expect(screen.getAllByRole("option")[2].getAttribute("aria-selected")).toBe(
      "true"
    );
  });

  it("closes with Escape", () => {
    userEvent.tab();
    expect(screen.queryByRole("listbox")).toBeNull();

    userEvent.keyboard("{Enter}");
    expect(screen.queryByRole("listbox")).toBeDefined();

    userEvent.keyboard("{Escape}");
    expect(screen.queryByRole("listbox")).toBeNull();
    expect(listboxButton).toHaveFocus();
  });

  it("closes with Enter", () => {
    userEvent.tab();
    expect(screen.queryByRole("listbox")).toBeNull();

    userEvent.keyboard("{ArrowDown}");
    expect(screen.queryByRole("listbox")).toBeDefined();

    userEvent.keyboard("{Enter}");
    expect(screen.queryByRole("listbox")).toBeNull();
    expect(listboxButton).toHaveFocus();
  });
});
