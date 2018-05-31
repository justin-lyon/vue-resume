<template>
	<v-card style="height: 100%;">
		<v-card-title primary-title >
			<div >
				<h3>{{ cert.name }}</h3>
				<div>
					<p><i>{{ cert.date }}</i></p>
				</div>
			</div>
		</v-card-title>

		<v-divider></v-divider>
		<v-card-text>
			<p>
				{{ cert.description }}
			</p>
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	props: {
		cert: {
			type: Object
		}
	}
}
</script>