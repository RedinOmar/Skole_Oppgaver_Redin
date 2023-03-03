<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'

  let slectedIndex = 0;

  const changeTab = (index: number) => {
    slectedIndex = index;
  }
</script>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer"> 
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer"> 
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>

  <div class="vertical-tab-container">
    <ul class="vertical-tab">
        <li class:selected={slectedIndex == 0}
          on:click={() => changeTab(0)}>First Tab</li>

        <li class:selected={slectedIndex == 1} 
          on:click={() => changeTab(1)}>Second Tab</li>

        <li class:selected={slectedIndex == 2}
          on:click={() => changeTab(2)}>Third Tab</li>
    </ul>

    <div class="vertical-tab-content">
      {#if slectedIndex == 0}
        <h2>First Tab Heading</h2>
        <p>First text</p>
      {:else if slectedIndex == 1}
        <h2>Second Tab Heading</h2>
        <p>Second text</p>
      {:else}
        <h2>Third Heading</h2>
        <p>Third text</p>
      {/if}  
    </div>
  </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }

  .vertical-tab-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      border: 1px solid gray;
      border-radius: 1rem;
  }

  .vertical-tab {
      margin: 0px;
      padding: 3rem;
      list-style: none;
      border-right: 1rem;
  }

  .vertical-tab li {
      margin: 2rem 0;
  }

  .vertical-tab-content {
      flex: 1;
  }

  .selected {
    color: blue;
  }
</style>