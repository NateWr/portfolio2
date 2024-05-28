<script setup lang="ts">
const props = defineProps({
	/**
	 * As the user scrolls the page,
	 * the value increases from 0.0
	 * to 1.0
	 */
	progress: {
		type: Number,
		required: true,
	},
})
</script>

<template>
	<div>
		<ul>
			<li v-if="progress > 0.25">
				First Frame
			</li>
			<li v-if="progress > 0.5">
				Second Frame
			</li>
			<li v-if="progress > 0.75">
				Third Frame
			</li>
		</ul>
	</div>
</template>