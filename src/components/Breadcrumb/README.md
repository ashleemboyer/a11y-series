# Breadcrumb

This component displays a list of links to show users where they are within an application.

## Properties

| Name  | Type   | Required | Default Value | Description                                                                   |
| ----- | ------ | -------- | ------------- | ----------------------------------------------------------------------------- |
| links | Arraky | Yes      | None          | These are the links to show in the breadcrumb. Each has a `label` and `href`. |

## Accessibility

### Keyboard Interaction

Not applicable.

### WAI-ARIA Roles, States, and Properties

- The links are contained in an ordered list within a `<nav>` element
- The `<nav>` element has the `aria-label` attribute set to `"Breadcrumb"`
- The last link in the list represents the current page, and must have `aria-current` set to `"page"`

### Additional Features

- The separators between each link are added via CSS so they are not presented by a screen reader

## Usage

```jsx
<Breadcrumb
  links={[
    { label: "Test", href: "" },
    { label: "Another link", href: "" },
    { label: "One more link", href: "" }
  ]}
/>
```
