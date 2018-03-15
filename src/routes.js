import VueRouter from "vue-router";
import Home from "./components/HomePage";
import ExperiencePage from "./components/ExperiencePage";
import EducationPage from "./components/EducationPage";
import ProjectPage from "./components/ProjectPage";
import SkillsPage from "./components/SkillsPage";
import CertificationsPage from "./components/CertificationsPage";
import InterestsPage from "./components/InterestsPage";

const routes = [
	{
		path: "/",
		component: Home
	},
	{
		path: "/experience",
		component: ExperiencePage
	},
	{
		path: "/education",
		component: EducationPage
	},
	{
		path: "/project",
		component: ProjectPage
	},
	{
		path: "/skills",
		component: SkillsPage
	},
	{
		path: "/certifications",
		component: CertificationsPage
	},
	{
		path: "/interests",
		component: InterestsPage
	},
	{
		path: "*",
		redirect: "/"
	}
];

export default new VueRouter({
	mode: "history",
	routes
});
