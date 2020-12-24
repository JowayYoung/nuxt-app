<template>
	<div class="product-page flex-ct-x">Product</div>
</template>

<script>
import { ListenAutoResponse } from "../../utils/setting";

export default {
	name: "about",
	async mounted() {
		await ListenAutoResponse();
	}
};
</script>