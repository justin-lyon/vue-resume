<template>
	<app-container>

		<v-layout row wrap>
			<v-flex xs12>
				<app-page-header
					:title="title"
					:summary="summary" ></app-page-header>
			</v-flex>

			<v-flex v-for="project in projects" :key="project.name"
				xs12>

				<app-project
					:name="project.name"
					:link="project.link"
					:imageName="project.image"
					:stack="project.stack"
					:summary="project.summary"
					:description="project.description"
					:technologies="project.technologies" ></app-project>

			</v-flex>
		</v-layout>
	</app-container>
</template>

<script>
import Container from "./layouts/Container";
import Project from "./cards/Project";
import PageHeader from "./shared/PageHeader";

export default {
	data() {
		return {
			title: "Projects",
			summary: "In no particular order, these are personal projects that Justin has developed. Check him out on GitHub as well.",
			projects: [
				{
					name: "jlyon87.github.io",
					image: "spinning.jpeg", stack: "Static Webpage",
					summary: "The resume page you are viewing right now!",
					description: "Mr. Lyon built this static webpage for his resume.",
					technologies: [
						{ name: "Vue JS", link: "https://vuejs.org/" },
						{ name: "Material Design Components", link: "https://vuetifyjs.com/en/" },
						{ name: "Webpack", link: "https://webpack.js.org/" },
						{ name: "Bitbucket Pipelines", link: "https://bitbucket.org/product/features/pipelines" },
						{ name: "nginx", link: "https://www.nginx.com/" },
						{ name: "Ubuntu 16.04", link: "https://www.digitalocean.com/products/droplets/" },
						{ name: "SSL", link: "https://letsencrypt.org//" }
					]
				},
				{
					name: "eve-companion", link: "https://eve-companion.in",
					image: "eve-online.png", stack: "Node Stack",
					summary: "A third party tool for managing characters in EVE Online.",
					description: "Mr. Lyon developed eve-companion as a third party app to manage characters in EVE Online. This app maintains sessions for authenticated users and allows a user to add their characters through EVE Online's Rest API (ESI). Connections between the app and ESI are performed using OAuth. The app uses Bitbucket Pipelines for Continous Integration to an Ubuntu server using Nginx as the web server.",
					technologies: [
						{ name: "Vue JS", link: "https://vuejs.org/" },
						{ name: "Material Design Components", link: "https://vuetifyjs.com/en/" },
						{ name: "Webpack", link: "https://webpack.js.org/" },
						{ name: "RethinkDB", link: "https://www.rethinkdb.com/" },
						{ name: "express", link: "https://www.npmjs.com/package/express" },
						{ name: "express-session", link: "https://github.com/expressjs/session" },
						{ name: "EVE Swagger Interface", link: "https://esi.tech.ccp.is/ui/" },
						{ name: "OAuth", link: "https://en.wikipedia.org/wiki/OAuth" },
						{ name: "Bitbucket Pipelines", link: "https://bitbucket.org/product/features/pipelines" },
						{ name: "nginx", link: "https://www.nginx.com/" },
						{ name: "Ubuntu 16.04", link: "https://www.digitalocean.com/products/droplets/" },
						{ name: "SSL", link: "https://letsencrypt.org//" },
					]
				},
				{
					name: "FMT-Starter-Kit", link: "https://github.com/jlyon87/FMT-Starter-Kit",
					image: "force.png", stack: "Salesforce",
					summary: "A scaffold for starting out with Salesforce ant deployments.",
					description: "This project is a quick start to run custom Salesforce deployments using the Force.com Migration Tool, and ant.",
					technologies: [
						{ name: "Salesforce", link: "https://www.salesforce.com/" },
						{ name: "Force.com Migration Tool", link: "https://developer.salesforce.com/docs/atlas.en-us.daas.meta/daas/forcemigrationtool_install.htm" },
						{ name: "ant", link: "https://developer.salesforce.com/docs/atlas.en-us.daas.meta/daas/forcemigrationtool_prereq.htm" },
					]
				},
				{
					name: "lightning-kit", link: "https://github.com/jlyon87/lightning-kit",
					image: "force.png", stack: "Salesforce",
					summary: "A javascript static resource developer kit for Salesforce Lightning.",
					description: "This kit contains some basic helpers for developing in Salesforce Lightning.",
					technologies: [
						{ name: "Salesforce", link: "https://www.salesforce.com/" },
						{ name: "Static Resource", link: "https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_resources.htm" },
						{ name: "Salesforce Lightning", link: "https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/intro_framework.htm" },
					]
				},
				{
					name: "Lightning-Training", link: "https://github.com/jlyon87/Lightning-Training",
					image: "force.png", stack: "Salesforce",
					summary: "A repository of training materials for Salesforce Lightning Framework.",
					description: "Learn how to develop custom Lightning Components for Salesforce Lightning Experience.",
					technologies: [
						{ name: "Salesforce", link: "https://www.salesforce.com/" },
						{ name: "Salesforce Lightning", link: "https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/intro_framework.htm" },
					]
				}
			]
		};
	},

	components: {
		appContainer: Container,
		appPageHeader: PageHeader,
		appProject: Project
	}
}
</script>
