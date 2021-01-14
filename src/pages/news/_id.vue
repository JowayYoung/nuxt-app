<template>
	<div class="news-item-page flex-ct-y">
		<banner title="新闻事件" :desc="desc" :cover="cover"></banner>
		<template v-if="item">
			<headline size="small">{{item.title}}</headline>
			<small class="news-item-date">{{item.date}} 由金山百草小编整理与编辑</small>
			<article class="new-item-body">
				<p class="new-item-body-text">5月13日，全球最具影响力的权威商业杂志之一——《福布斯》发布2020年上市公司2000强榜单。其中，碧桂园集团位列第111名，较2019年排名上升18位。</p>
				<img class="new-item-body-cover" src="https://ecs.o-home.com/ueditor/php/upload/image/20200629/1593421789748751.jpg">
				<p class="new-item-body-text">《福布斯》全球上市公司2000强，与《财富》世界500强并称全球最具权威的两大商业公司排行榜。前者依据企业的销售额、利润、总资产和市值四大指标进行衡量，综合评选出全球规模最大、实力最强的上市企业。</p>
				<p class="new-item-body-text">此次，碧桂园以701亿美元销售额、57亿美元利润、2738亿美元总资产和278亿美元市值，继续稳居榜单200强。自2010年入选该榜单以来，碧桂园已连续第11年实现排名提升，展现出强劲的发展势头。</p>
				<img class="new-item-body-cover" src="https://ecs.o-home.com/ueditor/php/upload/image/20200629/1593421797447235.jpg">
				<p class="new-item-body-text">本次发布的榜单中，中国共有367家企业上榜，比去年增加58家，其中，中国内地、中国香港和中国台湾分别为266家、58家和43家。</p>
				<p class="new-item-body-text">年报数据显示，2019年，碧桂园实现归属公司股东权益的合同额约人民币5522亿元，实现总收入约4859.1亿元，同比分别增长10%和28.2%，继续领跑行业。</p>
				<p class="new-item-body-text">碧桂园的高质量发展也备受多方权威机构认可，在《财富》2019年度世界500强榜单中，碧桂园位列177名，成为当年度榜单中排名跃升最快的企业。</p>
				<p class="new-item-body-text">目前，碧桂园已获国际权威信用评级机构——惠誉给予投资级的BBB-企业信用评级，标普及穆迪也分别给予碧桂园BB+及Ba1评级，距投资级均只有一级之遥。2019年8月，穆迪又将对碧桂园的展望由“稳定”调升至“正面”，反映出市场对于碧桂园未来发展的信心。</p>
				<p class="new-item-body-text">不久前，国际投行摩根大通发布研报称，对碧桂园维持增持评级，目标价为14.5港元。“在大型房企中，我们首选碧桂园等企业，其拥有强大的内控体系和土地储备，这让公司能够更快地增长。”中银国际对碧桂园评级为“强推买入”，给出17.86港元目标价，并指出，碧桂园预计会在其7000亿的未确收收入上绽放光芒，成为行业中有最大隐藏价值的开发商。</p>
				<img class="new-item-body-cover" src="https://ecs.o-home.com/ueditor/php/upload/image/20200629/1593421824309145.jpg">
				<p class="new-item-body-text">目前，碧桂园已获国际权威信用评级机构——惠誉给予投资级的BBB-企业信用评级，标普及穆迪也分别给予碧桂园BB+及Ba1评级，距投资级均只有一级之遥。2019年8月，穆迪又将对碧桂园的展望由“稳定”调升至“正面”，反映出市场对于碧桂园未来发展的信心。</p>
				<p class="new-item-body-text">不久前，国际投行摩根大通发布研报称，对碧桂园维持增持评级，目标价为14.5港元。“在大型房企中，我们首选碧桂园等企业，其拥有强大的内控体系和土地储备，这让公司能够更快地增长。”中银国际对碧桂园评级为“强推买入”，给出17.86港元目标价，并指出，碧桂园预计会在其7000亿的未确收收入上绽放光芒，成为行业中有最大隐藏价值的开发商。</p>
			</article>
		</template>
	</div>
</template>

<style lang="scss">
.news-item-date {
	font-size: 12px;
	color: #666;
	@include autoResponse(mobile) {
		font-size: .24rem;
	}
}
.new-item-body {
	width: 100%;
	max-width: 1200px;
	@include autoResponse(pad) {
		padding: 0 40px;
	}
	@include autoResponse(mobile) {
		padding: 0 .4rem;
	}
	&-text {
		margin-top: 30px;
		line-height: 30px;
		text-indent: 2em;
		font-size: 16px;
		word-break: break-all;
		@include autoResponse(mobile) {
			margin-top: .6rem;
			line-height: .6rem;
			font-size: .32rem;
		}
	}
	&-cover {
		margin: 30px auto 0;
		border-radius: 10px;
		max-width: 100%;
		box-shadow: $box-shadow;
		@include autoResponse(mobile) {
			margin-top: .6rem;
			border-radius: .2rem;
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
			item: null,
			list: JsonNews
		};
	},
	mounted() {
		const { id } = this.$route.params;
		this.item = this.list.find(v => v.id === +id);
	}
};
</script>