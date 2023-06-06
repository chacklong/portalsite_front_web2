<script setup>
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
      route: "/liweikeji/Components/technologycenter",
      label: "Read more",
      color: "white",
    }),
  },
});
</script>
<style scoped>
.background-color:hover {
  box-shadow: 0 0 10px rgb(255, 255, 255);
  transition: box-shadow 0.6s ease-in-out;
}
</style>
<template>
  <div class="card card-blog card-background cursor-pointer background-color">
    <div
      class="full-background"
      :style="{ backgroundImage: `url(${image})` }"
      loading="lazy"
    ></div>
    <div class="card-body">
      <div class="content-left text-start my-auto py-6">
        <a href="/liweikeji/Components/technologycenter">
          <h2 class="card-title text-white mt-6">
            {{ title }}
          </h2>
        </a>
        <p class="card-description text-white">
          {{ description }}
        </p>
        <a
          href="javascript:;"
          class="text-sm icon-move-right"
          :class="`text-${action.color}`"
          >{{ action.label }}
        </a>
      </div>
    </div>
  </div>
</template>
