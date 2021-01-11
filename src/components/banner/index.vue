<template>
	<div class="banner-component flex-ct-y" :style="{ backgroundImage: `url(${cover})` }">
		<h3 class="banner-title">{{title}}</h3>
		<p v-for="v in descs" :key="v" class="banner-desc">{{v}}</p>
	</div>
</template>

<style lang="scss">
.banner-component {
	width: 100%;
	height: 350px;
	background: no-repeat center/cover;
	@include autoResponse(mobile) {
		height: 6rem;
	}
}
.banner-title {
	padding-bottom: 20px;
	border-bottom: 5px solid $green;
	font-size: 40px;
	color: #fff;
	@include autoResponse(mobile) {
		padding-bottom: .2rem;
		border-bottom-width: .06rem;
		font-size: .6rem;
	}
}
.banner-desc {
	padding: 0 20px;
	line-height: 30px;
	text-shadow: $text-shadow;
	font-size: 16px;
	color: #fff;
	&:first-of-type {
		margin-top: 50px;
	}
	@include autoResponse(mobile) {
		padding: 0 .4rem;
		line-height: .4rem;
		text-align: center;
		font-size: .24rem;
		&:first-of-type {
			margin-top: .5rem;
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