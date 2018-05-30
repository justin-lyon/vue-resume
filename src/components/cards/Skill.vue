<template>
	<v-card style="height: 100%;">
		<v-card-title primary-title class="grey--text">
			<h3>{{ name }}</h3>

			<v-spacer></v-spacer>
			<v-progress-circular dark class="text-color--green"
				:color="color"
				:value="percentageMastery" >

				<span class="black--text">{{ mastery }}</span>
			</v-progress-circular>
		</v-card-title>
		<v-divider></v-divider>
		<v-card-text>
			<p>
				{{ description }}
			</p>
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	name: "SkillCard",
	props: [
		"name",
		"description",
		"mastery",
		"scale"
	],
	computed: {
		percentageMastery() {
			return Number(this.mastery / this.scale * 100);
		},

		color() {
			if(this.percentageMastery >= 80) {
				return "green";
			} else if(this.percentageMastery >= 50) {
				return "yellow";
			} else {
				return "red";
			}
		}
	}
}
</script>
