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
			summary: "These are personal projects that Justin has developed. Ordered by complexity. Check him out on GitHub as well.",
			projects: [
				{
					name: "eve-companion", link: "https://eve-companion.in",
					image: "eve-online.png", stack: "Node JS",
					summary: "A third party tool for managing characters in EVE Online.",
					description: "Mr. Lyon developed eve-companion as a third party app to manage characters in EVE Online. This app maintains sessions for authenticated users and allows a user to add their characters through EVE Online's Rest API (ESI). Connections between the app and ESI are performed using OAuth. The app uses Bitbucket Pipelines for Continous Integration to an Ubuntu server using Nginx as the web server.",
					technologies: [
						{ name: "Vue JS", link: "https://vuejs.org/" },
						{ name: "Webpack", link: "https://webpack.js.org/" },
						{ name: "RethinkDB", link: "https://www.rethinkdb.com/" },
						{ name: "express-session", link: "https://github.com/expressjs/session" },
						{ name: "OAuth", link: "https://en.wikipedia.org/wiki/OAuth" },
						{ name: "Bitbucket Pipelines", link: "https://bitbucket.org/product/features/pipelines" },
						{ name: "nginx", link: "https://www.nginx.com/" },
						{ name: "Ubuntu 16.04", link: "https://www.digitalocean.com/products/droplets/" }
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
