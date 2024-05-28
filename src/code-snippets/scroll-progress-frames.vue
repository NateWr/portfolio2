<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = defineProps({
	progress: {
		type: Number,
		required: true,
	},
})

/**
 * All "frames" of the timeline
 */
const frames: number = [
    0.25,
    0.5,
    0.75,
];

/**
 * All frames not triggered yet
 */
const pending = ref<number[]>(frames.slice())

/**
 * All frames triggered
 */
const fired = ref<number[]>([])

/**
 * The current frame
 */
const frame = computed(() => {
    return fired.value.length
        ? fired.value[fired.value.length - 1]
        : 0
})

/**
 * Add and remove frames from the pending
 * and triggered arrays as the user scrolls
 * down and back up
 */
watch(
    () => props.progress,
    async(newVal, oldVal) => {
        if (newVal > oldVal) {
            for (let frame of pending.value.slice()) {
                if (frame <= newVal) {
                    fired.value.push(frame)
                    pending.value.shift()
                } else {
                    break;
                }
            }
        } else if (newVal < oldVal) {
            for (let trigger of fired.value.slice().reverse()) {
                if (trigger.progress > newVal && !pending.value.includes(trigger)) {
                    pending.value.unshift(trigger)
                    fired.value.pop()
                } else {
                    break;
                }
            }
        }
    }
)
</script>

<template>
	<div>
		<ul>
			<li v-if="frame > 0.25">
				First Frame
			</li>
			<li v-if="frame > 0.5">
				Second Frame
			</li>
			<li v-if="frame > 0.75">
				Third Frame
			</li>
		</ul>
	</div>
</template>