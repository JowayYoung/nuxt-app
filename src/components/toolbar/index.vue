<template>
	<nav class="toolbar-component pf">
		<a class="toolbar-item gotop-btn"></a>
		<a class="toolbar-item gotop-btn"></a>
		<a class="toolbar-item gotop-btn" @click="gotop"></a>
	</nav>
</template>

<style lang="scss">
.toolbar-component {
	overflow: hidden;
	right: 10px;
	bottom: 10px;
	z-index: 99999;
	border-radius: 10px;
}
.toolbar-item {
	display: block;
	width: 50px;
	height: 50px;
	background: rgba(#000, .5) no-repeat center/30px 30px;
	cursor: pointer;
	&.gotop-btn {
		background-image: url("../../assets/img/icon-gotop.png");
	}
}
</style>

<script>
export default {
	name: "toolbar",
	methods: {
		gotop() {
			process.client && document.body.scrollIntoView({ behavior: "smooth" });
		}
	}
};
</script>