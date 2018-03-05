<template>
	<v-card>
		<v-card-media height="150px" :src="image"></v-card-media>
		<v-card-title primary-title>
			<div>
				<h3>Education</h3>
				<div>
					Talk about Education.
				</div>
			</div>
		</v-card-title>
	</v-card>
</template>

<script>
import image from "../../assets/classroom.jpeg";

export default {
	data() {
		return {
			image
		};
	}
}
</script>