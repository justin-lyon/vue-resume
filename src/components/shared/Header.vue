<template>
	<v-toolbar app fixed dense >
		<v-menu :nudge-width="100">
			<v-toolbar-title slot="activator">
				<span></span>
				<v-icon>menu</v-icon>
			</v-toolbar-title>

			<v-list>
				<v-list-tile v-for="link in links" :key="link.label" :href="link.href" target="_blank" :to="link.to" >
					<v-list-tile-title>{{ link.label }}</v-list-tile-title>
				</v-list-tile>
			</v-list>
		</v-menu>

		<v-toolbar-items>
			<v-btn flat
				to="/"
				exact
				color="primary">
				Home
			</v-btn>
		</v-toolbar-items>

		<v-spacer></v-spacer>

		<v-toolbar-items>
			<v-btn v-for="link in links"
				:key="link.label"
				:href="link.href"
				target="_blank"
				:to="link.to"
				flat>{{ link.label }}</v-btn>
		</v-toolbar-items>

	</v-toolbar>
</template>

<script>
export default {
	data() {
		return {
			links: [
				{ label: "LinkedIn", href: "https://www.linkedin.com/in/justin-lyon" },
				{ label: "GitHub", href: "https://github.com/jlyon87" },
			]
		};
	}
}
</script>