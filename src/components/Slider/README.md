# Slider

From the [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/#slider):

> A slider is an input where the user selects a value from within a given range. Sliders typically have a slider thumb that can be moved along a bar or track to change the value of the slider.

## Properties

| Name             | Type     | Required | Default Value | Description                                               |
| ---------------- | -------- | -------- | ------------- | --------------------------------------------------------- |
| minValue         | Number   | Yes      | None          | The minimum allowed value.                                |
| maxValue         | Number   | Yes      | None          | The maximum allowed value.                                |
| stepSize         | Number   | Yes      | None          | The amount to increment/decrement.                        |
| initialValue     | Number   | No       | Undefined     | Value of the slider when rendered.                        |
| onChangeCallback | Function | No       | () => {}      | Invoked when the value changes.                           |
| label            | String   | No       | Undefined     | Label text to render above the slider.                    |
| ariaLabel        | String   | No       | Undefined     | Accessible label to be presented when one is not visible. |

## Accessibility

### Keyboard Interaction

| Key         | Function                                     |
| ----------- | -------------------------------------------- |
| Up Arrow    | Increments the current value by stepSize     |
| Right Arrow | Increments the current value by stepSize     |
| Down Arrow  | Decrements the current value by stepSize     |
| Left Arrow  | Decrements the current value by stepSize     |
| Page Up     | Increments the current value by stepSize * 2 |
| Page Down   | Decrements the current value by stepSize * 2 |
| Home        | Sets the current value to minValue           |
| End         | Sets the current value to maxValue           |

### WAI-ARIA Roles, States, and Properties

- The `div` element representing the thumb
  - `role="slider"`
  - `tabIndex="0"`
  - `aria-valueMin="NUMBER"`
  - `aria-valueNow="NUMBER"`
  - `aria-valueMax="NUMBER"`
  - `aria-labelledby="IDREF"`

## Usage

```jsx
<Slider
  minValue={0}
  maxValue={100}
  stepSize={10}
  initialValue={13}
  onChangeCallback={(newValue) => {
    console.log('New value is', newValue)
  }}
  label="Rate 2020 on a scale of 100"
/>
```
