<template>
	<v-container fluid grid-list-md>
		<v-layout row wrap>
			<v-flex
				xs10 offset-xs1
				md8 offset-md2>

				<slot></slot>
			</v-flex>
		</v-layout>
	</v-container>
</template>
