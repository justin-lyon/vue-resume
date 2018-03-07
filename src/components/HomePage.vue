<template>
	<v-container fluid grid-list-md>
		<v-layout row wrap>
			<v-flex
				xs10 offset-xs1
				md8 offset-md2
				lg6 offset-lg3 >

				<app-summary></app-summary>

			</v-flex>

			<v-flex
				xs10 offset-xs1
				md8 offset-md2
				lg6 offset-lg3>

				<v-layout row wrap>
					<v-flex v-for="section in sections" :key="section.title"
						xs12 md6 lg4 >
						<app-section
							:title="section.title"
							:summary="section.summary"
							:image="section.image"
							:to="section.to" ></app-section>
					</v-flex>
				</v-layout>

			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import Summary from "./cards/Summary";
import HomeSection from "./cards/HomeSection";

export default {
	data() {
		return {
			sections: [
				{ title: "Experience", summary: "Justin's Job History.", image: "spinning.jpeg", to: "/experience" },
				{ title: "Education", summary: "Talk about education.", image: "classroom.jpeg", to: "/" },
				{ title: "Projects", summary: "Talk about some projects.", image: "sublimetext.png", to: "/" },
				{ title: "Skills", summary: "Highlight some skills.", image: "data.jpeg", to: "/" },
				{ title: "Certifications", summary: "Talk about some certifications.", image: "expert.jpg", to: "/" },
				{ title: "Interests", summary: "Just is interested in stuff.", image: "soccer.jpeg", to: "/" }
			]
		};
	},
	components: {
		appSummary: Summary,
		appSection: HomeSection
	}
}
</script>