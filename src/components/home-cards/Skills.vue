<template>
	<v-card>
		<v-card-media height="150px" :src="image"></v-card-media>
		<v-card-title primary-title>
			<div>
				<h3>Skills</h3>
				<div>
					Highlight some skills.
				</div>
			</div>
		</v-card-title>
	</v-card>
</template>

<script>
import image from "../../assets/data.jpeg";

export default {
	data() {
		return {
			image
		};
	}
}
</script>