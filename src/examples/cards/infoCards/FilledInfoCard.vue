<script setup>
import { onMounted, ref } from "vue";
//加载api/news
import { getNewsList } from "@/api/news";
const newList = ref([]);
//fetch news list on component mount
onMounted(async () => {
  try {
    const response = await getNewsList();
    newList.value[0] = response.data;
    console.log(newList.value[0].attributes);
  } catch (error) {
    console.error(error);
  }
});
defineProps({
  color: {
    text: String,
    background: {
      validator(value) {
        return [
          "primary",
          "secondary",
          "info",
          "success",
          "warning",
          "error",
          "light",
          "dark",
          "white",
        ].includes(value);
      },
    },
    default() {
      return {
        text: "",
        background: "bg-gray-100",
      };
    },
  },
  icon: {
    type: Object,
    required: true,
    component: String,
    color: String,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  action: {
    type: Object,
    required: true,
    label: {
      type: Object,
      required: true,
      text: String,
      color: String,
    },
    route: {
      type: String,
      required: true,
    },
  },
});
</script>
<template>
  <div
    class="info-horizontal border-radius-xl d-block d-md-flex"
    :class="`${color.background ?? ''}`"
  >
    <i class="material-icons text-3xl" :class="`text-${icon.color}`">{{
      icon.component
    }}</i>
    <div
      class="ps-0 ps-md-3 mt-3 mt-md-0"
      v-for="(news, index) in newList"
      :key="index"
    >
      <h5 :class="`text-${color.text ?? ''}`">{{ title }}</h5>
      <p :class="`text-${color.text ?? ''}`">
        {{ description }}
      </p>
      <a
        :href="action.route"
        class="icon-move-right"
        :class="`text-${action.label.color ?? 'success'}`"
      >
        {{ action.label.text }}
        <i class="fas fa-arrow-right text-sm ms-1"></i>
      </a>
    </div>
  </div>
</template>
