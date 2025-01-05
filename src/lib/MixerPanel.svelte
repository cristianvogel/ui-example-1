<script lang="ts">
  import Fader from './Fader.svelte';
  import Dial from './Dial.svelte';

  const faderColors = ['#4CAF50', '#2196F3', '#9C27B0', '#FF9800'];
  const dialColors = ['#E91E63', '#00BCD4', '#FFEB3B', '#FF5722'];
</script>

<div class="mixer-panel">
  <div class="faders-section">
    {#each faderColors as color, i}
      <Fader 
        value={50} 
        label={`Channel ${i + 1}`} 
        vertical={true}
        --fader-color={color}
      />
    {/each}
  </div>
  <div class="dials-section">
    {#each dialColors as color, i}
      <Dial 
        value={50} 
        size={80} 
        label={`Effect ${i + 1}`}
        --dial-color={color}
      />
    {/each}
  </div>
</div>

<style>
  .mixer-panel {
    width: 800px;
    height: 350px;
    background: #1a1a1a;
    border-radius: 12px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .faders-section {
    display: flex;
    justify-content: space-around;
    height: 200px;
  }

  .dials-section {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>