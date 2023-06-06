<script setup>
defineProps({
  icon: {
    type: [String, Object],
    default: "",
    component: String,
    size: String,
    color: String,
  },
  image: {
    type: Object,
    component: String,
    class: String,
    default: () => {},
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  col: {
    type: String,
    default: "",
  },
});
</script>
<script>
export default {
  inheritAttrs: false,
};
</script>
<style scoped>
.box-info {
  position: relative;
  z-index: 1;
  box-shadow: 0 0 0 rgba(157, 156, 156, 0.408);
  transition: box-shadow 0.6s ease-in-out;
  border-radius: 15px;
}
.box-info-1 {
  border-radius: 15px;
}
.box-info::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  opacity: 0.6;
}
.box-info:hover {
  border-radius: 15px;
  box-shadow: 0 0 8px rgba(75, 98, 182, 0.438);
}
/* 定义过渡的CSS类 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.9s;
}
</style>
<template>
  <div :class="`${col ? col : 'col-md-6'}`" class="box-info">
    <transition name="fade">
      <div v-bind="$attrs" class="info box-info-1">
        <i
          v-if="icon"
          class="material-icons text-gradient"
          :class="`${
            typeof icon == 'object'
              ? `text-${icon.color} text-${icon.size}`
              : 'text-info text-3xl'
          }`"
          >{{ typeof icon == "object" ? icon.component : icon }}</i
        >
        <img v-if="image" :src="image.component" :class="image.class" />
        <h5
          :class="
            typeof title == 'string' ? 'font-weight-bolder mt-3' : title.class
          "
        >
          {{ title }}
        </h5>
        <p :class="typeof description == 'string' ? 'pe-5' : description.class">
          {{ description }}
        </p>
      </div>
    </transition>
  </div>
</template>
