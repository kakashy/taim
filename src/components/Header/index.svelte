<script>
	import { page } from '$app/stores';
	function openNav() {
		document.getElementById('side-nav').style.width = '50%';
	}

	function closeNav() {
		document.getElementById('side-nav').style.width = '0';
	}
</script>

<header>
	<span on:click={openNav}>&#9776;</span>
</header>

<div id="side-nav" class="sidenav">
	<p class="closebtn" on:click={closeNav}>&times;</p>
	<a href="/" class:active={$page.url.pathname === '/'}>Home</a>
	<a href="/generator" class:active={$page.url.pathname === '/generator'}>Generator</a>
	<a href="/pricing" class:active={$page.url.pathname === '/pricing'}>Pricing</a>
	<a href="/privacy-policy" class:active={$page.url.pathname === '/privacy-policy'}
		>Privacy Policy</a
	>
</div>

<style>
	header {
		margin: 0;
		height: 70px;
		width: 100%;
		background: #c0ff0010;
		position: sticky;
		top: 0;
		left: 0;
		box-shadow: var(--shadow);
		backdrop-filter: blur(5px);
		margin-bottom: 20px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: end;
	}
	span {
		cursor: pointer;
		color: var(--accent);
		padding: 20px;
		font-size: 2rem;
	}
	span:hover,
	span:focus-within {
		color: lime;
		background: #0d0f1240;
	}
	.sidenav {
		height: 100%;
		width: 0;
		max-width: 300px;
		position: fixed;
		z-index: 1;
		top: 0px;
		left: 0;
		background-color: #0d0d0e;
		overflow-x: hidden;
		transition: 0.3s;
		padding-top: 50px;
		box-shadow: var(--shadow);
	}

	.sidenav a {
		padding: 8px 8px 8px 32px;
		text-decoration: none;
		font-size: 1.2rem;
		color: #818181;
		display: block;
		transition: 0.3s;
		margin: 5px 0;
	}
	.sidenav a:hover {
		color: black;
	}
	.sidenav a.active {
		background: var(--accent);
		background: linear-gradient(to bottom right, var(--accent), #00ff40);
		color: black;
	}
	.sidenav .closebtn {
		cursor: pointer;
		position: absolute;
		top: 0;
		right: 25px;
		font-size: 36px;
		margin: 0;
	}
	.closebtn {
		color: white;
	}
	.closebtn:hover {
		color: var(--accent);
	}

	@media screen and (max-height: 450px) {
		.sidenav {
			padding-top: 15px;
		}
		.sidenav a {
			font-size: 18px;
		}
	}
</style>
