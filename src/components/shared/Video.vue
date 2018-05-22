<template>
	<v-expansion-panel popout>
		<v-expansion-panel-content>
			<div slot="header"><i>{{ title }}</i></div>

			<v-layout row justify-center>
				<v-flex>
					<iframe class="player"
						:width="width"
						:height="height"
						:src="src"
						frameborder="0"
						allow="autoplay; encrypted-media"
						allowfullscreen ></iframe>
				</v-flex>
			</v-layout>

		</v-expansion-panel-content>
	</v-expansion-panel>
</template>

<script>
export default {
	name: "Video",
	props: [
		"title",
		"width",
		"height",
		"src"
	]
}
</script>

<style scoped>
iframe.player {
	margin: auto;
	display: block;
}
</style>
