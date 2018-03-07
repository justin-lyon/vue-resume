<template>
	<app-container>

		<v-layout row wrap>
			<v-flex xs12>
				<app-page-header
					:title="title"
					:summary="summary" ></app-page-header>
			</v-flex>

			<v-flex v-for="school in schools" :key="school.name"
				xs12>

				<app-school
					:name="school.name"
					:date="school.date"
					:imageName="school.image"
					:major="school.major"
					:minor="school.minor"
					:description="school.description"
					 ></app-school>

			</v-flex>
		</v-layout>
	</app-container>
</template>

<script>
import Container from "./layouts/Container";
import School from "./cards/School";
import PageHeader from "./shared/PageHeader";

export default {
	data() {
		return {
			title: "Education",
			summary: "We are... Penn State!",
			schools: [
				{
					name: "The Pennsylvania State University", date: "2009", image: "psu.png",
					major: "Information Sciences & Technology", minor: "Business",
					description: "Mr. Lyon graduated from The Pennsylvania State University in 2009, majoring in Information Sciences & Technology with a Business minor. While attending PSU, he started the Soccer Club his freshman year - which grew into a PSU varsity program which continues today at Beaver Campus. As the President of the Soccer Club, Justin found entrance to Student Government. He was voted in as a class representative and eventually Vice President of PSU Beaver Student Government for three semesters."
				}
			]
		};
	},
	components: {
		appContainer: Container,
		appSchool: School,
		appPageHeader: PageHeader
	}
}
</script>
