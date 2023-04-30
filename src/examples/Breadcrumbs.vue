<script setup>
defineProps({
  routes: {
    type: Array,
    required: true,
    route: String,
    label: String,
    default: () => [
      {
        route: "/",
        label: "",
      },
    ],
  },
});
</script>
<style>
.a-hover:hover {
  color: #03a9f4 !important;
}
</style>
<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li
        v-for="({ route, label }, index) of routes"
        :key="index"
        class="breadcrumb-item"
      >
        <a
          class="a-hover"
          style="color: #000000"
          v-if="index != routes.length - 1"
          :href="route"
          >{{ label }}</a
        >
        <template v-else>{{ label }}</template>
      </li>
    </ol>
  </nav>
</template>
