<template>
	<v-card style="height: 100%">
		<v-card-actions v-if="link">
			<v-spacer></v-spacer>
			<a :href="link" target="_blank" class="project-link">
				<v-icon color="primary">launch</v-icon>
			</a>
		</v-card-actions>

		<v-card-title primary-title style="min-height: 132px;">
			<img class="pr-2"
				:src="'assets/images/' + image"
				:alt="image">
			<div>
				<h3>
					{{ name }}
				</h3>
			</div>
		</v-card-title>

		<v-divider></v-divider>
		<v-card-text>
			<p style="min-height: 84px;">
				{{ description }}
			</p>

			<app-video v-if="video"
				:title="video.title"
				:src="video.src" ></app-video>
		</v-card-text>

	</v-card>
</template>

<script>
import Video from "../shared/Video";
export default {
	name: "Interest",
	props: [
		"name",
		"link",
		"image",
		"description",
		"video"
	],
	components: {
		appVideo: Video
	}
}
</script>

<style scoped>

img {
	max-width: 100px;
}

.project-link {
	text-decoration: none;
}
</style>
