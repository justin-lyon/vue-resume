<template>
	<v-container fluid grid-list-md>
		<v-layout row wrap>
			<v-flex
				xs10 offset-xs1
				md8 offset-md2>

				<app-summary></app-summary>

			</v-flex>

			<v-flex
				xs10 offset-xs1
				md4 offset-md2>

				<v-layout row wrap>
					<v-flex xs12>
						<app-experience></app-experience>
					</v-flex>

					<v-flex xs12>
						<app-projects></app-projects>
					</v-flex>

					<v-flex xs12>
						<app-certifications></app-certifications>
					</v-flex>
				</v-layout>
			</v-flex>

			<v-flex
				xs10 offset-xs1
				md4 offset-md0 >

				<v-layout row wrap>
					<v-flex xs12>
						<app-education></app-education>
					</v-flex>

					<v-flex xs12>
						<app-skills></app-skills>
					</v-flex>

					<v-flex xs12>
						<app-interests></app-interests>
					</v-flex>
				</v-layout>

			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import Summary from "./cards/Summary";
import Certifications from "./cards/Certifications";
import Education from "./cards/Education";
import Experience from "./cards/Experience";
import Interests from "./cards/Interests";
import Projects from "./cards/Projects";
import Skills from "./cards/Skills";

export default {
	components: {
		appSummary: Summary,
		appCertifications: Certifications,
		appEducation: Education,
		appExperience: Experience,
		appInterests: Interests,
		appProjects: Projects,
		appSkills: Skills
	}
}
</script>

<style scoped>
.stuff { background-color: red; }
</style>
