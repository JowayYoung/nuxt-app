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
}
.banner-title {
	padding-bottom: 20px;
	border-bottom: 5px solid $green;
	font-size: 40px;
	color: #fff;
}
.banner-desc {
	margin-top: 10px;
	text-shadow: $text-shadow;
	font-size: 16px;
	color: #fff;
	&:first-of-type {
		margin-top: 50px;
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