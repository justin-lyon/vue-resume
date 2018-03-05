<template>
	<v-card>
		<v-card-media height="150px" :src="image"></v-card-media>
		<v-card-title primary-title>
			<div>
				<h3>Interests</h3>
				<div>
					Justin is interested in stuff.
				</div>
			</div>
		</v-card-title>
	</v-card>
</template>

<script>
import image from "../../assets/soccer.jpeg";

export default {
	data() {
		return {
			image
		};
	}
}
</script>