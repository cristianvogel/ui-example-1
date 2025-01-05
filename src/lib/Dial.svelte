<script lang="ts">
  export let value = 0;
  export let min = 0;
  export let max = 100;
  export let label = '';
  export let size = 80;

  let dragging = false;
  let startY = 0;
  let startValue = 0;

  $: angle = ((value - min) / (max - min)) * 270 + 45;
  $: radius = size / 2;

  function handleMouseDown(event: MouseEvent) {
    dragging = true;
    startY = event.clientY;
    startValue = value;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  }

  function handleMouseMove(event: MouseEvent) {
    if (dragging) {
      const deltaY = startY - event.clientY;
      const newValue = startValue + (deltaY * (max - min)) / 200;
      value = Math.min(max, Math.max(min, newValue));
    }
  }

  function handleMouseUp() {
    dragging = false;
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  }
</script>

<div class="dial-container" style="--size: {size}px">
  <div 
    class="dial"
    on:mousedown={handleMouseDown}
  >
    <div class="dial-background" />
    <div 
      class="dial-indicator"
      style="transform: rotate({angle}deg)"
    />
  </div>
  {#if label}
    <div class="label">{label}</div>
  {/if}
  <div class="value">{value.toFixed(1)}</div>
</div>

<style>
  .dial-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    width: var(--size);
  }

  .dial {
    position: relative;
    width: var(--size);
    height: var(--size);
    cursor: pointer;
  }

  .dial-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #2a2a2a;
    border-radius: 50%;
    border: 2px solid var(--dial-color, #fff);
  }

  .dial-indicator {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    height: 40%;
    background: var(--dial-color, #fff);
    transform-origin: top center;
    border-radius: 1px;
    margin-left: -2px;
  }

  .label {
    font-size: 0.875rem;
    font-family: var(--font-primary);
    color: #fff;
  }

  .value {
    font-size: 0.875rem;
    font-family: var(--font-mono);
    color: #fff;
  }
</style>