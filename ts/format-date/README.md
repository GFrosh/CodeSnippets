# Format Date (TypeScript)

Date formatting helper for converting ISO strings into a localized display string.

## Files

- `formatDate.ts`

## Behavior

- Returns a placeholder when input is empty.
- Attempts to parse an ISO string into a `Date`.
- Returns a formatted `en-GB` date-time string.

## Usage

```ts
import { formatDate } from './formatDate';

const label = formatDate('2026-03-21T10:30:00Z');
```

## Notes

- Current validation in the snippet is weak and may need improvement.
- Consider checking `isNaN(d.getTime())` for invalid dates.
