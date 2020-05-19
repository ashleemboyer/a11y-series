# SpinButton

A SpinButton is an input button with a set range of values. It has two buttons for incrementing and decrementing it's value. This component is based off of [WAI-ARIA's SpinButton widget](https://www.w3.org/TR/wai-aria-practices-1.1/#spinbutton).

## Properties

| Name        | Type   | Required | Default Value | Description                                                               |
| ----------- | ------ | -------- | ------------- | ------------------------------------------------------------------------- |
| ariaLabel   | String | Yes      | None          | The accessible name the component.                                        |
| values      | Array  | Yes      | None          | The values to show in the SpinButton. Each has a `value` and `valueText`. |
| intialIndex | Number | No       | 0             | The index of the value to show as the current value.                      |

## Accessibility

### Keyboard Interaction

| Key        | Function                     |
| ---------- | ---------------------------- |
| Down Arrow | Decrements the current index |
| Up Arrow   | Increments the current index |

### WAI-ARIA Roles, States, and Properties

- The `<button>` elements
  - `tabIndex="-1"`
  - `aria-label="NAME_STRING"`
- The previous/next value `<div>` elements
  - `aria-hidden="true"`
- The SpinButton `<div>` element
  - `role="spinbutton"`
  - `tabIndex="0"`
  - `aria-valuenow="CURRENT_INDEX"`
  - `aria-valuetext="CURRENT_VALUE_TEXT"`
  - `aria-valuemin={0}`
  - `aria-valuemax={VALUES_LENGTH - 1}`
  - `aria-label="GIVEN_ARIA_LABEL"`

## Usage

```jsx
<SpinButton
  ariaLabel="Some numbers"
  values={[
    { value: 1, valueText: "first" },
    { value: 2, valueText: "second" },
    { value: 3, valueText: "third" }
  ]}
  initialIndex={0}
/>
```
