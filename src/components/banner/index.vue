<template>
	<div class="banner-component flex-ct-y" :style="{ backgroundImage: `url(${cover})` }">
		<h3 class="banner-title">{{title}}</h3>
		<p class="banner-desc tac">
			<span v-for="v in descs" :key="v" class="banner-desc-text">{{v}}</span>
		</p>
	</div>
</template>

<style lang="scss">
.banner-component {
	width: 100%;
	height: 350px;
	background: no-repeat center/cover;
	transition: all 300ms;
	@include autoResponse(mobile) {
		height: 6rem;
	}
}
.banner-title {
	padding-bottom: 20px;
	border-bottom: 5px solid $green;
	font-size: 40px;
	color: #fff;
	transition: all 300ms;
	@include autoResponse(mobile) {
		padding-bottom: .2rem;
		border-bottom-width: .06rem;
		font-size: .6rem;
	}
}
.banner-desc {
	padding: 50px 20px 0;
	line-height: 30px;
	text-shadow: $text-shadow;
	font-size: 16px;
	color: #fff;
	transition: all 300ms;
	@include autoResponse(mobile) {
		padding: .6rem .4rem 0;
		line-height: .6rem;
		font-size: .32rem;
	}
	&-text {
		display: block;
		@include autoResponse(pad) {
			display: inline;
		}
	}
}
</style>

<script>
export default {
	name: "banner",
	props: {
		cover: {
			default: "",
			type: String
		},
		desc: {
			default: "",
			type: String
		},
		title: {
			default: "标题",
			type: String
		}
	},
	computed: {
		descs() {
			return this.desc.split("|");
		}
	}
};
</script>