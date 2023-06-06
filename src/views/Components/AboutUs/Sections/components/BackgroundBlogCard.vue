<script setup>
import { computed, ref } from "vue";
const isHovered = ref(false);
let hoverTimer = null;

const startHoverTimer = () => {
  hoverTimer = setTimeout(() => {
    isHovered.value = true;
  }, 500); //adjust the delay as needed
};
const clearHoverTimer = () => {
  clearTimeout(hoverTimer);
  isHovered.value = false;
};
const imageFilter = computed(() => {
  return isHovered.value ? "blur(5px)" : "none";
});
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    requierd: true,
  },
  description: {
    type: String,
    required: true,
  },
  action: {
    type: Object,
    route: String,
    label: String,
    color: String,
    default: () => ({
      route: "javascript:;",
      label: "Read more",
      color: "white",
    }),
  },
});
</script>
<style scoped>
.blur-transition-enter-active,
.card,
.blur-transition-leave-active {
  transition: filter 0.3s ease;
}
.blur-transition-enter,
.blur-transition-leave-to {
  filter: blur(5px);
}
</style>
<template>
  <div
    class="card card-blog card-background cursor-pointer"
    @mouseenter="startHoverTimer"
    @mouseleave="clearHoverTimer"
  >
    <transition name="blur-transition">
      <div
        class="full-background"
        :style="{ backgroundImage: `url(${image})`, filter: imageFilter }"
        loading="lazy"
        route="/corporateinformation/newscontent"
      ></div>
    </transition>
    <div class="card-body">
      <div class="content-left text-start my-auto py-6">
        <h2 class="card-title text-white">{{ title }}</h2>
        <p class="card-description text-white">
          {{ description }}
        </p>
        <a
          href="javascript:;"
          class="text-sm4 icon-move-right"
          :class="`text-${action.color}`"
          v-if="isHovered"
          >{{ action.label }}
        </a>
      </div>
    </div>
  </div>
</template>
