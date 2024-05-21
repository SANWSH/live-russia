<template>
  <div class="home flex justify-center relative" ref="local">
    <div v-if="!maxSM"
    class="hero-wrapper -mt-48 flex relative">
        <div
        ref="hero"
        class="absolute link-wrapper">
          <hero-element
          ref="children"
          imgSourceName="video"
          imgOriginalExt="png"
          tagName="a"
          link="//youtu.be/7BHUoGQ992o?si=53fgM-lEFAZvbgSI"
          class="flex layer-0 -translate-x-[4%] z-80 w-[22.25rem] self-center video-link hover:brightness-125 hover:after:scale-110 transition-all after:transition-transform"
          :style="`width:${childSize}px!important `" >
          </hero-element>
        </div>

        <hero-element
        imgSourceName="grut_n_rocket_big"
        imgOriginalExt="png"
        tagName="div"
        class="absolute bottom-10 aspect-[1268/818] hero-layer-1 z-90">
        </hero-element>
        <hero-element
        imgSourceName="hero_foreground_layer_1"
        imgOriginalExt="png"
        tagName="div"
        class="absolute bottom-10 aspect-[1268/818] hero-layer-2 z-70"
        :style="`transform: translateY(${-Y * 0.5}rem) translateX(${X * 0.75}rem);`">
        </hero-element>
        <hero-element
        imgSourceName="hero_foreground_layer_2"
        imgOriginalExt="png"
        tagName="div"
        class="absolute bottom-10 aspect-[1268/818] hero-layer-3 z-60"
        :style="`transform: translateY(${-Y * 0.25}rem) translateX(${X * 0.5}rem);`"
        >
        </hero-element>
        <hero-element
        imgSourceName="hero_midground_layer_1"
        imgOriginalExt="png"
        tagName="div"
        class="absolute bottom-10 aspect-[1268/818] hero-layer-4 z-50"
        :style="`transform: translateY(${Y * 0.75}rem) translateX(${X * 0.5}rem);`"
        >
        </hero-element>
        <hero-element
        imgSourceName="hero_midground_layer_2"
        imgOriginalExt="png"
        tagName="div"
        class="absolute bottom-10 aspect-[1268/818] hero-layer-5 z-40"
        :style="`transform: translateY(${Y}rem) translateX(${X * 0.5}rem);`"
        >
        </hero-element>
        <hero-element
        imgSourceName="hero_background_layer_1"
        imgOriginalExt="png"
        tagName="div"
        class="absolute bottom-10 aspect-[1268/818] hero-layer-6 z-30"
        :style="`transform: translateY(${Y * 1.25}rem) translateX(${X * 0.5}rem);`"
        >
        </hero-element>
        <hero-element
        imgSourceName="hero_background_layer_2"
        imgOriginalExt="png"
        tagName="div"
        class="absolute bottom-10 aspect-[1268/818] hero-layer-7 z-20"
        :style="`transform: translateY(${Y * 1.5}rem) translateX(${X * 0.15}rem);`"
        >
        </hero-element>
        <hero-element
        imgSourceName="hero_background_layer_3"
        imgOriginalExt="png"
        tagName="div"
        class="absolute bottom-24 aspect-[1268/950] hero-layer-6 z-30"
        :style="`transform: translateY(${Y * 1.25}rem) translateX(${X * 0.25}rem);`"
        />
        <hero-element
        imgSourceName="bg_glow"
        imgOriginalExt="png"
        tagName="div"
        class="absolute bottom-10 pt-[16vh] aspect-[1422/695] hero-layer-8 z-0"
        >
        </hero-element>
        <hero-element
        imgSourceName="fire_glow"
        imgOriginalExt="png"
        tagName="div"
        class="absolute bottom-40 aspect-[1268/950] -mb-44 -mr-[38rem] hero-layer-9 glow z-10"
        >
        </hero-element>
        <div class="flex flex-col h-full aspect-[562/818] self-start absolute">
          <hero-element
          imgSourceName="beacons"
          imgOriginalExt="png"
          tagName="div"
          class="absolute beacons-light bottom-1/3 self-center hero-layer-10 z-10"
          >
          </hero-element>
        </div>
        <div class="flex flex-col absolute aspect-[1268/818] hero-layer-12 w-full z-100">
          <hero-element
          imgSourceName="clouds"
          imgOriginalExt="png"
          tagName="div"
          class="absolute bottom-0 -mb-20 self-center hero-layer-12 z-100"
          >
          </hero-element>
        </div>
        <Transition name="fade">
          <hero-element
          v-if="isLightsTurnedOn"
          imgSourceName="hero_foreground_lights"
          imgOriginalExt="png"
          tagName="div"
          class="absolute bottom-10 aspect-[1268/818] hero-layer-11 z-60"
          :style="`transform: translateY(${-Y * 0.25}rem) translateX(${X * 0.5}rem);`"
          >
          </hero-element>
        </Transition>
      </div>
      <div v-else class="relative aspect-[360/444] w-full">
        <div class="flex flex-col mobile-hero page-gradient">
          <hero-element
          imgSourceName="grut_n_rocket"
          imgOriginalExt="png"
          tagName="div"
          class="absolute bottom-0 z-100 px-[12%]"
          >
          </hero-element>
          <a
          class="absolute top-[26%] w-[66%] left-[15%] z-100 self-center video-link block aspect-[360/182]"
          href="//youtu.be/7BHUoGQ992o?si=53fgM-lEFAZvbgSI">
        </a>
        <div class="absolute bottom-0 w-full z-0 self-center">
          <hero-element
          imgSourceName="mobile_hero"
          imgOriginalExt="png"
          tagName="div"
          class="absolute bottom-0 z-100"
          >
          </hero-element>
        </div>
      </div>
      <div class="absolute flex flex-col items-center self-center bottom-3 gap-5 z-50 aspect-[360/246]">
      </div>
    </div>
    <to-start class="absolute bottom-16 z-[1020]" @button-hover="turnOn">
    </to-start>
  </div>
</template>

<script setup>
import { inject, onMounted, ref } from 'vue';
import HeroElement from '@/components/Main/HeroElement.vue';
import ToStart from '@/components/Main/ToStart.vue';
import { useResizeObserver } from '@vueuse/core';
const hero = ref(null)
const children = ref(null)
const childRect = ref(0)
const childrenGetHeight = event => {
  childRect.value = event[0].contentRect
}
const childSize = ref(null)

const resizeEvent = event => {
  const parentRect = event[0].contentRect
  const percent = parentRect.width / 1268 // 1268px original width of parent element
  childSize.value = 348 * percent
}
onMounted(() => {
  useResizeObserver(children, childrenGetHeight)
  useResizeObserver(hero, resizeEvent)
})
const maxSM = inject('scrSmall')
const X = inject('parallaxX')
const Y = inject('parallaxY')

const isLightsTurnedOn = ref(false)

function turnOn (bool) {
  if (bool) {
    isLightsTurnedOn.value = true
  } else {
    isLightsTurnedOn.value = false
  }
}
</script>
<script>
export default {
  name: 'HomeView',
  components: {
    ToStart,
    HeroElement
  }
}
</script>
<style scoped>
.hero-layer-1,
.hero-layer-2,
.hero-layer-3,
.hero-layer-4,
.hero-layer-5,
.hero-layer-6,
.hero-layer-7,
.hero-layer-8,
.hero-layer-9,
.hero-layer-10,
.hero-layer-11,
.hero-layer-12 {
  @apply select-none pointer-events-none
}
.hero-layer-6{
}
</style>
<style>
.hero-wrapper{
  @apply mx-auto max-w-[95rem] h-full -mt-5 flex flex-col items-center z-[100] aspect-[1268/852] max-lg:mb-[4.5rem]
}
.hero-wrapper>*{
  @apply h-full w-auto
}
.video-link::after{
  content: "";
  position: absolute;
  background: url("@/assets/img/buttons/play.svg") no-repeat center;
  width: 100%;
  height: 100%;
  inset: 0;
}
.link-wrapper{
  @apply bottom-10 aspect-[1268/818] h-full
 max-w-[1520rem] flex flex-col justify-center
}
.link-wrapper>*{
  @apply -translate-y-[3.75vh]
}
@media not all and (min-height: 40rem) {
  .link-wrapper > * {
    @apply -translate-y-8
  }
}
#play{
  background: linear-gradient(to top, #00092E 0%, #00092E 50%, #00092E00 100%);
}
.mobile-hero{
  @apply relative items-center aspect-[360/646] mt-[84px]
}
.home,.hero-wrapper{
  @apply h-[calc(100vh-13.25rem)] min-h-[40rem] max-lg:h-full
}
</style>
