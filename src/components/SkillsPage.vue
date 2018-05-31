<template>
	<v-layout row wrap justify-center >
		<v-flex xs12>
			<app-page-header
				:title="title"
				:summary="summary" ></app-page-header>
		</v-flex>

		<v-flex xs12>
			<v-layout row justify-center >
				<v-flex xs12 md6 text-xs-center >
					<v-select
						:items="categoryOptions"
						v-model="selectedCategories"
						multiple
						chips
						hint="Filter by Category"
						persistent-hint >

						<template slot="selection" slot-scope="data">
							<v-chip
								class="chip--select-multi"
								:selected="data.selected"
								:key="data.item.value"
								@input="data.parent.selectItem(data.item)"
								close >
									{{ data.item.text }}
								</v-chip>
						</template>
					</v-select>
				</v-flex>
			</v-layout>

			<v-layout row justify-center>
				<v-flex xs12 md6 text-xs-center>
					<v-select
						:items="sortOptions"
						v-model="selectedSort"
						hint="Sort By"
						persistent-hint ></v-select>
				</v-flex>
			</v-layout>
		</v-flex>

		<v-flex xs12 md6 lg4
			v-for="skill in sortedSkills" :key="skill.name" >

			<app-skill
				:name="skill.name"
				:description="skill.description"
				:mastery="skill.mastery"
				:scale="skill.masteryScale"
				:types="skill.types" ></app-skill>

		</v-flex>
	</v-layout>
</template>

<script>
import PageHeader from "./shared/PageHeader";
import Skill from "./cards/Skill";

export default {
	computed: {
		filteredSkills() {
			if(this.selectedCategories.length === 0) return this.skills;

			return this.skills
				.filter(s =>
					s.types.reduce((a, v) =>
						this.selectedCategories.includes(v) || a, false));
		},

		sortedSkills() {
			const sortMap = {
				name: this.sortByName,
				mastery: this.sortByMastery
			};

			return this.selectedSort === null
				? this.filteredSkills
				: this.filteredSkills
						.sort((a, b) => sortMap[this.selectedSort](a, b));
		}
	},

	methods: {
		sortByName(a, b) {
			const aText = a.name.toLowerCase();
			const bText = b.name.toLowerCase();

			if(aText === bText) return 0;

			return aText > bText ? 1 : -1;
		},

		sortByMastery(a, b) {
			return (a.mastery - b.mastery) * -1;
		},
	},

	data() {
		return {
			title: "Skills",
			summary: "Here are a handful of skills Justin has cultivated. Mastery on a scale of 10. As a point of reference - 8 and above I am comfortable working independently.",
			selectedSort: "name",
			sortOptions: [
				{ text: "Name", value: "name" },
				{ text: "Mastery", value: "mastery" },
			],
			selectedCategories: [],
			categoryOptions: [
				{ text: "Javascript", value: "Javascript"},
				{ text: "Salesforce", value: "Salesforce"},
				{ text: "Server", value: "Server"},
				{ text: "DevOps", value: "DevOps"},
				{ text: "Front-end" , value: "Front-end"},
				{ text: "Database", value: "Database"},
				{ text: "Other", value: "Other"},
			],
			skills: [
				{ name: "Javascript", mastery: 9, masteryScale: 10,
					description: "I've found a great deal of enjoyment learning the ins and outs of ECMAScript over the past two years.",
					types: ["Javascript"]
				},
				{ name: "Node JS", mastery: 8, masteryScale: 10,
					description: "Node has been a fantastic experience building full stack applications in Javascript.",
					types: ["Javascript", "Server"]
				},
				{ name: "Salesforce", mastery: 10, masteryScale: 10,
					description: "Since 2014, I've been employed as a consultant developer - building on the Salesforce CRM Platform.",
					types: ["Salesforce"]
				},
				{ name: "Lightning", mastery: 10, masteryScale: 10,
					description: "Salesforce's Javascript Framework. This is how I got thrown into the deep end of Javascript.",
					types: ["Javascript", "Salesforce"]
				},
				{ name: "Apex", mastery: 10, masteryScale: 10,
					description: "When you are a Salesforce Developer, this is the first thing you learn. Salesforce's backend language based on Java JDK 6.",
					types: ["Salesforce", "Server"]
				},
				{ name: "SOQL", mastery: 10, masteryScale: 10,
					description: "This is Salesforce's proprietary query language. It's very similar to SQL, but has its own limitations.",
					types: ["Salesforce", "Server"]
				},
				{ name: "Visualforce", mastery: 9, masteryScale: 10,
					description: "Visualforce is a classic MVC templating framework, akin to JSPs.",
					types: ["Salesforce"]
				},
				{ name: "DataLoader", mastery: 10	, masteryScale: 10,
					description: "This is the standard Salesforce ETL tool for extracting and updating data.",
					types: ["Salesforce"]
				},
				{ name: "NGINX", mastery: 7, masteryScale: 10,
					description: "This is a web server. I use it to configure my DNS configurations to a Node Process - exposing a local host express server to the www for example.",
					types: ["DevOps"]
				},
				{ name: "Linux", mastery: 6, masteryScale: 10,
					description: "My web server runs on Ubuntu 16.04.",
					types: ["DevOps"]
				},
				{ name: "Vue JS", mastery: 9, masteryScale: 10,
					description: "This is my JS SPA Framework of Choice. Though I can be dangerous with Angular and React as well.",
					types: ["Javascript", "Front-end"]
				},
				{ name: "Vuetify JS", mastery: 9, masteryScale: 10,
					description: "This is a Material Design component library for Vue Js.",
					types: ["Javascript", "Front-end"]
				},
				{ name: "RethinkDB", mastery: 9, masteryScale: 10,
					description: "This is an ReQL document database.",
					types: ["Database"]
				},
				{ name: "MongoDB", mastery: 8, masteryScale: 10,
					description: "This is a NoSQL document database.",
					types: ["Database"]
				},
				{ name: "MySQL", mastery: 7, masteryScale: 10,
					description: "This is his JS SPA Framework of Choice. Though he can be dangerous with Angular and React as well.",
					types: ["Database"]
				},
				{ name: "SQL", mastery: 7, masteryScale: 10,
					description: "This is his JS SPA Framework of Choice. Though he can be dangerous with Angular and React as well.",
					types: ["Database"]
				},
				{ name: "Cooking", mastery: 2, masteryScale: 10,
					description: "I'm not a great cook. I can do pastas and ramen, and maybe something on the grill.",
					types: ["Other"]
				},
				{ name: "Express", mastery: 9, masteryScale: 10,
					description: "Express Server for Node JS.",
					types: ["Javascript"]
				},
				{ name: "Express Session", mastery: 9, masteryScale: 10,
					description: "Session management plugin for Express.",
					types: ["Javascript"]
				},
				{ name: "Webpack", mastery: 9, masteryScale: 10,
					description: "Node Build Tool.",
					types: ["Javascript", "DevOps"]
				},
				{ name: "Kicking with his left foot", mastery: 10, masteryScale: 10,
					description: "Being ambidextrous is useful in soccer!",
					types: ["Other"]
				},
				{ name: "Ant", mastery: 9, masteryScale: 10,
					description: "Working with Salesforce, this has been a very useful way to run deployments as part of my CI tool chain.",
					types: ["Devops", "Salesforce"]
				},
				{ name: "Git", mastery: 9, masteryScale: 10,
					description: "Version Control is great. Version Control is good. BitBucket Pipelines is awesome.",
					types: ["DevOps"]
				},
				{ name: "Jenkins", mastery: 7, masteryScale: 10,
					description: "Version Control is great. Version Control is good. BitBucket Pipelines is awesome.",
					types: ["DevOps"]
				},
			]
		};
	},

	components: {
		appPageHeader: PageHeader,
		appSkill: Skill
	}
}
</script>