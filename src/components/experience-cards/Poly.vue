<template>
	<v-card>
		<v-card-title primary-title>
			<img class="pr-2"
				:src="image"
				alt="acumen-solutions.png">
			<div>
				<h3>Korea POLY School</h3>
				<div>
					English Instructor
					<p><i>February 2012 - February 2014</i></p>
				</div>
			</div>
		</v-card-title>

		<v-divider></v-divider>
		<v-card-text>
			<p>
				As an English Instructor with Korea POLY School, Justin taught English courses to Elementary students.
				During the morning and into the early afternoon, he lead his kindergarteners in their daily lessons.
				Through the afternoon and into the evening, he instructed grades one through five.
				Justin was responsible for daily lesson plans centered on Houghton Mifflin text books and materials for all levels of instruction.
			</p>
		</v-card-text>

	</v-card>
</template>

<script>
import image from "../../assets/poly.jpg";

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
