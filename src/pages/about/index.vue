<template>
	<div class="about-page">
		<navbar></navbar>
		<banner title="关于公司" :desc="desc" :cover="cover"></banner>
		<div class="about-company">
			<h3 class="gradient-title">公司简介</h3>
			<p class="about-company-desc">网易公司（NASDAQ: NTES），1997年由创始人兼CEO丁磊先生在广州创办，2000年在美国NASDAQ股票交易所挂牌上市，是中国领先的互联网技术公司。在开发互联网应用、服务及其它技术方面，始终保持中国业界领先地位。本着对中国互联网发展强烈的使命感，缔造美好生活的愿景，网易利用最先进的互联网技术，加强人与人之间信息的交流和共享。</p>
			<p class="about-company-desc">网易公司推出了门户网站、在线游戏、电子邮箱、在线教育、电子商务、在线音乐、网易bobo等多种服务。网易在广州天河智慧城的总部项目计划2019年1月建成，网易游戏总部将入驻。2016年，游戏业务营业收入在网易总营收中占比73.3%。2011年，网易杭州研究院启用。网易传媒等业务在北京。网易在杭州上线了网易考拉海购、网易云音乐等项目。</p>
			<p class="about-company-desc">网易2019全年财报显示，网易公司2019年全年净收入为592.4亿元；基于非美国通用会计准则，归属于网易公司股东的持续经营净利润为156.6亿元。</p>
			<p class="about-company-desc">2019年，网易深入推进战略聚焦，坚守内容消费领域，积极布局游戏、教育、音乐、电商等核心赛道，取得重大突破。在保持稳健增长的同时，网易有道、创新及其他等业务板块爆发强大潜力，为未来的长期发展提供源源不断的动能。</p>
		</div>
		<div class="about-progress">
			<ul></ul>
		</div>
		<copyright></copyright>
		<toolbar></toolbar>
	</div>
</template>

<style lang="scss">
.about-company {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50px 0;
}
.about-company-desc {
	margin-top: 20px;
	width: 1000px;
	line-height: 2;
	text-align: justify;
	text-indent: 2em;
	font-size: 16px;
	color: #666;
}
</style>

<script>
import ImgBanner from "../../assets/img/bg/about-bg.jpg";

export default {
	name: "about",
	data() {
		return {
			cover: ImgBanner,
			desc: "坐拥广东省示范性产业转移工业园、广东省产业转移十大重点园区|美康泉生物科技有限公司位于开平市翠山湖工业园，隶属于香港天鹰国际控股有限公司。是一家集化妆品研发、生产、OEM/ODM于一体的国际化企业"
		};
	}
};
</script>