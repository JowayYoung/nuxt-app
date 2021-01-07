<template>
	<div class="news-page">
		<navbar></navbar>
		<banner title="新闻事件" :desc="desc" :cover="cover"></banner>
		<nav class="news-list">
			<nuxt-link v-for="v in news" :key="v.id" class="news-item pr" :to="`/news/${v.id}`">
				<i :style="{ backgroundImage: `url(${v.cover})`}"></i>
				<h3 class="ellipsis">{{v.title}}</h3>
				<p>{{v.desc}}</p>
				<small>{{v.time}}</small>
			</nuxt-link>
		</nav>
		<copyright></copyright>
		<toolbar></toolbar>
	</div>
</template>

<style lang="scss">
.news-page {
	background-color: #f0f0f0;
}
.news-list {
	overflow: hidden;
	margin: 50px auto;
	border-radius: 10px;
	width: 1000px;
}
.news-item {
	display: flex;
	overflow: hidden;
	flex-direction: column;
	padding: 25px 25px 25px 400px;
	height: 200px;
	background-color: #fff;
	color: #333;
	transition: all 300ms;
	& + .news-item {
		border-top: 1px solid #f0f0f0;
	}
	i {
		position: absolute;
		margin-left: -375px;
		border-radius: 5px;
		width: 350px;
		height: 150px;
		background: no-repeat center/cover;
		box-shadow: 3px 4px 12px 0 rgba(#000, .2);
	}
	h3 {
		padding: 10px 0;
		font-size: 20px;
		transition: all 300ms;
	}
	p {
		display: -webkit-box;
		overflow: hidden;
		line-height: 2;
		-webkit-line-clamp: 3;
		text-indent: 2em;
		color: #666;
		-webkit-box-orient: vertical;
	}
	small {
		margin-top: auto;
		text-align: right;
		color: $blue;
	}
	&:hover {
		background-color: #f0f0f0;
		h3 {
			color: $green;
		}
	}
}
</style>

<script>
import ImgBanner from "../../assets/img/bg/news-bg.jpg";
import JsonNews from "../../assets/json/news.json";

export default {
	name: "news",
	data() {
		return {
			cover: ImgBanner,
			desc: "坐拥广东省示范性产业转移工业园、广东省产业转移十大重点园区|美康泉生物科技有限公司位于开平市翠山湖工业园，隶属于香港天鹰国际控股有限公司。是一家集化妆品研发、生产、OEM/ODM于一体的国际化企业",
			news: JsonNews
		};
	}
};
</script>