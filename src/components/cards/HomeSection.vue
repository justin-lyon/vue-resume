<template>
	<v-card :to="to" exact >
		<v-card-media height="150px"
			:src="image"
			:alt="image"></v-card-media>

		<v-card-title primary-title>
			<div>
				<h3>{{ title }}</h3>
				<div>
					{{ summary }}
				</div>
			</div>
		</v-card-title>
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
		},
		imageName: {
			type: String
		},
		to: {
			type: String,
			default: "/"
		}
	},

	computed: {
		image() {
			return require("../../assets/" + this.imageName);
		}
	}
}
</script>