<template>
	<v-card>
		<v-card-media height="150px" :src="image"></v-card-media>
		<v-card-title primary-title>
			<div>
				<h3>Projects</h3>
				<div>
					Talk about some projects.
				</div>
			</div>
		</v-card-title>
	</v-card>
</template>

<script>
import image from "../../assets/sublimetext.png";

export default {
	data() {
		return {
			image
		};
	}
}
</script>