import VueRouter from "vue-router";
import Home from "./components/HomePage";
import ExperiencePage from "./components/ExperiencePage";

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
		path: "*",
		redirect: "/"
	}
];

export default new VueRouter({
	mode: "history",
	routes
});
