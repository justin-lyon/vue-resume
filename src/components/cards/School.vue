<template>
	<v-card>
		<v-card-title primary-title>
			<img class="pr-2"
				:src="'assets/images/' + imageName"
				:alt="imageName">
			<div>
				<h3>{{ name }}</h3>
				<div>
					<div v-if="major">Major: {{ major }}</div>
					<div v-if="minor">Minor: {{ minor }}</div>
					<p><i>{{ date }}</i></p>
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
		name: {
			type: String
		},
		major: {
			type: String
		},
		minor: {
			type: String
		},
		date: {
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
