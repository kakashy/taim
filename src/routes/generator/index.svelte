<script lang="ts">
	import { scale, fly } from 'svelte/transition';
	import '$lib/form.css';
	import '$lib/table.css';
	import { browser } from '$app/env';
	import { onMount } from 'svelte';
	import { mwenyeji } from './db';
	import { gen } from '$lib/timetable';
	let gradeValue: string;
	let streamValue: string;
	let gradeItems: string[] = [];
	let streamItems: string[] = [];
	let stage: number = 1;
	let generated;
	type StoredDoc = {
		items: string[];
		_id: string;
		_rev: string;
	};

	function addGrade(grade: string): void {
		if (grade) {
			gradeItems = [...gradeItems, grade];
			gradeValue = '';
		}
	}
	function addStream(stream: string): void {
		if (stream) {
			streamItems = [...streamItems, stream];
			streamValue = '';
		}
	}

	async function handleStage(
		nextStage: number,
		currentLoad: string[],
		currentStage: string
	): Promise<number | void> {
		if (currentLoad.length > 0) {
			let doc = {
				_id: currentStage,
				items: currentLoad
			};
			const db = new PouchDB('taim');
			const res = await db.put(doc).catch((err)=>{
				if (err.status === 409){
				return (stage = nextStage);
				}
			})
			if (res.ok) {
				return (stage = nextStage);
			}
		}
	}
	async function handleGenerate() {
		const db = new PouchDB('taim');
		const vGrades = await db.get('Grade');
		const vStreams = await db.get('Stream');
		generated = gen(vGrades.items, vStreams.items);
	}
	onMount(async () => {
		const db = new PouchDB('taim');
		// const info = await mwenyeji(db);
		// if (info.doc_count === 2) {
		// 	stage = 3;
		// }
		const pGrade: StoredDoc = await db.get('Grade');
		const pStream: StoredDoc = await db.get('Stream');
		if (pGrade.items) {
			gradeItems = pGrade.items;
		}
		if (pStream.items) {
			streamItems = pStream.items;
		}
	});
</script>

<svelte:head>
	<title>Generator - TAIM</title>
	<meta name="description" content="Generate a full school timetable in less than 5 minutes." />
</svelte:head>

<section>
	<h1>Generator</h1>
	<hr />
	<p style="text-align: center;">
		This version equally distributes learning areas as provisioned by the CBC with the grades and
		streams you provide.
	</p>
	<hr />
	{#key stage}
		{#if stage === 1}
			<form
				in:fly={{ x: 10, duration: 300 }}
				out:fly={{ x: -10, duration: 300 }}
				on:submit|preventDefault={() => handleStage(2, gradeItems, 'Grade')}
			>
				<h2>List the grades available</h2>
				{#if gradeItems}
					<div class="list-container">
						{#each gradeItems as item}
							<p transition:scale={{ duration: 300 }} class="list">
								{item}
							</p>
						{/each}
					</div>
				{/if}
				<form
					on:submit|preventDefault={() => {
						addGrade(gradeValue);
					}}
					class="addem"
				>
					<input
						type="text"
						placeholder="Enter the grade name e.g Grade 1"
						bind:value={gradeValue}
						on:click={(e) => {
							e.currentTarget.value = '';
						}}
					/>
					<button type="submit">Add</button>
				</form>
				<button type="submit">Next &rightarrow;</button>
			</form>
		{:else if stage === 2}
			<form
				in:fly={{ x: 10, duration: 300, delay: 300 }}
				out:fly={{ x: -10, duration: 300 }}
				on:submit|preventDefault={() => handleStage(3, streamItems, 'Stream')}
			>
				<h2>List available streams</h2>
				{#if gradeItems}
					<div class="list-container">
						{#each streamItems as item}
							<p transition:scale={{ duration: 300 }} class="list">
								{item}
							</p>
						{/each}
					</div>
				{/if}
				<form
					on:submit|preventDefault={() => {
						addStream(streamValue);
					}}
					class="addem"
				>
					<input
						type="text"
						placeholder="Type the stream name e.g East"
						bind:value={streamValue}
						on:click={(e) => {
							e.currentTarget.value = '';
						}}
					/>
					<button type="submit">Add</button>
				</form>
				<button
					on:click={() => {
						handleStage(1, ['item'], '');
					}}
				>
					&leftarrow; Go back to grades
				</button>
				<button type="submit">Generate &rightarrow;</button>
			</form>
		{:else if stage === 3}
			<form
				in:fly={{ x: 10, duration: 300, delay: 300 }}
				out:fly={{ x: -10, duration: 300 }}
				on:submit|preventDefault={handleGenerate}
			>
				<h2>Generate</h2>
				<hr />
				Ready, Set
				<button type="submit"> Generate </button>
			</form>
		{:else}
			<h1>Stage</h1>
		{/if}
	{/key}
	<hr />
	{#if generated}
		<table>
			<tr>
				<th> Period </th>
				<th> Class & Learning Area</th>
			</tr>
			{#each generated as generated}
				<tr>
					<td>
						{generated.Slot}
					</td>
					<td>
						{#each generated.Grade as grade}
							<table class="tab2">
								{#each grade as g}
									<tr>
										<td>
											{`${g.Grade} ${g.Stream}`}
										</td>
										<td>
											{g.Area}
										</td>
									</tr>
								{/each}
							</table>
						{/each}
					</td>
				</tr>
			{/each}
		</table>
	{:else}
		<blockquote>No data yet</blockquote>
	{/if}
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
	.list-container {
		width: 100%;
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	}
	.list {
		margin: 0;
		width: 90%;
		padding: 10px;
		border-radius: 2px;
		background: #8296ee;
		box-shadow: var(--shadow);
	}
	.addem {
		width: 90%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
