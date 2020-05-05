# Listbox

A Listbox provides similar functionality to `<select>` elements. This component is based off of [WAI-ARIA's Listbox widget](https://www.w3.org/TR/wai-aria-practices-1.1/#Listbox), and only supports single-selection.

## Properties

| Name    | Type   | Required | Default Value | Description                                         |
| ------- | ------ | -------- | ------------- | --------------------------------------------------- |
| label   | String | Yes      | None          | The text for the associated <label> element.        |
| options | Array  | Yes      | None          | The options to render. Each has a `label` and `id`. |

## Accessibility

### Keyboard Interaction

| Key        | Function                                                                                                   |
| ---------- | ---------------------------------------------------------------------------------------------------------- |
| Enter      | If the button is focused, the listbox expands and focus is on the currently selected option.               |
|            | If the listbox is expanded, the listbox collapses and the button's label is the currently selected option. |
| Escape     | If the listbox is expanded, the listbox is collapsed and focus goes to the button.                         |
| Down Arrow | If the listbox is collapsed, the listbox expands.                                                          |
|            | If the listbox is expanded, the next option is selected.                                                   |
| Up Arrow   | If the listbox is collapsed, the listbox expands.                                                          |
|            | If the listbox is expanded, the previous option is selected.                                               |

### WAI-ARIA Roles, States, and Properties

- The `<button>` element
  - `aria-labelledby="ID_REF"`
  - `aria-haspopup="listbox"`
  - `aria-expanded="true"|"false"`
- The `<ul>` element
  - `role="listbox"`
  - `tabIndex="0"|"-1"`
  - `aria-activedescendant="ID_REF"`
- The `<li>` elements
  - `role="option"`
  - `aria-selected="true"|"false|`

### Usage

```jsx
<Listbox
  label="Favorite animal"
  options={[
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
  ]} />
);
```
