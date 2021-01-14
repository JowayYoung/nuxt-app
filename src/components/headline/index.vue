<template>
	<h3 :class="['headline-component tac ellipsis', { center }, size]">
		<slot></slot>
	</h3>
</template>

<style lang="scss">
.headline-component {
	margin-top: 50px;
	margin-bottom: 50px;
	width: 100%;
	max-width: 1200px;
	background-image: $linear-blue-green;
	background-clip: text;
	font-size: 48px;
	color: transparent;
	&.medium {
		font-size: 40px;
	}
	&.small {
		font-size: 32px;
	}
	@include autoResponse(pad) {
		padding: 0 40px;
	}
	@include autoResponse(mobile) {
		margin-top: .5rem;
		margin-bottom: .5rem;
		padding: 0 .4rem;
		font-size: .56rem;
		&.medium {
			font-size: .48rem;
		}
		&.small {
			font-size: .4rem;
		}
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
		},
		size: {
			default: "", // medium small
			type: String
		}
	}
};
</script>