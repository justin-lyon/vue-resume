<template>
	<v-card to="/experience" >
		<v-card-media height="150px" :src="image"></v-card-media>
		<v-card-title primary-title>
			<div>
				<h3>Experience</h3>
				<div>
					Justin's job history.
				</div>
			</div>
		</v-card-title>
	</v-card>
</template>

<script>
import image from "../../assets/spinning.jpeg";

export default {
	data() {
		return {
			image
		};
	}
}
</script>