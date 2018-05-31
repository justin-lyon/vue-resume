<template>
<v-layout row justify-center>
	<v-flex>
		<div class="player-container">
			<iframe class="player py-2"
				:src="src"
				frameborder="0"
				allow="autoplay; encrypted-media"
				allowfullscreen ></iframe>
		</div>
	</v-flex>
</v-layout>
</template>

<script>
export default {
	name: "Video",
	props: [
		"title",
		"src"
	]
}
</script>

<style scoped>
div.player-container {
	position: relative;
	overflow: hidden;
	padding-top: 56.25%;
}

iframe.player {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border: 0;
}
</style>
