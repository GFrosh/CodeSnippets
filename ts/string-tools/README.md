# String Tools (TypeScript)

Collection of text utility helpers for normalization, casing, counting, and tag conversion.

## Files

- `stringTools.ts`

## Behavior

- Includes helpers like `slugify`, `titleCase`, `truncate`, `stripHtml`, and `wordCount`.
- Provides convenience methods for tags and category formatting.
- Supports simple pluralization logic.

## Usage

```ts
import StringTools from './stringTools';

const slug = StringTools.slugify('Hello World Example');
const tags = StringTools.tagify('news,tech,ai');
```

## Notes

- `detagify` is typed as `string` but has an array check; adjust types if array input is intended.
