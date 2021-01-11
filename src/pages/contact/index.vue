<template>
	<div class="contact-page flex-ct-y">
		<banner title="联系我们" :desc="desc" :cover="cover"></banner>
		<div class="contact-detail">
			<div class="contact-detail-info">
				<h3 class="contact-detail-title">广东金山百草健康产业有限公司</h3>
				<p class="contact-detail-desc">经理：张生</p>
				<p class="contact-detail-desc">手机：150-1986-3294</p>
				<p class="contact-detail-desc">传真：0750-2339183</p>
				<p class="contact-detail-desc">邮箱：231122895@qq.com</p>
				<p class="contact-detail-desc">地址：广东省开平市翠山湖新区环翠西路2号2座二楼3卡</p>
			</div>
			<a class="contact-detail-map flex-ct-x" href="https://map.baidu.com/poi/金山百草健康产业有限公司/@12541106.635,2547728.44,19z?uid=92e73f55f9ab4d8ae81e972e&info_merge=1&isBizPoi=false&ugc_type=3&ugc_ver=1&device_ratio=2&compat=1&querytype=detailConInfo&da_src=shareurl" target="_blank" data-title="点击查看导航"></a>
		</div>
	</div>
</template>

<style lang="scss">
.contact-detail {
	display: flex;
	overflow: hidden;
	margin-top: 150px;
	border-radius: 10px;
	width: 100%;
	max-width: 1200px;
	background-color: #fff;
	box-shadow: $box-shadow;
	@include autoResponse(pad) {
		margin-top: 50px;
	}
	@include autoResponse(mobile) {
		display: flex;
		flex-direction: column;
		margin-top: 1rem;
		width: 80%;
	}
	&-info,
	&-map {
		width: 50%;
		height: 450px;
		@include autoResponse(mobile) {
			width: 100%;
			height: 5.5rem;
		}
	}
	&-info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 50px;
		background-image: $linear-blue-green;
		color: #fff;
		@include autoResponse(mobile) {
			padding: .4rem;
		}
	}
	&-title {
		font-size: 30px;
		@include autoResponse(mobile) {
			text-align: center;
			font-size: .36rem;
		}
	}
	&-desc {
		line-height: 30px;
		font-size: 16px;
		&:first-of-type {
			margin-top: 30px;
		}
		@include autoResponse(mobile) {
			line-height: .6rem;
			font-size: .32rem;
			&:first-of-type {
				margin-top: .4rem;
			}
		}
	}
	&-map {
		background: url("../../assets/img/map.png") no-repeat center/cover;
		&::after {
			padding: 10px 15px;
			border-radius: 5px;
			background-color: rgba(#000, .5);
			font-weight: bold;
			font-size: 20px;
			color: #fff;
			content: attr(data-title);
		}
		@include autoResponse(mobile) {
			&::after {
				padding: .2rem .3rem;
				border-radius: .1rem;
				font-size: .32rem;
			}
		}
	}
}
</style>

<script>
import ImgBanner from "../../assets/img/bg/contact-bg.jpg";

export default {
	name: "contact",
	layout: "main",
	data() {
		return {
			cover: ImgBanner,
			desc: "坐拥广东省示范性产业转移工业园、广东省产业转移十大重点园区|美康泉生物科技有限公司位于开平市翠山湖工业园，隶属于香港天鹰国际控股有限公司。是一家集化妆品研发、生产、OEM/ODM于一体的国际化企业"
		};
	}
};
</script>