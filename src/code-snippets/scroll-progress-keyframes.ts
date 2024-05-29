import type { KeyFrame, Trigger } from './types'

let i = 0;
export const KEY_2014_START : number = i++
export const KEY_2014_INTRO : number = i++
export const KEY_2014_INTRO_BUBBLES : number = i++
export const KEY_2014_INEFFECT : number = i++
export const KEY_2014_INEFFECT_HIGHLIGHT : number = i++
export const KEY_2014_DEAD : number = i++
export const KEY_2014_DEAD_HIGHLIGHT : number = i++
export const KEY_2014_YEAREND : number = i++
export const KEY_2014_COLLAPSE : number = i++
export const KEY_2015_START : number = i++
// ...


export const KEYFRAMES : KeyFrame[] = [
  {id: KEY_2014_START, duration: 5},
  {id: KEY_2014_INTRO, duration: 5},
  {id: KEY_2014_INTRO_BUBBLES, duration: 5},
  {id: KEY_2014_INEFFECT, duration: 3},
  {id: KEY_2014_INEFFECT_HIGHLIGHT, duration: 5},
  {id: KEY_2014_DEAD, duration: 3},
  {id: KEY_2014_DEAD_HIGHLIGHT, duration: 5},
  {id: KEY_2014_YEAREND, duration: 10},
  {id: KEY_2014_COLLAPSE, duration: 5},
  {id: KEY_2015_START, duration: 5},
  // ...
]

/**
 * Convert the duration of each keyframe into a trigger point
 *
 * The trigger point is a value between 0 and 1 which represents
 * the percentage of scroll of the timeline when the keyframe
 * should be triggered.
 */
const total = KEYFRAMES.reduce((a, b) => a + b.duration, 0)
let base = 0;

export const TRIGGERS : Trigger[] = KEYFRAMES.map((keyframe, i) => {
  const trigger : Trigger = {
    id: keyframe.id,
    progress: base,
  }
  base += keyframe.duration / total
  return trigger
})
