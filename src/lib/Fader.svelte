<script lang="ts">
  export let value = 0;
  export let min = 0;
  export let max = 100;
  export let label = '';
  export let vertical = true;

  let dragging = false;
  let sliderElement: HTMLDivElement;

  function handleMouseDown(event: MouseEvent) {
    dragging = true;
    updateValue(event);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  }

  function handleMouseMove(event: MouseEvent) {
    if (dragging) {
      updateValue(event);
    }
  }

  function handleMouseUp() {
    dragging = false;
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  }

  function updateValue(event: MouseEvent) {
    const rect = sliderElement.getBoundingClientRect();
    const percentage = vertical
      ? 1 - (event.clientY - rect.top) / rect.height
      : (event.clientX - rect.left) / rect.width;
    value = Math.min(max, Math.max(min, min + (max - min) * percentage));
  }
</script>

<div class="fader-container" class:vertical>
  <div 
    class="fader"
    class:vertical
    bind:this={sliderElement}
    on:mousedown={handleMouseDown}
  >
    <div 
      class="fader-track"
      style={vertical 
        ? `height: ${((value - min) / (max - min)) * 100}%`
        : `width: ${((value - min) / (max - min)) * 100}%`}
    />
    <div 
      class="fader-handle"
      style={vertical
        ? `bottom: ${((value - min) / (max - min)) * 100}%`
        : `left: ${((value - min) / (max - min)) * 100}%`}
    />
  </div>
  {#if label}
    <div class="label">{label}</div>
  {/if}
  <div class="value">{value.toFixed(1)}</div>
</div>

<style>
  .fader-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
  }

  .fader-container.vertical {
    height: 200px;
  }

  .fader {
    position: relative;
    background: #2a2a2a;
    border-radius: 2px;
    cursor: pointer;
  }

  .fader.vertical {
    width: 8px;
    height: 100%;
  }

  .fader:not(.vertical) {
    width: 200px;
    height: 8px;
  }

  .fader-track {
    position: absolute;
    background: var(--fader-color, #4CAF50);
    border-radius: 2px;
  }

  .vertical .fader-track {
    width: 100%;
    bottom: 0;
  }

  .fader:not(.vertical) .fader-track {
    height: 100%;
    left: 0;
  }

  .fader-handle {
    position: absolute;
    width: 16px;
    height: 16px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }

  .vertical .fader-handle {
    left: 50%;
    transform: translate(-50%, 50%);
  }

  .fader:not(.vertical) .fader-handle {
    top: 50%;
    transform: translate(-50%, -50%);
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