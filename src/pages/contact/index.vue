<template>
	<div class="contact-page flex-ct-x">Contact</div>
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