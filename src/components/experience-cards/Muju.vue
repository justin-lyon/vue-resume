<template>
	<v-card>
		<v-card-title primary-title>
			<img class="pr-2"
				:src="image"
				alt="acumen-solutions.png">
			<div>
				<h3>Muju Global Education Center</h3>
				<div>
					English Instructor
					<p><i>March 2010 - February 2012</i></p>
				</div>
			</div>
		</v-card-title>

		<v-divider></v-divider>
		<v-card-text>
			<p>
				As an English Instructor for Muju Global Education Center, Justin was responsible for contextual English lessons for grades K-12.
				Each contextual lesson covered topics such as Ordering Food, Going to the Park, or Going to the Airport.
				While at MGEC, he assisted in writing the Elementary, Middle, and High school curriculum.
			</p>
		</v-card-text>

	</v-card>
</template>

<script>
import image from "../../assets/muju.jpg";

export default {
	data() {
		return {
			image
		};
	}
}
</script>

<style scoped>
img {
	max-width: 100px;
}
</style>
