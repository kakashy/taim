<script context="module">
	/** @type import('@sveltejs/kit').ErrorLoad*/
	export async function load({ error, status }) {
		return {
			props: {
				error: error,
				status: status
			}
		};
	}
</script>

<script>
	export let error, status;
</script>

<svelte:head>
	<title>
		{status} / Taim
	</title>
</svelte:head>

<section>
	<div>
		<h1>
			Error {status}
		</h1>
		<hr />
		<sub>
			{error.message}
		</sub>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		font-size: 1.2rem;
	}
	div {
		width: 50%;
		background: #c0ff0020;
		padding: 20px;
		border-radius: 10px;
		box-shadow: var(--shadow);
		text-align: center;
	}
</style>
