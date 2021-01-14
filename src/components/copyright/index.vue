<template>
	<div class="copyright-component">
		<div class="copyright-nav pr center">
			<nav class="copyright-nav-item">
				<h3 class="copyright-nav-title">网站导航</h3>
				<nuxt-link v-for="v in router" :key="v.id" :to="v.path" class="copyright-nav-link">{{v.name}}</nuxt-link>
			</nav>
			<nav class="copyright-nav-item">
				<h3 class="copyright-nav-title">友情链接</h3>
				<a class="copyright-nav-link" href="meikangquan.com">柏丽源</a>
				<a class="copyright-nav-link" href="meikangquan.com">美康泉</a>
			</nav>
			<nav class="copyright-nav-item">
				<h3 class="copyright-nav-title">客服热线</h3>
				<a class="copyright-nav-link" href="meikangquan.com">微信客服</a>
				<a class="copyright-nav-link" href="meikangquan.com">QQ客服</a>
			</nav>
			<figure class="copyright-nav-qrcode abs-cy">
				<figcaption class="copyright-nav-contact">
					<p>金山百草</p>
					<p>0750-2339183</p>
					<p>广东省·江门市·开平区</p>
					<p>翠山湖新区环翠西路2号2座二楼3卡</p>
				</figcaption>
				<img src="@/assets/img/qrcode/contact.png">
			</figure>
		</div>
		<div class="copyright-statement">
			<span class="copyright-statement-desc">Copyright © 2021 广东金山百草健康产业有限公司 版权所有</span>
			<a class="copyright-statement-mark" href="https://beian.miit.gov.cn">粤ICP备18146613号</a>
		</div>
	</div>
</template>

<style lang="scss">
.copyright-component {
	width: 100%;
	background-color: #282c34;
}
.copyright-nav {
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 20px;
	width: 100%;
	max-width: 1200px;
	height: 180px;
	@include autoResponse(mobile) {
		display: none;
	}
	&-item {
		display: flex;
		align-items: center;
		line-height: 40px;
	}
	&-title {
		margin-right: 40px;
		font-size: 16px;
		color: #fff;
	}
	&-link {
		position: relative;
		font-size: 12px;
		color: #fff;
		&:hover {
			text-decoration: underline;
		}
		& + .copyright-nav-link {
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
	&-qrcode {
		display: flex;
		right: 20px;
		@include autoResponse(pad) {
			display: none;
		}
	}
	&-contact {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
		margin-right: 20px;
		width: 220px;
		line-height: 30px;
		font-weight: bold;
		color: $green;
	}
}
.copyright-statement {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 40px;
	background-color: #181818;
	color: #fff;
	@include autoResponse(mobile) {
		height: .8rem;
	}
	&-desc {
		margin-right: 10px;
		@include autoResponse(mobile) {
			display: none;
		}
	}
	&-mark {
		color: #666;
		&:hover {
			text-decoration: underline;
		}
		@include autoResponse(mobile) {
			font-size: .28rem;
			&::before {
				color: #fff;
				content: "Copyright © 2021 金山百草 ";
			}
		}
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