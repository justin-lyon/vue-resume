import VueRouter from "vue-router";
import Home from "./components/HomePage";
import ExperiencePage from "./components/ExperiencePage";
import EducationPage from "./components/EducationPage";
import ProjectPage from "./components/ProjectPage";

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
		path: "*",
		redirect: "/"
	}
];

export default new VueRouter({
	mode: "history",
	routes
});
