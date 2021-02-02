<template>
	<div class="about-page flex-ct-y">
		<banner title="关于公司" :desc="desc" :cover="cover"></banner>
		<headline>公司简介</headline>
		<div class="about-company">
			<p class="about-company-desc">网易公司（NASDAQ: NTES），1997年由创始人兼CEO丁磊先生在广州创办，2000年在美国NASDAQ股票交易所挂牌上市，是中国领先的互联网技术公司。在开发互联网应用、服务及其它技术方面，始终保持中国业界领先地位。本着对中国互联网发展强烈的使命感，缔造美好生活的愿景，网易利用最先进的互联网技术，加强人与人之间信息的交流和共享。</p>
			<p class="about-company-desc">网易公司推出了门户网站、在线游戏、电子邮箱、在线教育、电子商务、在线音乐、网易bobo等多种服务。网易在广州天河智慧城的总部项目计划2019年1月建成，网易游戏总部将入驻。2016年，游戏业务营业收入在网易总营收中占比73.3%。2011年，网易杭州研究院启用。网易传媒等业务在北京。网易在杭州上线了网易考拉海购、网易云音乐等项目。</p>
			<p class="about-company-desc">网易2019全年财报显示，网易公司2019年全年净收入为592.4亿元；基于非美国通用会计准则，归属于网易公司股东的持续经营净利润为156.6亿元。</p>
			<p class="about-company-desc">2019年，网易深入推进战略聚焦，坚守内容消费领域，积极布局游戏、教育、音乐、电商等核心赛道，取得重大突破。在保持稳健增长的同时，网易有道、创新及其他等业务板块爆发强大潜力，为未来的长期发展提供源源不断的动能。</p>
		</div>
		<headline>创始人简介</headline>
		<div class="about-boss">
			<div class="about-boss-cover pr"></div>
			<div class="about-boss-summary pr">
				<h3 class="about-boss-title pr tac">张景耀</h3>
				<p class="about-boss-desc">张景耀先生是天鹰国际企业集团总裁，广东省民营企业文化协会常务理事，广州市私营企业协会理事，广东省电子商务协会副会长，芙蔓诗、柏丽源、三日爱、爱之弦、玛露娜、皇子御肤、宫健美、达琪蜜、舒雅安等品牌创始人。</p>
				<p class="about-boss-desc">张景耀先生长期关注民生问题，强调现代企业的社会责任。他不仅要求柏丽源产品研发生产上严格执行国际标准，还要求在日常生活和工作中把社会责任纳入企业的文化建设。</p>
				<a class="about-boss-link center tac" href="https://baike.baidu.com/item/张景耀/17181381">了解详情</a>
			</div>
		</div>
		<headline>发展历史</headline>
		<div class="about-progress">
			<ul class="about-progress-timeline">
				<li v-for="(v, i) in list" :key="v.year" :class="['about-progress-year pr flex-ct-x', { active: i === index }]" @click="e => select(e, i)">{{v.year}}</li>
			</ul>
			<div class="about-progress-summary swiper-container swiper-container-initialized swiper-container-vertical">
				<div class="swiper-wrapper">
					<div v-for="v in list" :key="v.year" class="about-progress-summary-item swiper-slide">
						<h3 class="about-progress-title pr">
							<span class="about-progress-title-core">{{v.title || "暂无标题"}}</span>
							<small class="about-progress-title-year">{{v.year}}</small>
						</h3>
						<p v-for="w in v.desc" :key="w" class="about-progress-desc">{{w}}</p>
						<img class="about-progress-cover" src="https://imagegroup1.haier.com/about-haier/history/pic/W020200623520622322874.jpg">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.about-company {
	width: 100%;
	max-width: 1200px;
	@include autoResponse(pad) {
		padding: 0 40px;
	}
	@include autoResponse(mobile) {
		padding: 0 .4rem;
	}
	&-desc {
		line-height: 30px;
		text-align: justify;
		text-indent: 2em;
		font-size: 16px;
		color: #666;
		& + .about-company-desc {
			margin-top: 20px;
		}
		@include autoResponse(mobile) {
			line-height: .6rem;
			font-size: .32rem;
			& + .about-company-desc {
				margin-top: .4rem;
			}
		}
	}
}
.about-boss {
	display: flex;
	justify-content: space-between;
	width: 100%;
	max-width: 1200px;
	@include autoResponse(pad) {
		padding: 0 40px;
	}
	@include autoResponse(mobile) {
		display: block;
		padding: 0 .4rem;
	}
	&-cover {
		width: 600px;
		height: 450px;
		background: url("../../assets/img/character.jpg") no-repeat center/100% auto;
		&::after {
			position: absolute;
			left: 20px;
			right: 20px;
			top: 20px;
			bottom: 20px;
			border: 1px solid #fff;
			opacity: .5;
			content: '';
		}
		@include autoResponse(mobile) {
			width: 100%;
			height: 6rem;
			&::after {
				left: .4rem;
				right: .4rem;
				top: .4rem;
				bottom: .4rem;
			}
		}
	}
	&-summary {
		display: flex;
		flex-direction: column;
		padding-top: 20px;
		width: 550px;
		@include autoResponse(mobile) {
			padding-top: .6rem;
			width: 100%;
		}
	}
	&-title {
		padding-bottom: 30px;
		border-bottom: 1px solid #ccc;
		font-size: 24px;
		color: #666;
		&::after {
			position: absolute;
			left: 50%;
			bottom: 0;
			margin-left: -100px;
			width: 200px;
			height: 3px;
			background-color: $blue;
			content: "";
		}
		@include autoResponse(mobile) {
			padding-bottom: .6rem;
			font-size: .48rem;
			&::after {
				margin-left: -2rem;
				width: 4rem;
				height: .06rem;
			}
		}
	}
	&-desc {
		margin-top: 20px;
		padding: 0 20px;
		line-height: 30px;
		text-align: justify;
		text-indent: 2em;
		font-size: 18px;
		color: #666;
		@include autoResponse(mobile) {
			margin-top: .4rem;
			padding: 0;
			line-height: .6rem;
			font-size: .36rem;
		}
	}
	&-link {
		margin-top: auto;
		width: 200px;
		height: 50px;
		background-image: $linear-blue-green;
		line-height: 50px;
		font-size: 20px;
		color: #fff;
		transition: all 300ms;
		&:hover {
			opacity: .7;
		}
		@include autoResponse(mobile) {
			margin-top: .4rem;
			width: 4rem;
			height: 1rem;
			line-height: 1rem;
			font-size: .4rem;
		}
	}
}
.about-progress {
	display: flex;
	overflow: hidden;
	border-radius: 10px;
	width: 100%;
	max-width: 1200px;
	height: 600px;
	background-color: #fff;
	color: #fff;
	&-timeline {
		overflow: auto;
		border-right: 1px solid #ccc;
		border-top: 20px solid #fff;
		border-bottom: 20px solid #fff;
		width: 120px;
		&::-webkit-scrollbar-thumb {
			background-image: none;
		}
	}
	&-summary {
		flex: 1;
		&-item {
			overflow: auto;
			padding: 20px 40px;
		}
	}
	&-year {
		height: 40px;
		cursor: pointer;
		font-size: 16px;
		color: #666;
		transition: all 300ms;
		&::before {
			position: relative;
			z-index: 9;
			margin-right: 10px;
			border-radius: 100%;
			width: 9px;
			height: 9px;
			background-color: #ccc;
			content: "";
			transition: all 300ms;
		}
		&::after {
			position: absolute;
			left: 33px;
			top: 0;
			width: 1px;
			height: 100%;
			background-color: #ccc;
			content: "";
		}
		&.active {
			height: 60px;
			font-weight: bold;
			color: $blue;
			&::before {
				padding: 3px;
				border: 1px solid $blue;
				width: 19px;
				height: 19px;
				background-color: $blue;
				background-clip: content-box;
			}
		}
	}
	&-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 60px;
		&::after {
			position: absolute;
			left: 0;
			bottom: 0;
			width: 160px;
			height: 4px;
			background-image: $linear-blue-green;
			content: "";
		}
		&-core {
			background-image: $linear-blue-green;
			background-clip: text;
			font-size: 40px;
			color: transparent;
		}
		&-year {
			font-size: 30px;
			color: #666;
		}
	}
	&-desc {
		padding: 20px 0 10px;
		border-bottom: 1px dashed #ccc;
		line-height: 30px;
		text-align: justify;
		font-size: 16px;
		color: #666;
		&:first-of-type {
			padding-top: 40px;
		}
	}
	&-cover {
		margin: 10px auto;
		border-radius: 5px;
		max-width: 500px;
	}
}
</style>

<script>
import Swiper from "swiper";

import "../../assets/css/swiper.css";
import ImgBanner from "../../assets/img/bg/about-bg.jpg";
import JsonAbout from "../../assets/json/about.json";

export default {
	name: "about",
	layout: "main",
	data() {
		const timeline = JsonAbout.reverse();
		return {
			cover: ImgBanner,
			desc: "坐拥广东省示范性产业转移工业园、广东省产业转移十大重点园区|美康泉生物科技有限公司位于开平市翠山湖工业园，隶属于香港天鹰国际控股有限公司。是一家集化妆品研发、生产、OEM/ODM于一体的国际化企业",
			list: timeline,
			index: 0
		};
	},
	mounted() {
		const self = this;
		this.swiper = this.swiper = new Swiper(".about-progress-summary", {
			direction: "vertical",
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			on: {
				slideChangeTransitionEnd() {
					self.index = this.activeIndex;
					document.querySelector(`.about-progress-year:nth-child(${self.index + 1})`).scrollIntoView({ behavior: "smooth" });
				}
			},
			speed: 500
		});
	},
	methods: {
		select(e, i) {
			this.index = i;
			e.target.scrollIntoView({ behavior: "smooth" });
			this.swiper.slideTo(i, 500);
		}
	}
};
</script>