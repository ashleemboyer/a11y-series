# Link

This component works similar to the `<a>` HTML element. It can open URLs in the current window or in another tab.

## Properties

| Name      | Type   | Required | Default Value | Description                                                          |
| --------- | ------ | -------- | ------------- | -------------------------------------------------------------------- |
| text      | String | No       | Undefined     | The text to show inside of the `<span>`.                             |
| href      | String | Yes      | None          | The URL to navigate to.                                              |
| ariaLabel | String | No       | Undefined     | The accessible label for screen readers. Ignored if `text` is given. |
| target    | String | No       | "_self"       | Will open the URL in another tab if "_blank"                         |

## Accessibility

### Keyboard Interaction

| Key   | Function            |
| ----- | ------------------- |
| Enter | Activates the link. |

### WAI-ARIA Roles, States, and Properties

- The `<span>` element
  - `role="link"`
  - `tabIndex="0"`
  - `aria-label`

## Usage

```jsx
<Link href="https://ashleemboyer.com" text="My Website" target="_blank" />
```
