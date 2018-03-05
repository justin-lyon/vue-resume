import VueRouter from "vue-router";
import Home from "./components/HomePage";

const routes = [
	{
		path: "/",
		component: Home
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
