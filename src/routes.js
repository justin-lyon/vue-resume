import VueRouter from "vue-router";
import Home from "./components/HomePage";
import Experience from "./components/sections/Experience";

const routes = [
	{
		path: "/",
		component: Home
	},
	{
		path: "/experience",
		component: Experience
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
