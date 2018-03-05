<template>
	<v-card>
		<v-card-title primary-title>
			<img class="pr-2"
				:src="image"
				alt="acumen-solutions.png">
			<div>
				<h3>Case Western Reserve University</h3>
				<div>
					Teacher's Assistant
					<p><i>June 2017 - January 2018</i></p>
				</div>
			</div>
		</v-card-title>

		<v-divider></v-divider>
		<v-card-text>
			<p>
				As a Teacher's Assistant at Case Western Reserve University, Justin brought his professional experience back to the classroom to instruct new developers on full stack Javascript development.
				Students began by learning the ropes with HTML and CSS.
				By the end of this six month course, students completed a cap-stone project using React.
				Along the way students learned advanced topics such as Node JS and working with Relationship and NoSQL Databases.
			</p>
		</v-card-text>

	</v-card>
</template>

<script>
import image from "../../assets/case-western.png";

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
