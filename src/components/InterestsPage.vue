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
			interests: []
		};
	},
	components: {
		appPageHeader: PageHeader
	}
}
</script>
