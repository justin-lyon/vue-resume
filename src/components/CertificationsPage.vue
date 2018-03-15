<template>
	<v-layout row wrap>
		<v-flex xs12>
			<app-page-header
				:title="title"
				:summary="summary" ></app-page-header>
		</v-flex>

		<!-- <v-flex xs12 >
			<v-card>
				<v-card-actions>
					<v-spacer></v-spacer>
					<h4>Verify my Salesforce Certs</h4>
					<a :href="link" target="_blank" class="cert-link">
						<v-icon color="primary">launch</v-icon>
					</a>
					<v-spacer></v-spacer>
				</v-card-actions>
			</v-card>
		</v-flex> -->

		<v-flex v-for="cert in certifications" :key="cert.name"
			xs12 md6 lg4 >

			<app-certificate :cert="cert" ></app-certificate>

		</v-flex>
	</v-layout>
</template>

<script>
import PageHeader from "./shared/PageHeader";
import Certificate from "./cards/Certificate";

export default {
	data() {
		return {
			title: "Certifications",
			summary: "Justin has earned three Salesforce certifications.",
			link: "http://certification.salesforce.com/certification-detail-print?conId=003G0000025uu3HIAQ",
			certifications: [
				{ name: "Salesforce Certified Platform App Builder",
					date: "Mar 2017 - Present",
					description: "The Salesforce Certified Platform App Builder credential is designed for those who can demonstrate skills and knowledge in designing, building, and implementing custom applications using the declarative customization capabilities of the Force.com platform." },
				{ name: "Salesforce Certified Platform Developer I",
					date: "Feb 2017 - Present",
					description: "The Salesforce Certified Platform Developer I credential is designed for those who have knowledge, skills, and experience building custom declarative and programmatic applications on the Force.com platform." },
				{ name: "Salesforce Certified Administrator",
					date: "Jan 2017 - Present",
					description: "The Salesforce Certified Administrator credential is designed for those who have experience as a Salesforce Administrator. Candidates should possess broad knowledge of Salesforce applications, regularly configure and manage Salesforce, and continuously look for ways their companies can get even more from additional features and capabilities." },
			]
		};
	},

	components: {
		appPageHeader: PageHeader,
		appCertificate: Certificate
	}
}
</script>

<style scoped>
.cert-link {
	text-decoration: none;
}
</style>