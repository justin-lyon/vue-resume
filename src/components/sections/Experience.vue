<template>
	<v-container fluid grid-list-md>
		<v-layout row wrap>
			<v-flex
				xs10 offset-xs1
				md8 offset-md2>

				<v-card >
					<v-card-title primary-title>
						<div>
							<h3>Experience</h3>
						</div>
					</v-card-title>

					<v-card-text>
						<div>
							After graduating from university, Justin spent four years abroad - teaching English in South Korea.
							Today he works as a Senior Developer, building and maintaining applications on the Salesforce Platform.
						</div>
					</v-card-text>
				</v-card>

				<v-layout row wrap>
					<v-flex xs12>
						<app-acumen></app-acumen>
					</v-flex>

					<v-flex xs12>
						<app-case></app-case>
					</v-flex>

					<v-flex xs12>
						<app-poly></app-poly>
					</v-flex>

					<v-flex xs12>
						<app-muju></app-muju>
					</v-flex>
				</v-layout>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import Acumen from "../experience-cards/Acumen";
import Case from "../experience-cards/Case";
import Poly from "../experience-cards/Poly";
import Muju from "../experience-cards/Muju";

export default {
	components: {
		appAcumen: Acumen,
		appCase: Case,
		appPoly: Poly,
		appMuju: Muju
	}
}
</script>
