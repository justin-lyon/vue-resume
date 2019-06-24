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
        { name: 'Salesforce Certified Platform Developer II',
          date: 'May 2019 - Present',
          description: 'Candidates should demonstrate advanced knowledge of the programmatic capabilities of the Salesforce platform and data modeling to develop complex business logic and interfaces.' },
				{ name: "Salesforce Certified Platform Developer I",
					date: "Feb 2017 - Present",
					description: "The Salesforce Certified Platform Developer I credential is designed for those who have knowledge, skills, and experience building custom declarative and programmatic applications on the Force.com platform." }
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