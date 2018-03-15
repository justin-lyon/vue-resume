<template>
	<v-layout row wrap>
		<v-flex xs12>
			<app-page-header
				:title="title"
				:summary="summary" ></app-page-header>
		</v-flex>

		<v-flex
			xs10 offset-xs1
			md10 offset-md1
			lg8	offset-lg2>

			<v-expansion-panel popout focusable dark>
				<v-expansion-panel-content v-for="skill in skills" :key="skill.name" v-model="skill.value">
					<div slot="header">
						{{ skill.name }}
					</div>
					<v-card >
						<v-card-text>
							{{ skill.description }}
						</v-card-text>
					</v-card>
				</v-expansion-panel-content>
			</v-expansion-panel>

		</v-flex>
	</v-layout>
</template>

<script>
import PageHeader from "./shared/PageHeader";
export default {
	data() {
		return {
			title: "Skills",
			summary: "Here are a handful of skills Justin has cultivated.",
			skills: [
				{ name: "Javascript", mastery: "",
					description: "Justin has found a great deal of enjoyment learning the ins and outs of ECMAScript over the past two years." },
				{ name: "Node JS", mastery: "",
					description: "Node has been a fantastic experience building full stack applications in Javascript." },
				{ name: "Salesforce", mastery: "", value: true,
					description: "Since 2014, Justin has been employed as a consultant developer - building on the Salesforce CRM Platform." },
				{ name: "Lightning", mastery: "",
					description: "Salesforce's Javascript Framework. This is how Justin got thrown into the deep end of Javascript." },
				{ name: "Apex", mastery: "",
					description: "When you are a Salesforce Developer, this is the first thing you learn. Salesforce's backend language based on Java JDK 6." },
				{ name: "SOQL", mastery: "",
					description: "This is Salesforce's proprietary query language. It's very similar to SQL, but has its own limitations." },
				{ name: "Visualforce", mastery: "",
					description: "Visualforce is a classic MVC templating framework, akin to JSPs." },
				{ name: "DataLoader", mastery: "",
					description: "This is the standard Salesforce ETL tool for extracting and updating data." },
				{ name: "NGINX", mastery: "",
					description: "This is a web server. He uses it to configure his DNS configurations to a Node Process - exposing an express server to the www for example." },
				{ name: "Linux", mastery: "",
					description: "His web server runs on Ubuntu 16.04." },
				{ name: "Vue JS", mastery: "",
					description: "This is his JS SPA Framework of Choice. Though he can be dangerous with Angular and React as well." },
			]
		};
	},

	components: {
		appPageHeader: PageHeader
	}
}
</script>