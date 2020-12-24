<template>
	<div class="home-page flex-ct-x">
		<loading v-if="loading" :duration="20000"></loading>
		<p v-else>Home</p>
	</div>
</template>

<style lang="scss">
.home-page {
	color: $red !important;
}
</style>

<script>
import { ListenAutoResponse } from "../utils/setting";

export default {
	name: "home",
	data() {
		return { loading: true };
	},
	async mounted() {
		await ListenAutoResponse();
		const _ = await import("trample");
		await _.WaitFor(20000);
		this.loading = false;
	}
};
</script>