# TooltipWidget

As described in the [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/#tooltip):

> A tooltip is a popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it. It typically appears after a small delay and disappears when Escape is pressed or on mouse out.

## Properties

| Name | Type   | Required | Default Value | Description                      |
| ---- | ------ | -------- | ------------- | -------------------------------- |
| text | String | Yes      | None          | The text to show in the tooltip. |

## Accessibility

### Keyboard Interaction

- When the trigger element gains keyboard focus, the tooltip is displayed.

- When the trigger element is focused and the `Escape` key is pressed, the tooltip is hidden and the trigger element retains focus.

### Mouse Interaction

- When the mouse enters the trigger element, the tooltip is displayed.
  - The tooltip does not go away if the mouse enters the tooltip element from the trigger element.

- When the mouse leaves the trigger element or the tooltip element, the tooltip is hidden. 

### WAI-ARIA Roles, States, and Properties

- The `<span>` element
  - `tabIndex="0"`
  - `aria-labelledby="tooltip"`
- The `<p>` element
  - `id="tooltip"`
  - `role="tooltip"`
  - `hidden`

## Usage

```jsx
<TooltipWidget text="This is the tooltip text.">
```
