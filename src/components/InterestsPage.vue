<template>
	<v-layout wrap>
		<v-flex xs12>
			<app-page-header
				:title="title"
				:summary="summary" ></app-page-header>
		</v-flex>

		<v-flex xs12>
			<v-expansion-panel popout >
				<v-expansion-panel-content v-for="interest in interests" :key="interest.name" ripple>
					<div slot="header">
						<strong>{{ interest.name }}</strong>
					</div>

					<v-divider></v-divider>
					<app-interest
						:name="interest.name"
						:link="interest.link"
						:image="interest.image"
						:description="interest.description"
						:video="interest.video" ></app-interest>
				</v-expansion-panel-content>
			</v-expansion-panel>
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
						src: "https://www.youtube.com/embed/W4brAobC2Hc",
					}
				},
				{
					name: "Dungeons & Dragons", link: "http://dnd.wizards.com/",
					image: "dnd-ampersand-red.png",
					description: "I've enjoyed playing D&D for a few years now. I've participated as player and run games as a DM. I've played both Pathfinder and 5e. I like 5e better though! Below you may find a video to some fellas that help explain the game quite well.",
					video: {
						title: "Getting Started In 5th Edition D&D",
						src: "https://www.youtube.com/embed/LkFGOaa6tQA"
					}
				},
				{
					name: "Starcraft II", link: "http://us.battle.net/sc2/en/profile/2336428/1/jlyon/",
					image: "starcraft.png",
					description: "Starcraft II is a game that I just keep coming back to. Love to play it, love to talk about it. Whether I'm playing coop, arcade, or playing on the ladder - this game is my old-faithful.",
					video: {
						title: "StarCraft II at IEM Katowice 2018 (Official Recap)",
						src: "https://www.youtube.com/embed/HaD4v97seYg"
					}
				},
				{
					name: "EVE Online", link: "https://www.eveonline.com/",
					image: "eve-online.png",
					description: "EVE Online is a great MMO RPG that has provided inspiration for a couple web apps I've worked on. Even though I haven't played the game in about 2 years, I still find myself following game news or coming up with new ideas for third party apps.",
					video: {
						title: "“This is EVE” - Uncensored (2014)",
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