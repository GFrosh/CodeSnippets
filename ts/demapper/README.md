# Expire Demapper (TypeScript)

Utility class that expires and clears a `Map` after a configured duration.

## Files

- `demapper.ts`

## Behavior

- Stores a timeout duration and target `Map`.
- `watch()` schedules a drain operation.
- `drain()` clears timeout state, resets duration, and empties the map.

## Usage

```ts
import Expire from './demapper';

const bucket = new Map<string, string>();
const expirer = new Expire(5000, bucket);
expirer.watch();
```

## Notes

- `drain()` is safe to call manually before timeout completion.
