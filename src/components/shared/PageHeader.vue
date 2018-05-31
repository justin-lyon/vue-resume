<template>
	<v-card color="indigo" dark>
		<v-card-title primary-title>
			<div>
				<!-- <v-btn to="/">
					<v-icon>keyboard_arrow_left</v-icon>
				</v-btn> -->
				<h3>{{ title }}</h3>
			</div>
		</v-card-title>

		<v-card-text>
			<div>
				{{ summary }}
			</div>
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	props: {
		title: {
			type: String
		},
		summary: {
			type: String
		}
	}
}
</script>