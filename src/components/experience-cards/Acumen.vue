<template>
	<v-card>
		<v-card-title primary-title>
			<img class="pr-2"
				:src="image"
				alt="acumen-solutions.png">
			<div>
				<h3>Acumen Solutions</h3>
				<div>
					Senior Technical Consultant I
					<p><i>August 2014 - Current</i></p>
				</div>
			</div>
		</v-card-title>

		<v-divider></v-divider>
		<v-card-text>
			<p>
				As a Senior Developer with Acumen Solutions Justin took on the roles of Lead Developer, Release Manager, Code Reviewer, and Technical Trainer.
				He assisted in defining development & dev-ops standards on the Salesforce Platform.
				While working at Acumen he earned the Salesforce Certifications of Certified Administrator, Platform App Builder, & Platform Developer I.
				As an early adopter of Salesforce Lightning, Justin helped define development standards in Salesforce's new client side framework - applying a top-down, data-driven component design.
				As a Lead Developer and Technical Trainer, Justin has worked with each of Acumen's new hires to engage them on the Salesforce Platform.
			</p>
		</v-card-text>

	</v-card>
</template>

<script>
import image from "../../assets/acumen-solutions.png";

export default {
	data() {
		return {
			image
		};
	}
}
</script>

<style scoped>
img {
	max-width: 100px;
}
</style>
