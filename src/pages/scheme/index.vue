<template>
	<div class="scheme-page flex-ct-x">Scheme</div>
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