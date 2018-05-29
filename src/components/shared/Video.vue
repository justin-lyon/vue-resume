<template>
	<v-expansion-panel popout>
		<v-expansion-panel-content>
			<div slot="header"><i>{{ title }}</i></div>

			<v-layout row justify-center :height="height" :width="width">
				<v-flex>
					<iframe class="player py-2"
						:height="height"
						:width="width"
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
	data() {
		return {
			height,
			width
		}
	},
	props: [
		"title",
		"src"
	]
}
</script>

<style scoped>
iframe.player {
	margin: auto;
	display: block;
}

@media screen and (min-width: 961px) {
	iframe.player {
		height: 315px;
		width: 560px;
	}
}

@media screen and (min-width: 501px) and (max-width: 960px){
	iframe.player {
		height: 189px;
		width: 252px;
	}
}

@media screen and (max-width: 500px) {
	iframe.player {
		height: 150px;
		width: 200px;
	}
}
</style>
