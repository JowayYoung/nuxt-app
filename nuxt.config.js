import Fibers from "fibers";
import Sass from "sass";

const BROWSERS = [
	"last 20 Chrome versions",
	"last 20 Firefox versions",
	"last 20 Opera versions",
	"Explorer >= 10",
	"Safari >= 8",
	"Android >= 5",
	"iOS >= 8"
];

export default {
	/** 应用构建 **/
	build: {
		loaders: {
			scss: {
				implementation: Sass,
				sassOptions: { fiber: Fibers }
			}
		},
		postcss: {
			preset: { browsers: BROWSERS }
		}
	},
	env: {
		RUN_ENV: process.env.RUN_ENV
	},
	mode: "universal",
	modules: [
		"@nuxtjs/axios",
		"@nuxtjs/style-resources"
	],
	server: {
		host: "127.0.0.1",
		port: 9898
	},
	srcDir: "src/",
	/** 文件骨架 **/
	components: true,
	css: [
		"@/assets/css/reset.css",
		"@/assets/css/main.scss"
	],
	head: {
		link: [
			{ rel: "icon", href: "/img/favicon.ico" }
		],
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1" }
		],
		title: "Nuxt App"
	},
	loading: {
		color: "#3c9",
		failedColor: "#f66"
	},
	styleResources: {
		scss: [
			"@/assets/css/theme.scss",
			"@/assets/css/mixin.scss"
		]
	},
	/** 网络请求 **/
	axios: {
		proxy: true,
		retry: { retries: 3 },
		timeout: 10000
	},
	proxy: {}
};