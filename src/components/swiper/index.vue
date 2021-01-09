<template>
	<div class="swiper-component swiper-container">
		<div class="swiper-wrapper">
			<a v-for="v in list" :key="v.img" class="swiper-slide" :href="v.link">
				<img class="swiper-cover" :src="v.img">
			</a>
		</div>
		<div class="swiper-pagination"></div>
		<div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div>
	</div>
</template>

<style lang="scss">
.swiper-button-prev,
.swiper-button-next {
	margin-top: -25px;
	border-radius: 100%;
	width: 50px;
	height: 50px;
	background-color: rgba(#000, .5);
	&::after {
		font-weight: bold;
		font-size: 20px;
		color: #fff;
	}
}
.swiper-button-prev {
	left: 20px;
}
.swiper-button-next {
	right: 20px;
}
.swiper-pagination-bullet {
	transition: all 300ms;
	&-active {
		background-color: $green;
	}
}
.swiper-cover {
	width: 100%;
}
</style>

<script>
import Swiper from "swiper";

import "../../assets/css/swiper.css";

export default {
	name: "slider",
	props: {
		height: {
			default: "auto",
			type: [Number, String]
		},
		list: {
			default: () => [],
			type: Array
		}
	},
	async mounted() {
		process.client && setTimeout(() => new Swiper(".swiper-container", {
			autoplay: { delay: 5000 },
			loop: true,
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			pagination: { el: ".swiper-pagination" },
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			}
		}), 500);
	}
};
</script>