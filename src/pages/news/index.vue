<template>
	<div class="news-page flex-ct-y">
		<banner title="新闻事件" :desc="desc" :cover="cover"></banner>
		<headline>热点资讯</headline>
		<nav class="news-info">
			<nuxt-link v-for="v in news" :key="v.id" class="news-info-item pr" :to="`/news/${v.id}`">
				<i class="news-info-cover pa" :style="{ backgroundImage: `url(${v.cover})`}"></i>
				<h3 class="news-info-title ellipsis">{{v.title}}</h3>
				<p class="news-info-desc">{{v.desc}}</p>
				<small class="news-info-date tar">{{v.date}}</small>
			</nuxt-link>
		</nav>
		<headline>媒体联系</headline>
		<ul class="news-contact">
			<li class="news-contact-way interview">
				<h3 class="news-contact-title">采访联系</h3>
				<a class="news-contact-btn tac" @click="isTel = true">150-1986-3294</a>
			</li>
			<li class="news-contact-way question">
				<h3 class="news-contact-title">媒体垂询</h3>
				<p class="news-contact-desc">如有任何疑问，请发送邮件给我们留言<br>我们的邮箱是 <b class="blue">231122895@qq.com</b></p>
			</li>
		</ul>
		<popup v-model="isTel" title="请拨打：150-1986-3294"></popup>
	</div>
</template>

<style lang="scss">
.news-info {
	overflow: hidden;
	border-radius: 10px;
	width: 1200px;
	&-item {
		display: flex;
		overflow: hidden;
		flex-direction: column;
		padding: 25px 25px 25px 400px;
		height: 200px;
		background-color: #fff;
		color: #333;
		transition: all 300ms;
		& + .news-info-item {
			border-top: 1px solid #f0f0f0;
		}
		&:hover {
			background-color: transparent;
			.news-info-title {
				color: $green;
			}
			.news-info-date {
				font-weight: bold;
				font-size: 16px;
			}
		}
	}
	&-cover {
		margin-left: -375px;
		border-radius: 5px;
		width: 350px;
		height: 150px;
		background: no-repeat center/cover;
		box-shadow: 3px 4px 12px 0 rgba(#000, .5);
	}
	&-title {
		padding: 10px 0;
		font-size: 20px;
		transition: all 300ms;
	}
	&-desc {
		display: -webkit-box;
		overflow: hidden;
		line-height: 2;
		-webkit-line-clamp: 3;
		text-align: justify;
		text-indent: 2em;
		font-size: 14px;
		color: #666;
		-webkit-box-orient: vertical;
	}
	&-date {
		margin-top: auto;
		font-size: 12px;
		color: $blue;
		transition: all 300ms;
	}
}
.news-contact {
	display: flex;
	justify-content: space-between;
	width: 1200px;
	&-way {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-left: 60px;
		border-radius: 10px;
		width: 580px;
		height: 240px;
		background: no-repeat right center/auto 100%;
		box-shadow: $box-shadow;
		&.interview {
			background-image: url("../../assets/img/news-interview.png");
		}
		&.question {
			background-image: url("../../assets/img/news-question.png");
		}
	}
	&-title {
		margin-bottom: 40px;
		font-size: 28px;
	}
	&-btn {
		border: 1px solid #005aab;
		border-image: $linear-blue-green 10 10;
		width: 150px;
		height: 40px;
		background-color: transparent;
		cursor: pointer;
		line-height: 38px;
		font-weight: bold;
		font-size: 16px;
		color: $blue;
	}
	&-desc {
		line-height: 20px;
		text-align: justify;
		color: #666;
	}
}
</style>

<script>
import ImgBanner from "../../assets/img/bg/news-bg.jpg";
import JsonNews from "../../assets/json/news.json";

export default {
	name: "news",
	layout: "main",
	data() {
		return {
			cover: ImgBanner,
			desc: "坐拥广东省示范性产业转移工业园、广东省产业转移十大重点园区|美康泉生物科技有限公司位于开平市翠山湖工业园，隶属于香港天鹰国际控股有限公司。是一家集化妆品研发、生产、OEM/ODM于一体的国际化企业",
			isTel: false,
			news: JsonNews
		};
	}
};
</script>