<template>
  <component :is="tagName" class="absolute w-full">
    <picture>
      <source :srcset="require(`@/assets/img/optimize/${imgSourceName}.webp`)" type="image/webp"/>
      <img :src="require(`@/assets/img/non-optimize/${imgSourceName}.${imgOriginalExt}`)" :alt="imgSourceName" class="size-full">
    </picture>
    <slot></slot>
  </component>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    tagName: 'a' || 'div',
    imgSourceName: String,
    imgOriginalExt: String
  },
  setup (props) {
    const posValues = ref(props.elPosition)
    const posNames = ['top', 'right', 'bottom', 'left']
    const posStyles = ref(null)

    if (!!posValues.value && posValues.value.length > 4) {
      posValues.value = posValues.value.splice(0, 4)
      console.warn(`There are many items in array of ${props.tagName} element with the content ${props.imgSourceName}.${props.imgOriginalExt}`)
    }

    posValues.value ? setPosStyles() : console.log('No position data')

    async function setPosStyles () {
      const array = await JSON.parse(JSON.stringify(posValues.value))
      const values = []
      array.forEach((value, index) => {
        if (value !== '_') {
          values.push(`${posNames[index]}-${value}`)
        }
      });
      posStyles.value = values.join(' ')
    }

    return {
      posStyles
    }
  }
}
</script>
