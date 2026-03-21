# Scheduler (TypeScript)

Task scheduler class for repeated interval execution and one-time delayed execution.

## Files

- `scheduler.ts`

## Behavior

- `schedule(task)` registers tasks and starts interval execution.
- `scheduleOnce(task)` runs a single delayed task.
- `stop()` clears interval execution.

## Usage

```ts
import Scheduler from './scheduler';

const scheduler = new Scheduler('MyScheduler', 3000);
scheduler.schedule(() => console.log('Task executed'));
```

## Notes

- Multiple scheduled tasks run on the same interval.
- The source includes a direct usage example at the bottom.
