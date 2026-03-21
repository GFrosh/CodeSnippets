# Timer (TypeScript)

Pausable timer class with start, pause, reset, and completion state checks.

## Files

- `timer.ts`

## Behavior

- Starts a timeout for the remaining duration.
- Supports pause/resume behavior through elapsed-time tracking.
- Exposes `isFinished()` for completion checks.
- Runs an internal watcher that logs when time is up.

## Usage

```ts
import Timer from './timer';

const timer = new Timer(5000);
timer.start();
```

## Notes

- `checker()` starts an interval on every `start()` call.
- Consider moving logging to a callback for easier reuse.
