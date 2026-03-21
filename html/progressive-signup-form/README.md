# Progressive Signup Form (HTML)

Standalone HTML + JavaScript form that progressively reveals each next field.

## File

- `index.html`

## Behavior

- Only the first field (Username) is visible on load.
- When a field contains non-whitespace input, the next field is revealed.
- After the last field (Password) receives input, the submit button is revealed.
- Reveal transitions use opacity, height, and vertical translation for a smooth appearance.

## Implementation

- Each input lives inside a `.field` container.
- Hidden state is controlled by CSS (`opacity: 0`, `max-height: 0`, `overflow: hidden`).
- Visible state is activated by adding the `.active` class.
- JavaScript listens to each input's `input` event and conditionally activates the next element.

## Usage

1. Open `index.html` in a browser.
2. Type into **Username** to reveal **Email**.
3. Type into **Email** to reveal **Password**.
4. Type into **Password** to reveal the **Sign Up** button.

## Notes

- This is a front-end interaction demo; no form submission backend is included.
- Field reveal is one-way in the current implementation (elements stay visible once revealed).
- You can make the flow stricter by adding validation rules (for example, valid email format) before revealing the next field.
