<template>
	<h3 :class="['headline-component', { center }]">
		<slot></slot>
	</h3>
</template>

<style lang="scss">
.headline-component {
	margin: 50px 0;
	width: fit-content;
	background-image: linear-gradient(to right, $blue, $green);
	background-clip: text;
	font-size: 48px;
	color: transparent;
	&.center {
		margin: 50px auto;
	}
}
</style>

<script>
export default {
	name: "headline",
	props: {
		center: {
			default: false,
			type: Boolean
		}
	}
};
</script>