# Particles Animation (TypeScript)

Typed canvas particle animation snippet with bouncing particles and glow styling.

## Files

- `particles.ts`

## Behavior

- Initializes particle objects with random position, size, and velocity.
- Updates and redraws particles every animation frame.
- Bounces particles when crossing canvas bounds.

## Usage

1. Add `<canvas id="particleCanvas"></canvas>` to your HTML.
2. Set the canvas size before starting animation.
3. Compile TypeScript and load the output script.

## Notes

- The Y collision check currently uses `canvas.width`; use `canvas.height` for accurate vertical bounds.
