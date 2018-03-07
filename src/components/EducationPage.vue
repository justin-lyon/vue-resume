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
			summary: "",
			schools: [
				{
					name: "The Pennsylvania State University", date: "2009", image: "psu.png",
					major: "Information Sciences & Technology", minor: "Business",
					description: "Justin graduated from The Pennsylvania State University in 2009, majoring in Information Sciences & Technology with a Business minor."
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
