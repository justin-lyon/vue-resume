<template>
	<v-card >
		<v-card-text>

			<v-container fluid grid-list-xs>
				<v-layout row justify-space-between >
					<v-flex text-xs-left>
						<img class="pr-2"
							:src="'assets/images/' + image"
							:alt="image">
					</v-flex>
					<v-flex xs8>
						<p >
							{{ description }}
						</p>
					</v-flex>
					<v-flex text-xs-right>
						<a :href="link" target="_blank" class="project-link">
							<v-icon color="primary">launch</v-icon>
						</a>
					</v-flex>
				</v-layout>

				<v-layout row justify-center>
					<v-flex xs8>
						<app-video v-if="video"
							:title="video.title"
							:src="video.src" ></app-video>
					</v-flex>
				</v-layout>
			</v-container>

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
