<template>
	<header class="navbar-component pf">
		<div class="navbar-wrapper center">
			<h1 class="navbar-logo">JSBC</h1>
			<nav class="narbar-list">
				<nuxt-link v-for="v in router" :key="v.id" class="navbar-link pr flex-ct-y" :to="v.path">
					<span class="navbar-text">{{v.name}}</span>
					<span class="navbar-text">{{v.id}}</span>
				</nuxt-link>
			</nav>
		</div>
	</header>
</template>

<style lang="scss">
.navbar-component {
	left: 0;
	right: 0;
	top: 0;
	z-index: 99999;
	background-image: linear-gradient(to bottom, rgba(#000, .5), transparent);
	@include autoResponse(mobile) {
		display: none;
	}
}
.navbar-wrapper {
	display: flex;
	justify-content: flex-end;
	padding: 20px 30px;
	width: 100%;
	max-width: 1920px;
}
.navbar-logo {
	margin-right: auto;
	height: 50px;
	cursor: pointer;
	line-height: 50px;
	text-shadow: $text-shadow;
	font-size: 40px;
	color: #fff;
}
.narbar-list {
	display: flex;
}
.navbar-link {
	width: 70px;
	height: 50px;
	cursor: pointer;
	color: #fff;
	transition: all 300ms;
	&::before {
		position: absolute;
		left: 100%;
		top: 0;
		border-bottom: 2px solid transparent;
		width: 0;
		height: 100%;
		content: "";
		transition: all 300ms;
	}
	&:hover {
		&::before {
			left: 0;
			top: 0;
			z-index: -1;
			border-bottom-color: $green;
			width: 100%;
			transition-delay: 100ms;
		}
		& + .navbar-link::before {
			left: 0;
		}
		.navbar-text:first-child {
			letter-spacing: 15px;
			&::first-letter {
				text-shadow: none;
				color: $green;
			}
		}
	}
}
.navbar-text {
	text-shadow: $text-shadow;
	transition: all 300ms;
	&:first-child {
		line-height: 20px;
		font-weight: bold;
		font-size: 16px;
	}
	&:last-child {
		font-size: 12px;
	}
}
</style>

<script>
import { ROUTER } from "../../utils/getting";

export default {
	name: "navbar",
	data() {
		return { router: ROUTER };
	}
};
</script>