<template>
	<v-layout row wrap>
		<v-flex xs12>
			<div>xs:{{ $vuetify.breakpoint.xs }}</div>
			<div>sm:{{ $vuetify.breakpoint.sm }}</div>
			<div>md:{{ $vuetify.breakpoint.md }}</div>
			<div>lg:{{ $vuetify.breakpoint.lg }}</div>
			<div>xl:{{ $vuetify.breakpoint.xl }}</div>
			<div>width{{ $vuetify.breakpoint.width }}</div>
			<app-page-header
				:title="title"
				:summary="summary" ></app-page-header>
		</v-flex>

		<v-flex v-for="interest in interests" :key="interest.name"
			xs12 md6>

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
						title: "Iterators in Javascript using Quokka",
						width: 560,
						height: 315,
						src: "https://www.youtube.com/embed/W4brAobC2Hc",
					}
				},
				{
					name: "Web DM", link: "https://www.youtube.com/channel/UC7XFmdssWgaPzGyGbKk8GaQ",
					image: "webdm.jpg",
					description: "Web DM is a great intro to Dungeons & Dragons 5th Edition. D&D has provided some interesting use cases to build apps around.",
					video: {
						title: "Getting Started In 5th Edition D&D",
						width: 560,
						height: 315,
						src: "https://www.youtube.com/embed/LkFGOaa6tQA"
					}
				},
				{
					name: "Starcraft II", link: "http://us.battle.net/sc2/en/profile/2336428/1/jlyon/",
					image: "starcraft.png",
					description: "Starcraft II is a game that I just keep coming back to. Love to play it, love to talk about it.",
					video: {
						title: "SUPREME LATE GAME PROTOSS VS ZERG - Dark vs Stats - StarCraft 2 Starleague",
						width: 560,
						height: 315,
						src: "https://www.youtube.com/embed/8x9xoxB1DfI"
					}
				},
				{
					name: "EVE Online", link: "https://www.eveonline.com/",
					image: "eve-online.png",
					description: "EVE Online is a great MMO RPG that has provided inspiration for a couple web apps I've worked on.",
					video: {
						title: "“This is EVE” - Uncensored (2014)",
						width: 560,
						height: 315,
						src: "https://www.youtube.com/embed/AdfFnTt2UT0"
					}
				}
			]
		};
	},
	components: {
		appPageHeader: PageHeader,
		appInterest: Interest
	}
}
</script>