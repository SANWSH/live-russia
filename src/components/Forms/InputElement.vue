<template>

  <!-- non-dropdown input -->
  <div
  v-if="Type!='dropdown'"
  class="form__input-wrapper form-element flex gap-2">
    <img :src="icon !== '!icon' ? require(`@/assets/img/icons/${icon}.svg`) : '' " alt="">
    <input :type="Type" :placeholder="Placeholder"
    @focus="onFocus" @focusout="onFocusOut " :name="Name" :pattern="Pattern" class="w-full">
  </div>

  <!-- dropdown input -->
  <div
  v-else
  :class="`form__input-wrapper form-element dropdown flex gap-2 z-10 ${isFocused ? 'after:rotate-180 active': 'after:rotate-0'}`"
  v-click-outside="onClickOutside"
  :name="Name"
  @click="setFocus"
  @input="$emit('input-event', $event)">
    <img :src="require(`@/assets/img/icons/${icon}.svg`)" alt="input-icon">
    <input type="text" disabled :placeholder="Placeholder" :value="selectedItem">
      <ul
      v-if="isFocused"
      ref="list"
      class="form__dropdown-list form-element absolute top-[48px] left-0 right-0 z-20 ">
        <li v-for="item in Items" :key="item" @click="setDropdownValue">{{ item.title }}</li>
      </ul>
  </div>

</template>

<script>
import { ref } from 'vue'
import vClickOutside from 'click-outside-vue3'

export default {
  props: {
    icon: {
      type: String,
      default: '!icon'
    },
    Placeholder: String,
    Type: String,
    Items: Array,
    Name: String,
    Pattern: {
      type: String,
      default: ''
    }
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  emits: ['input-event'],
  setup (context) {
    // input logic
    const onFocus = (event) => {
      event.target.parentNode.classList.add('active');
    };
    const onFocusOut = (event) => {
      event.target.parentNode.classList.remove('active');
    }

    // dropdown logic
    const isFocused = ref(false)
    const selectedItem = ref(null)

    function setFocus () {
      isFocused.value ? isFocused.value = false : isFocused.value = true
    }
    function onClickOutside () {
      if (isFocused.value === true) {
        setFocus()
      }
    }
    function setDropdownValue (event) {
      const value = event.target.innerHTML
      selectedItem.value = value
    }
    function inputEvent (event) {
      context.emit('input-event', event.target.value);
    }

    return {
      onFocus,
      onFocusOut,
      setFocus,
      isFocused,
      onClickOutside,
      setDropdownValue,
      selectedItem,
      inputEvent
    }
  }
}
</script>

<style>
  :root{
    --color: #022648;
  }
  .form__input-wrapper{
    @apply w-max transition-[filter] p-3 duration-500
    rounded-lg relative w-80
  }
  .form-element{
    @apply bg-[#022648] border border-[#fff] border-opacity-10 box-border
  }
  .form__input-wrapper.dropdown.active{
    @apply rounded-b-none border-b-0
  }
  .form__dropdown-list{
    @apply w-80 transition-all rounded-b-lg border-t-0 bg-[--color] -mx-[1px]
  }
  .dropdown{
    @apply cursor-pointer
  }
  .dropdown::after{
    content: "";
    position: absolute;
    right: 1rem;
    background: url("@/assets/img/icons/dropdown.svg");
    width: 20px;
    height: 20px;
    transition: transform .1s cubic-bezier(0.075, 0.82, 0.165, 1)
  }
</style>
<style scoped>
  input{
    @apply text-white bg-transparent outline-none
  }
  input[disabled]{
    @apply pointer-events-none select-none;
  }
  input::placeholder {
    @apply text-gray-400
  }
  img{
    @apply max-w-3
  }
  li{
    @apply text-ellipsis text-left text-white hover:bg-white hover:bg-opacity-20 p-3
  }
  .active,.dropdown:hover{
    @apply brightness-125;
  }
</style>
