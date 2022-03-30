<script>
	import full from '/static/media/FullLogo.png'
</script>
<footer>
	<div>
		<ul>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/generator">Generator</a>
			</li>
			<li>
				<a href="/pricing">Pricing</a>
			</li>
			<li>
				<a href="/privacy-policy">Privacy policy</a>
			</li>
		</ul>
	</div>
	<div class="craft">
		Carefully crafted by
		<br>
		<img src={full} alt="Werux" height="70px">
	</div>
</footer>

<style>
	footer {
		padding: 20px;
		min-height: 100px;
		border-top: 1px solid rgba(128, 128, 128, 0.13);
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	}
	ul {
		margin: 0;
		list-style-type: circle;
	}
	li {
		padding: 5px 0;
	}
	.craft {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}
</style>
