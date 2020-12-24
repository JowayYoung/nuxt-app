<template>
	<div class="loading-component flex-ct-x">
		<div class="loading-ball pr round" :style="{ '--offset': progress }">
			<div class="wave pr round"></div>
			<div class="progress"></div>
		</div>
	</div>
</template>

<style lang="scss">
.loading-component {
	height: 100%;
}
.loading-ball {
	overflow: hidden;
	padding: .1rem;
	border: .06rem solid #3c9;
	width: 3rem;
	height: 3rem;
	background-color: #fff;
	&::before,
	&::after {
		position: absolute;
		left: 50%;
		bottom: .1rem;
		z-index: 9;
		margin-left: -2rem;
		width: 4rem;
		height: 4rem;
		content: "";
	}
	&::before {
		margin-bottom: calc(var(--offset) * .0268rem);
		border-radius: 45%;
		background-color: rgba(#fff, .5);
		animation: rotate 5s linear -2.5s infinite;
	}
	&::after {
		margin-bottom: calc(var(--offset) * .0268rem + .2rem);
		border-radius: 40%;
		background-color: rgba(#fff, .8);
		animation: rotate 7.5s infinite;
	}
	.wave {
		width: 100%;
		height: 100%;
		background-image: linear-gradient(to bottom, #af8 13%, #3c9 91%);
	}
	.progress::after {
		display: flex;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 99;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		font-weight: bold;
		font-size: .32rem;
		color: #09f;
		content: counter(progress) "%";
		counter-reset: progress var(--offset);
	}
}
@keyframes rotate {
	to {
		transform: rotate(1turn);
	}
}
</style>

<script>
export default {
	name: "loading",
	props: {
		duration: {
			default: 1000,
			type: Number
		}
	},
	data() {
		return { progress: 0 };
	},
	mounted() {
		const timer = setInterval(() => {
			if (this.progress === 100) {
				clearInterval(timer);
			} else {
				this.progress = this.progress + 1;
			}
		}, this.duration / 100);
	}
};
</script>