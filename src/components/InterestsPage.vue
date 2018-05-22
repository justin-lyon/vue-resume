<template>
	<v-layout row wrap>
		<v-flex xs12>
			<app-page-header
				:title="title"
				:summary="summary" ></app-page-header>
		</v-flex>

		<v-flex v-for="interest in interests" :key="interest.name"
			xs12>

			<app-interest
				:name="interest.name"
				:link="interest.link"
				:image="interest.image"
				:description="interest.description"
				:video="interest.video" ></app-interest>

		</v-flex>
	</v-layout>
</template>

<script>
import PageHeader from "./shared/PageHeader";
import Interest from "./cards/Interest";

export default {
	data() {
		return {
			title: "Interests",
			summary: "Some off-topic interests Justin has outside of his day job.",
			interests: [
				{
					name: "Fun Fun Function", link: "https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q",
					image: "funfunfunction.jpg",
					description: "This is an excellent channel on YouTube. The host, Mattias Petter Johansson, presents a show - rather than instruction. He covers advanced concepts and often soft skills like Communication or Motivation. I highly recommend his playlist on higher order functions.",
					video: {
						width: 560,
						height: 315,
						src: "https://www.youtube.com/embed/W4brAobC2Hc",
					}
				},
			]
		};
	},
	components: {
		appPageHeader: PageHeader,
		appInterest: Interest
	}
}
</script>