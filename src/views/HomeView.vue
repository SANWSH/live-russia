<template>
  <div class="home relative page-gradient">
    <div v-if="!maxMD"
    class="mx-auto relative max-w-[85rem] flex flex-col items-center z-[100] aspect-[1268/780] mb-[7.5rem] max-lg:mb-[4.5rem]">
        <div
        ref="hero"
        class="absolute link-wrapper">
          <hero-element
          ref="children"
          imgSourceName="video"
          imgOriginalExt="png"
          tagName="a"
          class="flex layer-0 top-0 -translate-x-[4%] z-80 w-[356px] self-center video-link hover:brightness-125 hover:after:scale-110 transition-all after:transition-transform"
          :style="`width:${childSize}px!important `" >
          </hero-element>
        </div>

        <hero-element
        imgSourceName="grut_n_rocket_big"
        imgOriginalExt="png"
        tagName="div"
        class="absolute bottom-0 layer-1 z-90">
        </hero-element>
        <hero-element
        imgSourceName="hero_foreground_layer_1"
        imgOriginalExt="png"
        tagName="div"
        class="absolute bottom-0 layer-2 z-70"
        :style="`transform: translateY(${-Y * 0.5}rem) translateX(${X * 0.5}rem);`">
        </hero-element>
        <hero-element
        imgSourceName="hero_foreground_layer_2"
        imgOriginalExt="png"
        tagName="div"
        class="absolute bottom-0 layer-3 z-60"
        :style="`transform: translateY(${-Y * 0.25}rem) translateX(${X * 0.5}rem);`"
        >
        </hero-element>
        <hero-element
        imgSourceName="hero_midground_layer_1"
        imgOriginalExt="png"
        tagName="div"
        class="absolute bottom-0 layer-4 z-50"
        :style="`transform: translateY(${Y * 0.75}rem) translateX(${X * 0.5}rem);`"
        >
        </hero-element>
        <hero-element
        imgSourceName="hero_midground_layer_2"
        imgOriginalExt="png"
        tagName="div"
        class="absolute bottom-0 layer-5 z-40"
        :style="`transform: translateY(${Y}rem) translateX(${X * 0.5}rem);`"
        >
        </hero-element>
        <hero-element
        imgSourceName="hero_background_layer_1"
        imgOriginalExt="png"
        tagName="div"
        class="absolute bottom-0 layer-6 z-30"
        :style="`transform: translateY(${Y * 1.25}rem) translateX(${X * 0.5}rem);`"
        >
        </hero-element>
        <hero-element
        imgSourceName="hero_background_layer_2"
        imgOriginalExt="png"
        tagName="div"
        class="absolute bottom-0 layer-7 z-20"
        :style="`transform: translateY(${Y * 1.5}rem) translateX(${X * 0.5}rem);`"
        >
        </hero-element>
        <hero-element
        imgSourceName="bg_glow"
        imgOriginalExt="png"
        tagName="div"
        class="absolute bottom-0 scale-[1.3] mb-14 layer-8 z-0"
        >
        </hero-element>
        <hero-element
        imgSourceName="fire_glow"
        imgOriginalExt="png"
        tagName="div"
        class="absolute -bottom-0 -mb-44 left-[25rem] layer-9 glow z-10"
        >
        </hero-element>
        <div class="flex flex-col h-full aspect-[562/818] self-start absolute">
          <hero-element
          imgSourceName="beacons"
          imgOriginalExt="png"
          tagName="div"
          class="absolute beacons-light bottom-1/3 self-center layer-10 z-10"
          >
          </hero-element>
        </div>
        <div class="flex flex-col absolute aspect-[1268/353] bottom-0 w-full z-100">
          <hero-element
          imgSourceName="clouds"
          imgOriginalExt="png"
          tagName="div"
          class="absolute bottom-0 -mb-20 self-center layer-12 z-100"
          >
          </hero-element>
        </div>
        <Transition name="fade">
          <hero-element
          v-if="isLightsTurnedOn"
          imgSourceName="hero_foreground_lights"
          imgOriginalExt="png"
          tagName="div"
          class="absolute bottom-0 layer-11 z-60"
          :style="`transform: translateY(${-Y * 0.25}rem) translateX(${X * 0.5}rem);`"
          >
          </hero-element>
        </Transition>
      </div>
      <div v-else class="flex flex-col relative h-full aspect-[360/748]">
        <div class="w-full bg-BASE_BACKGROUND relative z-50 h-8"></div>
        <div class="flex flex-col items-center page-gradient aspect-[360/646]">
          <hero-element
          imgSourceName="grut_n_rocket"
          imgOriginalExt="png"
          tagName="div"
          class="absolute bottom-0 z-100 px-[12%]"
          >
          </hero-element>
          <a
          class="absolute top-[36%] w-[66%] left-[15%] z-100 self-center block aspect-[360/182]"
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
    <to-start class="absolute bottom-0 z-[1020]" @turn-on-lights="turnOn">
      <Social v-if="maxMD" class="top-[73%]"/>
    </to-start>
  </div>
</template>

<script>
import HeroElement from '@/components/Main/HeroElement.vue';
import ToStart from '@/components/Main/ToStart.vue';
import Social from '@/components/Social.vue';
import { inject, onMounted, ref } from 'vue';
import { useResizeObserver } from '@vueuse/core';

export default {
  name: 'HomeView',
  components: {
    ToStart,
    Social,
    HeroElement
  },
  setup () {
    const maxMD = inject('scrMedium')
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

    const hero = ref(null)
    const children = ref(null)
    const childRect = ref(0)
    const childrenGetHeight = event => {
      childRect.value = event[0].contentRect
    }
    const parentCenterY = ref(0)
    const childSize = ref(356)

    const resizeEvent = event => {
      const parentRect = event[0].contentRect
      const percent = parentRect.width / 1268 // 1268px original width of parent element
      childSize.value = 356 * percent
    }
    onMounted(() => {
      useResizeObserver(children, childrenGetHeight)
      useResizeObserver(hero, resizeEvent)
    })
    return {
      maxMD,
      hero,
      children,
      parentCenterY,
      childRect,
      childSize,
      X,
      Y,
      turnOn,
      isLightsTurnedOn
    }
  }
}
</script>
<style scoped>
.layer-1,
.layer-2,
.layer-3,
.layer-4,
.layer-5,
.layer-6,
.layer-7,
.layer-8,
.layer-9,
.layer-10,
.layer-11 {
  @apply select-none pointer-events-none
}
</style>
<style>
.video-link::after{
  content: "";
  position: absolute;
  background: url("@/assets/img/buttons/play.svg") no-repeat center;
  width: 100%;
  height: 100%;
  inset: 0;
}
.link-wrapper{
  @apply aspect-[1268/532] bottom-0 w-full h-auto flex flex-col
}
#play{
  background: linear-gradient(to top, #00092E 0%, #00092E 50%, #00092E00 100%);
}
.page-gradient::after{
  content: "";
  @apply absolute bg-[linear-gradient(to_top,#00092E_0%,#00092E_54%,#00092E00_100%)] -bottom-[7.5rem] w-full aspect-[360/377] max-h-[377px] z-[1000] left-0
}
</style>
