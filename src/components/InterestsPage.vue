<template>
	<v-layout row wrap>
		<v-flex xs12>
			<app-page-header
				:title="title"
				:summary="summary" ></app-page-header>
		</v-flex>

		<v-flex
			xs12>



		</v-flex>
	</v-layout>
</template>

<script>
import PageHeader from "./shared/PageHeader";

export default {
	data() {
		return {
			title: "Interests",
			summary: "Some off-topic interests Justin has outside of his day job.",
			interests: [
				{ name: "Fun Fun Function", link: "https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q",
					description: "This is an excellent channel on YouTube. The host presents a show, rather than instruction. He covers advanced concepts and often soft skills like Communication or Motivation."
				},
			]
		};
	},
	components: {
		appPageHeader: PageHeader
	}
}
</script>
