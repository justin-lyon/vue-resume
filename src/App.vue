<template>
	<v-app >
		<v-content>

			<app-header></app-header>
			<v-container fluid>

				<app-container>
					<transition name="slide-x-reverse-transition" mode="out-in">
						<router-view ></router-view>
					</transition>
				</app-container>

			</v-container>
			<app-footer></app-footer>
		</v-content>
	</v-app>
</template>

<script>
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import Container from './components/shared/Container'

export default {
  components: {
    appHeader: Header,
    appContainer: Container,
    appFooter: Footer
  }
}
</script>
