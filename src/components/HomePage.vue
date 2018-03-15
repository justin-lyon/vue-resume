<template>
	<v-layout row wrap>
		<v-flex
			xs12 >

			<app-page-header
				:title="title"
				:summary="summary" ></app-page-header>

		</v-flex>

		<v-flex v-for="section in sections" :key="section.title"
			xs12 md6 lg4 >
			<app-section
				:title="section.title"
				:summary="section.summary"
				:imageName="section.image"
				:to="section.to" ></app-section>
		</v-flex>
	</v-layout>
</template>

<script>
import PageHeader from "./shared/PageHeader";
import HomeSection from "./cards/HomeSection";

export default {
	data() {
		return {
			title: "Welcome to Justin Lyon's resume page!",
			summary: "Mr. Lyon is currently employed as a Senior Technical Consultant I at Acumen Solutions. He acts in the roles of Lead Developer, Deployment Manager, Code Reviewer, and New Hire Trainer. He is an early adopter of Salesforce Lightning. Justin is looking for opportunities in Web Development where he can utilize his expertise in Javascript.",
			sections: [
				{
					title: "Experience", summary: "Justin's Job History.",
					image: "spinning.jpeg", to: "/experience"
				},
				{
					title: "Education", summary: "We are... Penn State!",
					image: "classroom.jpeg", to: "/education"
				},
				{
					title: "Projects", summary: "Personal Projects Justin has developed.",
					image: "sublimetext.png", to: "/project"
				},
				{
					title: "Skills", summary: "Technologies he's comfortable with.",
					image: "data.jpeg", to: "/skills"
				},
				{
					title: "Certifications", summary: "Certificates Justin has earned.",
					image: "expert.jpg", to: "/certifications"
				},
				{
					title: "Interests", summary: "Justin is interested in stuff.",
					image: "soccer.jpeg", to: "/interests"
				}
			]
		};
	},
	components: {
		appPageHeader: PageHeader,
		appSection: HomeSection
	}
}
</script>