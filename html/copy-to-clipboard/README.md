# Copy to Clipboard (HTML)

Standalone HTML + JavaScript snippet for copying text with visual feedback.

## File

- `index.html`

## Behavior

- Renders a read-only input containing text to copy.
- Copies text when the `Copy` button is clicked.
- Uses `navigator.clipboard.writeText` in secure contexts (`https` or `localhost`).
- Falls back to `document.execCommand("copy")` for local `file:///` previews and older browsers.
- Temporarily changes button text to `Copied!` and button color from blue to green.
- Shows a success message for 2 seconds, then restores the default state.

## Usage

1. Open `index.html` in a browser.
2. Click the `Copy` button.
3. Confirm the `Copied!` state and success message appear.

## Integration

1. Copy the widget markup from the container `<div class="bg-white ...">` in `index.html`.
2. Copy the script block at the bottom of `index.html`.
3. Include Tailwind CSS if your target page does not already have it:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

## Notes

- This snippet is dependency-light and works without a build step.
- Clipboard support varies by browser and security context.
- If copy fails, the script logs the error and shows an alert.
