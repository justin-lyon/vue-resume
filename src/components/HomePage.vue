<template>
	<app-container>
		<app-page-header
			:title="title"
			:summary="summary" ></app-page-header>

		<v-layout row wrap>
			<v-flex v-for="section in sections" :key="section.title"
				xs12 md6 lg4 >
				<app-section
					:title="section.title"
					:summary="section.summary"
					:imageName="section.image"
					:to="section.to" ></app-section>
			</v-flex>
		</v-layout>
	</app-container>
</template>

<script>
import Container from "./layouts/Container";
import PageHeader from "./shared/PageHeader";
import HomeSection from "./cards/HomeSection";

export default {
	data() {
		return {
			title: "Summary",
			summary: "Mr. Lyon is currently employed as a Senior Technical Consultant I at Acumen Solutions. He acts in the roles of Lead Developer, Deployment Manager, Code Reviewer, and New Hire Trainer. He is an early adopter of Salesforce Lightning. Justin is looking for opportunities in Web Development where he can utilize his expertise in Javascript.",
			sections: [
				{
					title: "Experience", summary: "Justin's Job History.",
					image: "spinning.jpeg", to: "/experience"
				},
				{
					title: "Education", summary: "Talk about education.",
					image: "classroom.jpeg", to: "/education"
				},
				{
					title: "Projects", summary: "Talk about some projects.",
					image: "sublimetext.png", to: "/"
				},
				{
					title: "Skills", summary: "Highlight some skills.",
					image: "data.jpeg", to: "/"
				},
				{
					title: "Certifications", summary: "Talk about some certifications.",
					image: "expert.jpg", to: "/"
				},
				{
					title: "Interests", summary: "Just is interested in stuff.",
					image: "soccer.jpeg", to: "/"
				}
			]
		};
	},
	components: {
		appContainer: Container,
		appPageHeader: PageHeader,
		appSection: HomeSection
	}
}
</script>