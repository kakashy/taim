<svelte:head>
	<title>TAIM - Generate school timetables with ease</title>
	<meta
		name="description"
		content="Taim is a fast utility to help school management in Kenya
    generate sleek timetables with a single click."
	/>
</svelte:head>

<section>
	<h1 class="brand">TAIM</h1>
	<sub> Generate school timetables with ease. </sub>
	<div class="onb">
		<div class="onb-w">
			<h1>Jaribu!</h1>
			<p>
				Easy peasy! All you need to do is to tweak a few configurations and we will handle the rest.
			</p>
			<p>Feeling ready?</p>
			<a href="/generator">
				<button class="try"> Try it out </button>
			</a>
		</div>
	</div>
</section>

<style>
	section {
		padding: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}
	.brand {
		margin: 0;
		font-size: 7rem;
		color: var(--accent);
		background: linear-gradient(to bottom right, #e5ff00, #00ffaa);
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
	}
	.try {
		padding: 10px 30px;
	}
	@media screen and (min-width: 550px) {
		section {
			padding: 30px;
		}
	}
</style>
