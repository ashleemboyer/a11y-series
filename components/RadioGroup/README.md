# RadioGroup

A RadioGroup holds a set of options for a user to choose exactly one from.

## Properties

| Name    | Type   | Required | Default Value | Description                                          |
| ------- | ------ | -------- | ------------- | ---------------------------------------------------- |
| label   | String | Yes      | None          | The accessible label for the component.              |
| options | Array  | Yes      | None          | The options to show. Each has a `label` and `value`. |

## Accessibility

### Keyboard Interaction

| Key         | Function                                |
| ----------- | --------------------------------------- |
| Down Arrow  | Focuses and selects the next option     |
| Right Arrow | Focuses and selects the next option     |
| Up Arrow    | Focuses and selects the previous option |
| Left Arrow  | Focuses and selects the previous option |

### WAI-ARIA Roles, States, and Properties

- The containing `<div>` element
  - `role="radiogroup"`
  - `aria-labelledby="[IDREF]"`
- The `div` for each option
  - `role="radio"`
  - `tabIndex`
    - `"-1"` if not selected
    - `"0"` if selected
  - `aria-checked`
    - `"false"` if not selected
    - `"true"` if selected

# Usage

```jsx
<RadioGroup
  label="Favorite Golden Girl"
  options={[
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
  ]}
/>
```
