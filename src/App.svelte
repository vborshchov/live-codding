<script>
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
