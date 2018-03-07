import VueRouter from "vue-router";
import Home from "./components/HomePage";
import ExperiencePage from "./components/ExperiencePage";
import EducationPage from "./components/EducationPage";

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
		path: "*",
		redirect: "/"
	}
];

export default new VueRouter({
	mode: "history",
	routes
});
