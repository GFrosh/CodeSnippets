# Particles Animation (JavaScript)

Canvas particle animation snippet with bouncing particles and glow styling.

## Files

- `particles.js`

## Behavior

- Creates particles with random positions, size, and velocity.
- Updates particle position every frame.
- Reverses direction on canvas boundary collision.
- Draws particles with a blue glow effect.

## Usage

1. Add a canvas element to your HTML:

```html
<canvas id="myCanvas"></canvas>
```

2. Define `canvas` and `ctx` before loading this snippet, then include `particles.js`.
3. Set canvas dimensions before animation starts.
4. Replace `YOUR_DESIRED_PARTICLE_COUNT` with a number.

## Notes

- This snippet expects global `canvas` and `ctx` variables.
- The Y boundary check currently uses `canvas.width`; for rectangular canvases it should use `canvas.height`.
