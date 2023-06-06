<script setup>
import DefaultInfoCard from "./Components/DefaultInfoCard.vue";
import PageCard from "./PageCard1.vue";
import tg from "@/assets/img/tg.jpg";
//加载api
import { onMounted, ref } from "vue";
import { getServiceItem } from "@/api/serviceitem/default";

const serviceList = ref([]);

onMounted(async () => {
  try {
    const response = await getServiceItem();
    serviceList.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>
<style scoped>
section.my-5 {
  position: relative;
  z-index: 1;
  border-radius: 12px;
  box-shadow: 0px 9px 2px 0px rgba(65, 144, 228, 0.37);
  background-color: #ffffff;
}

section.my-5:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  background-size: cover;
  opacity: 0.6;
  border-radius: 12px;
}
</style>
<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-3 ms-auto me-auto p-lg-3 mt-lg-0 mt-4">
          <PageCard
            :image="tg"
            title="技术服务中心"
            description=""
            :action="{
              color: 'bg-gradient-info',
              route: '/liweikeji/Components/technologycenter',
            }"
          />
        </div>
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <DefaultInfoCard
              v-for="(item, index) in serviceList.slice(0, 4)"
              :key="index"
              color="info"
              icon="settings"
              :title="item.attributes.title"
              :description="item.attributes.description"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
