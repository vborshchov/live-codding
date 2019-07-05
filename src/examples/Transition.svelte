<script>
    import { fade } from 'svelte/transition';
    
	let condition = true;
	
	const handleClick = () => {
		condition = !condition
	}
</script>

<button on:click={handleClick}>Show/Hide</button>
{#if condition}
	<div transition:fade="{{delay: 250, duration: 300}}">
		fades in and out
	</div>
{/if}