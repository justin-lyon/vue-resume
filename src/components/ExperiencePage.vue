<template>
	<app-container>

		<v-layout row wrap>
			<v-flex xs12>
				<app-page-header
					:title="title"
					:summary="summary" ></app-page-header>
			</v-flex>

			<v-flex v-for="job in jobs" :key="job.company"
				xs12>

				<app-job
					:company="job.company"
					:title="job.title"
					:duration="job.duration"
					:imageName="job.image"
					:description="job.description" ></app-job>

			</v-flex>
		</v-layout>
	</app-container>
</template>

<script>
import Container from "./layouts/Container";
import PageHeader from "./shared/PageHeader";
import Job from "./cards/Job";

export default {
	data() {
		return {
			title: "Experience",
			summary: "After graduating from university, Justin spent four years abroad - teaching English in South Korea. Today he works as a Senior Developer, building and maintaining applications on the Salesforce Platform.",
			jobs: [
				{
					company: "Acumen Solutions", title: "Senior Technical Consultant I",
					duration: "August 2014 - Current", image: "acumen-solutions.png",
					description: "As a Senior Developer with Acumen Solutions Justin took on the roles of Lead Developer, Release Manager, Code Reviewer, and Technical Trainer. He assisted in defining development & dev-ops standards on the Salesforce Platform. While working at Acumen he earned the Salesforce Certifications of Certified Administrator, Platform App Builder, & Platform Developer I. As an early adopter of Salesforce Lightning, Justin helped define development standards in Salesforce's new client side framework - applying a top-down, data-driven component design. As a Lead Developer and Technical Trainer, Justin has worked with each of Acumen's new hires to engage them on the Salesforce Platform."
				},
				{
					company: "Case Western Reserve University", title: "Teacher's Assistant",
					duration: "June 2017 - January 2018", image: "case-western.png",
					description: "As a Teacher's Assistant at Case Western Reserve University, Justin brought his professional experience back to the classroom to instruct new developers on full stack Javascript development. Students began by learning the ropes with HTML and CSS. By the end of this six month course, students completed a cap-stone project using React. Along the way students learned advanced topics such as Node JS and working with Relationship and NoSQL Databases."
				},
				{
					company: "Korea POLY School", title: "English Instructor",
					duration: "February 2012 - February 2014", image: "poly.jpg",
					description: "As an English Instructor with Korea POLY School, Justin taught English courses to Elementary students. During the morning and into the early afternoon, he lead his kindergarteners in their daily lessons. Through the afternoon and into the evening, he instructed grades one through five. Justin was responsible for daily lesson plans centered on Houghton Mifflin text books and materials for all levels of instruction."
				},
				{
					company: "Muju Global Education Center", title: "English Instructor",
					duration: "March 2010 - February 2012", image: "muju.jpg",
					description: "As an English Instructor for Muju Global Education Center, Justin was responsible for contextual English lessons for grades K-12. Each contextual lesson covered topics such as Ordering Food, Going to the Park, or Going to the Airport. While at MGEC, he assisted in writing the Elementary, Middle, and High school curriculum."
				}
			]
		};
	},
	components: {
		appContainer: Container,
		appPageHeader: PageHeader,
		appJob: Job
	}
}
</script>
