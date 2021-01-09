<template>
	<transition name="fade">
		<div v-show="show" class="popup-component pf fullscreen flex-ct-x" @click="close">
			<transition name="slide-up">
				<div v-show="show" class="popup-wrapper pr" @click.stop>
					<i class="popup-close-btn pa" @click.stop="close"></i>
					<h3 class="popup-title tac ellipsis">{{title}}</h3>
					<slot></slot>
				</div>
			</transition>
		</div>
	</transition>
</template>

<style lang="scss">
.popup-component {
	z-index: 999999;
	background-color: rgba(#000, .5);
	&.fade {
		&-enter,
		&-leave-to {
			opacity: 0;
		}
		&-enter-active,
		&-leave-active {
			transition: opacity 300ms;
		}
	}
}
.popup-wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	border-radius: 10px;
	max-width: 80%;
	max-height: 80%;
	background-color: #fff;
	&.slide-up {
		&-enter,
		&-leave-to {
			transform: translate3d(0, 100%, 0);
		}
		&-leave-active,
		&-enter-active {
			transition: transform 300ms;
		}
	}
}
.popup-close-btn {
	left: 100%;
	top: 0;
	margin-left: 10px;
	width: 30px;
	height: 30px;
	background: url("../../assets/img/icon/close.png") no-repeat center/cover;
	cursor: pointer;
}
.popup-title {
	font-size: 16px;
	color: #666;
}
</style>

<script>
export default {
	name: "popup",
	model: {
		prop: "toggle",
		event: "closeCb"
	},
	props: {
		title: {
			type: String,
			default: "标题"
		},
		toggle: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return { show: false };
	},
	watch: {
		toggle() {
			this.show = this.toggle;
		},
		show() {
			document.body.classList.toggle("static", this.show);
		}
	},
	mounted() {
		this.$nextTick(() => {
			const body = document.body;
			body.append ? body.append(this.$el) : body.appendChild(this.$el);
		});
		this.show = this.toggle;
	},
	destroyed() {
		this.$el?.parentNode?.removeChild(this.$el);
	},
	methods: {
		close() {
			this.show = false;
			this.$emit("closeCb", false);
		}
	}
};
</script>