<template>
	<v-app >
		<v-content>

			<app-header></app-header>
			<v-container fluid>

				<transition name="slide-x-reverse-transition" mode="out-in">
					<router-view ></router-view>
				</transition>

			</v-container>
			<app-footer></app-footer>
		</v-content>
	</v-app>
</template>

<script>
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

export default {
	components: {
		appHeader: Header,
		appFooter: Footer
	}
}
</script>
