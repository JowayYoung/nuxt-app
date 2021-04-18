<template>
	<div class="news-page flex-ct-y">
		<banner title="新闻事件" :desc="desc" :cover="cover"></banner>
		<headline>热点资讯</headline>
		<nav class="news-info">
			<nuxt-link v-for="v in list" :key="v.id" class="news-info-item pr" :to="`/news/${v.id}`">
				<i class="news-info-cover pa" :style="{ backgroundImage: `url(${v.cover})`}"></i>
				<h3 class="news-info-title ellipsis">{{v.title}}</h3>
				<p class="news-info-desc">{{v.desc[0]}}</p>
				<small class="news-info-date tar">{{v.date}}</small>
			</nuxt-link>
		</nav>
		<headline>媒体联系</headline>
		<ul class="news-contact">
			<li class="news-contact-way interview">
				<h3 class="news-contact-title">采访联系</h3>
				<a class="news-contact-btn flex-ct-x" @click="isTel = true">150-1986-3294</a>
			</li>
			<li class="news-contact-way question">
				<h3 class="news-contact-title">媒体垂询</h3>
				<p class="news-contact-desc" @click="isEmail = true">如有任何疑问，请发送邮件给我们留言<br>我们的邮箱是 <b class="blue">231122895@qq.com</b></p>
			</li>
		</ul>
		<popup v-model="isTel" title="请拨打至：150-1986-3294"></popup>
		<popup v-model="isEmail" title="请发送至：231122895@qq.com"></popup>
	</div>
</template>

<style lang="scss">
.news-info {
	overflow: hidden;
	width: 100%;
	max-width: 1200px;
	transition: all 300ms;
	@include autoResponse(pad) {
		padding: 0 40px;
	}
	@include autoResponse(mobile) {
		padding: 0 .4rem;
	}
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
		@include autoResponse(mobile) {
			padding: .3rem;
			border-radius: .2rem;
			height: auto;
			& + .news-info-item {
				margin-top: .4rem;
				border-top: none;
			}
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
		transition: all 300ms;
		@include autoResponse(mobile) {
			position: static;
			margin-left: 0;
			border-radius: .1rem;
			width: 100%;
			height: 3rem;
		}
	}
	&-title {
		padding: 10px 0;
		font-size: 20px;
		transition: all 300ms;
		@include autoResponse(mobile) {
			padding: .4rem 0 .2rem;
			font-size: .4rem;
		}
	}
	&-desc {
		display: -webkit-box;
		overflow: hidden;
		line-height: 30px;
		-webkit-line-clamp: 3;
		text-align: justify;
		text-indent: 2em;
		color: #666;
		-webkit-box-orient: vertical;
		transition: all 300ms;
		@include autoResponse(mobile) {
			line-height: .5rem;
			text-indent: 0;
			font-size: .28rem;
		}
	}
	&-date {
		margin-top: auto;
		font-size: 12px;
		color: $blue;
		transition: all 300ms;
		@include autoResponse(mobile) {
			position: absolute;
			right: .3rem;
			top: .3rem;
			margin-top: 0;
			padding: .1rem .2rem;
			border-top-right-radius: .1rem;
			background-color: rgba(#000, .5);
			font-size: .24rem;
			color: #fff;
		}
	}
}
.news-contact {
	display: flex;
	justify-content: space-between;
	width: 100%;
	max-width: 1200px;
	transition: all 300ms;
	@include autoResponse(pad) {
		padding: 0 40px;
	}
	@include autoResponse(mobile) {
		display: block;
		padding: 0 .4rem;
	}
	&-way {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-left: 60px;
		border-radius: 10px;
		width: calc((100% - 40px) / 2);
		height: 200px;
		background: no-repeat right center/auto 100%;
		box-shadow: $box-shadow;
		transition: all 300ms;
		&.interview {
			background-image: url("../../assets/img/news-interview.png");
		}
		&.question {
			background-image: url("../../assets/img/news-question.png");
		}
		@include autoResponse(mobile) {
			align-items: center;
			padding-left: 0;
			width: 100%;
			& + .news-contact-way {
				margin-top: .4rem;
			}
		}
	}
	&-title {
		margin-bottom: 40px;
		font-size: 28px;
		transition: all 300ms;
		@include autoResponse(mobile) {
			margin-bottom: .6rem;
			text-shadow: $text-shadow;
			font-size: .56rem;
			color: #fff;
		}
	}
	&-btn {
		border: 1px solid #005aab;
		border-image: $linear-blue-green 10 10;
		width: 150px;
		height: 40px;
		background-color: transparent;
		cursor: pointer;
		font-weight: bold;
		font-size: 16px;
		color: $blue;
		transition: all 300ms;
		&:active {
			opacity: .7;
		}
		@include autoResponse(mobile) {
			border: none;
			border-radius: .2rem;
			width: 3rem;
			height: .8rem;
			background-image: $linear-blue-green;
			font-size: .32rem;
			color: #fff;
		}
	}
	&-desc {
		cursor: pointer;
		line-height: 20px;
		text-align: justify;
		color: #666;
		transition: all 300ms;
		@include autoResponse(mobile) {
			line-height: .4rem;
			text-shadow: $text-shadow;
			font-size: .28rem;
			color: #fff;
		}
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
			isEmail: false,
			isTel: false,
			list: JsonNews
		};
	}
};
</script>