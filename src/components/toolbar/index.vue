<template>
	<nav class="toolbar-component pf">
		<a class="toolbar-item mobile-btn" @click="isMobile = true"></a>
		<a class="toolbar-item service-btn" @click="isService = true"></a>
		<a class="toolbar-item accounts-btn" @click="isAccounts = true"></a>
		<a class="toolbar-item gotop-btn" @click="gotop"></a>
		<popup v-model="isMobile" title="扫码后可手机浏览喔">
			<img class="toolbar-qrcode" src="@/assets/img/qrcode/mobile.png">
		</popup>
		<popup v-model="isService" title="扫码后可联系客服喔">
			<img class="toolbar-qrcode" src="@/assets/img/qrcode/mobile.png">
		</popup>
		<popup v-model="isAccounts" title="扫码后可关注公众号喔">
			<img class="toolbar-qrcode" src="@/assets/img/qrcode/mobile.png">
		</popup>
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
	transition: all 300ms;
	&:hover {
		background-color: $blue;
	}
	&.mobile-btn {
		background-image: url("../../assets/img/icon/mobile.png");
	}
	&.service-btn {
		background-image: url("../../assets/img/icon/service.png");
	}
	&.accounts-btn {
		background-image: url("../../assets/img/icon/accounts.png");
	}
	&.gotop-btn {
		background-image: url("../../assets/img/icon/gotop.png");
	}
}
.toolbar-qrcode {
	margin-top: 10px;
	width: 250px;
	height: 250px;
}
</style>

<script>
export default {
	name: "toolbar",
	data() {
		return {
			isAccounts: false,
			isMobile: false,
			isService: false
		};
	},
	methods: {
		gotop() {
			process.client && document.body.scrollIntoView({ behavior: "smooth" });
		}
	}
};
</script>