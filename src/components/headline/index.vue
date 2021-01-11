<template>
	<h3 :class="['headline-component', { center }]">
		<slot></slot>
	</h3>
</template>

<style lang="scss">
.headline-component {
	margin-top: 50px;
	margin-bottom: 50px;
	width: fit-content;
	background-image: $linear-blue-green;
	background-clip: text;
	font-size: 48px;
	color: transparent;
	@include autoResponse(mobile) {
		margin-top: .5rem;
		margin-bottom: .5rem;
		font-size: .56rem;
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