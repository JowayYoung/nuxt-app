<template>
	<div class="culture-page flex-ct-x">Culture</div>
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