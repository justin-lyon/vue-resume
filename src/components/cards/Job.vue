<template>
	<v-card>
		<v-card-title primary-title>
			<img class="pr-2"
				:src="'assets/images/' + imageName"
				:alt="imageName">
			<div>
				<h3>{{ company }}</h3>
				<div>
					{{ title }}
					<p><i>{{ duration }}</i></p>
				</div>
			</div>
		</v-card-title>

		<v-divider></v-divider>
		<v-card-text>
			<p>
				{{ description }}
			</p>
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	props: {
		company: {
			type: String
		},
		title: {
			type: String
		},
		duration: {
			type: String
		},
		imageName: {
			type: String
		},
		description: {
			type: String
		}
	}
}
</script>

<style scoped>
img {
	max-width: 100px;
}
</style>
