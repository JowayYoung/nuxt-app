<template>
	<div class="copyright-component">
		<div class="copyright-topbox pr">
			<nav class="copyright-nav">
				<h3 class="copyright-nav-title">网站导航</h3>
				<nuxt-link v-for="v in router" :key="v.id" :to="v.path" class="copyright-nav-item">{{v.name}}</nuxt-link>
			</nav>
			<nav class="copyright-nav">
				<h3 class="copyright-nav-title">友情链接</h3>
				<a class="copyright-nav-item" href="meikangquan.com">柏丽源</a>
				<a class="copyright-nav-item" href="meikangquan.com">美康泉</a>
			</nav>
			<nav class="copyright-nav">
				<h3 class="copyright-nav-title">客服热线</h3>
				<a class="copyright-nav-item" href="meikangquan.com">微信客服</a>
				<a class="copyright-nav-item" href="meikangquan.com">QQ客服</a>
			</nav>
			<figure class="copyright-qrcode abs-cy">
				<figcaption class="copyright-contact">
					<p>金山百草</p>
					<p>0750-2339183</p>
					<p>广东省·江门市·开平市</p>
					<p>翠山湖新区西湖二路1号E7栋</p>
				</figcaption>
				<img src="https://static.o-home.com/cjzs/views/web/layouts/img/QR_code_4be446d.png">
			</figure>
		</div>
		<div class="copyright-bottombox">
			<span>©&nbsp;2018-2021&nbsp;YuyangIT</span>
			<a class="copyright-link" href="http://www.beian.miit.gov.cn">粤ICP备18146613号</a>
		</div>
	</div>
</template>

<style lang="scss">
.copyright-component {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 225px;
	background-color: #282c34;
}
.copyright-topbox {
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: 1;
	width: 1200px;
}
.copyright-bottombox {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 40px;
	background-color: #181818;
	color: #ccc;
}
.copyright-nav {
	display: flex;
	align-items: center;
	line-height: 40px;
}
.copyright-nav-title {
	margin-right: 40px;
	font-size: 16px;
	color: #fff;
}
.copyright-nav-item {
	position: relative;
	font-size: 12px;
	color: #fff;
	&:hover {
		text-decoration: underline;
	}
	& + .copyright-nav-item {
		margin-left: 40px;
		&::before {
			position: absolute;
			right: 100%;
			top: 50%;
			margin-right: 20px;
			margin-top: -10px;
			width: 1px;
			height: 20px;
			background-color: #ccc;
			content: "";
			transform: scale(.5);
		}
	}
}
.copyright-qrcode {
	display: flex;
	right: 0;
}
.copyright-contact {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	margin-right: 20px;
	width: 220px;
	line-height: 28px;
	font-weight: bold;
	font-size: 14px;
	color: $green;
}
.copyright-link {
	margin-left: 10px;
	color: #666;
	&:hover {
		text-decoration: underline;
	}
}
</style>

<script>
import { ROUTER } from "../../utils/getting";

export default {
	name: "copyright",
	data() {
		return { router: ROUTER };
	}
};
</script>