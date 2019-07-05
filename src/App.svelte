<script>
	import Motion from "./examples/Motion.svelte";
	import Interpolate from "./examples/Interpolate.svelte";
	import Transition from "./examples/Transition.svelte";
	import Draw from "./examples/Draw.svelte";
	import Animations from "./examples/Animations.svelte";

	export let name;
</script>

<style type="text/scss">
	@import './styles/variables';

	h1 {
		color: $color-main;

		.name {
			font-style: italic;
		}
	}
</style>

<h1>Hello <span class="name">{name}</span>!</h1>
<Motion/>
<hr>
<Interpolate/>
<hr>
<Transition/>
<hr>
<Draw/>
<hr>
<Animations/>