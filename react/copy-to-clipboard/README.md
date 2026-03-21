# Copy to Clipboard (React)

React component for copying text to the clipboard with temporary success feedback.

## File

- `CopyToClipboard.jsx`

## Behavior

- Shows a read-only input with the text to copy.
- Copies text when the button is clicked.
- Uses `navigator.clipboard.writeText` in secure contexts (`https` or `localhost`).
- Falls back to `document.execCommand("copy")` for non-secure contexts or older environments.
- Updates the button state from `Copy` to `Copied!` for 2 seconds, then resets.
- Displays a success message while in the copied state.

## Props

- `textToCopy` (string, optional): text shown in the input and copied on click.
- Default value: `"Allwell Azubike"`.

## Usage

1. Place `CopyToClipboard.jsx` in your React components folder.
2. Import and render it in your app.

```jsx
import React from 'react';
import CopyToClipboard from './components/CopyToClipboard';

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <CopyToClipboard textToCopy="Allwell Azubike" />
    </div>
  );
}
```

## Styling

- The component uses Tailwind CSS utility classes.
- Ensure Tailwind is configured in your React project for the UI to render as expected.

## Notes

- On fallback copy, the input is selected temporarily and selection is cleared after copying.
- If clipboard access fails, the component logs the error and shows an alert.
