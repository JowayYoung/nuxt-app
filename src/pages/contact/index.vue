<template>
	<div class="contact-page">
		<navbar></navbar>
		<banner
			title="联系我们"
			desc="坐拥广东省示范性产业转移工业园、广东省产业转移十大重点园区|美康泉生物科技有限公司位于开平市翠山湖工业园，隶属于香港天鹰国际控股有限公司。是一家集化妆品研发、生产、OEM/ODM于一体的国际化企业"
			bgimg="https://static.o-home.com/cjzs/views/web/contact/img/banner_413733d.jpg"
		></banner>
		<div class="contact-detail">
			<div class="contact-detail-left">
				<h3 class="contact-detail-title">广东金山百草健康产业有限公司</h3>
				<p class="contact-detail-desc">经理：张生</p>
				<p class="contact-detail-desc">手机：150-1986-3294</p>
				<p class="contact-detail-desc">传真：0750-2339183</p>
				<p class="contact-detail-desc">邮箱：231122895@qq.com</p>
				<p class="contact-detail-desc">地址：广东省开平市翠山湖新区环翠西路2号2座二楼3卡</p>
			</div>
			<a class="contact-detail-right flex-ct-x" href="https://map.baidu.com/poi/%E9%87%91%E5%B1%B1%E7%99%BE%E8%8D%89%E5%81%A5%E5%BA%B7%E4%BA%A7%E4%B8%9A%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/@12541106.635,2547728.44,19z?uid=92e73f55f9ab4d8ae81e972e&info_merge=1&isBizPoi=false&ugc_type=3&ugc_ver=1&device_ratio=2&compat=1&querytype=detailConInfo&da_src=shareurl" data-title="点击查看导航"></a>
		</div>
		<copyright></copyright>
	</div>
</template>

<style lang="scss">
.contact-page {
	background-color: #f0f0f0;
}
.contact-detail {
	display: flex;
	overflow: hidden;
	margin: 100px auto;
	border-radius: 10px;
	width: 1200px;
	height: 450px;
	background-color: #fff;
	box-shadow: $box-shadow;
	transition: all 300ms;
	&:hover {
		transform: translate3d(0, -5px, 0);
	}
}
.contact-detail-left,
.contact-detail-right {
	width: 50%;
}
.contact-detail-left {
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 50px;
	background-image: linear-gradient(135deg, $blue, $green);
	color: #fff;
}
.contact-detail-title {
	font-size: 30px;
}
.contact-detail-desc {
	margin-top: 15px;
	font-size: 16px;
	&:first-of-type {
		margin-top: 30px;
	}
}
.contact-detail-right {
	background: url("https://img01.yun300.cn/img/agsdasgads.jpg?tenantId=186807&viewType=1&k=1607684626000") no-repeat center/cover;
	&::after {
		padding: 10px 15px;
		border-radius: 5px;
		background-color: rgba(#000, .5);
		font-weight: bold;
		font-size: 20px;
		color: #fff;
		content: attr(data-title);
	}
}
</style>

<script>
export default {
	name: "contact"
};
</script>