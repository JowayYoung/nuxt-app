<template>
	<div class="home-page">
		<navbar></navbar>
		<swiper :list="banner"></swiper>
	</div>
</template>

<style lang="scss">
.home-page {
	background-color: #282c34;
}
</style>

<script>
export default {
	name: "home",
	data() {
		return {
			banner: [
				{ img: "https://site-cdn.huami.com/files/2/4/7/pc-banner-gtr2.png", link: "https://baidu.com" },
				{ img: "https://site-cdn.huami.com/files/6/5/e/pc-banner-zenbuds.jpg", link: "https://baidu.com" },
				{ img: "https://site-cdn.huami.com/files/a/2/5/banner-neo-pc-1.jpg", link: "https://baidu.com" },
				{ img: "https://site-cdn.huami.com/files/1/9/e/banner-bips-pc.jpg", link: "https://baidu.com" },
				{ img: "https://site-cdn.huami.com/files/0/1/8/stratos-3-lite.jpg", link: "https://baidu.com" }
			]
		};
	}
};
</script>