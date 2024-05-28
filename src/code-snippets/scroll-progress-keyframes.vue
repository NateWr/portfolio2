<script setup lang="ts">
import {
	KEY_2014_START,
	KEY_2014_INTRO,
	KEY_2014_INTRO_BUBBLES
} from '../helpers/timelineKeyframes'

const props = defineProps({
	frame: {
		type: Number,
		required: true,
	},
})
</script>

<template>
	<div>
		<ul>
			<li v-if="frame > KEY_2014_START">
				First Frame
			</li>
			<li v-if="frame > KEY_2014_INTRO">
				Second Frame
			</li>
			<li v-if="frame > KEY_2014_INTRO_BUBBLES">
				Third Frame
			</li>
		</ul>
	</div>
</template>