<template>
	<div class="research-page flex-ct-x">Research</div>
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