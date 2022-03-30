<script context="module">
	export const load = async ({ url }) => ({ props: { url } });
</script>

<script>
	import '../app.css';
	import Header from '$components/Header/index.svelte';
	import Footer from '$components/Footer/index.svelte';
	import PageTransition from '../components/PageTransition.svelte';
	export let url;
</script>

<Header />
<main>
	<PageTransition {url}>
		<slot />
	</PageTransition>
</main>
<Footer />

<style>
	main {
		min-height: 60vh;
		margin-bottom: 30px;
	}
</style>
