<script setup>
import DefaultInfoCard from "./Components/DefaultInfoCard.vue";
import PageCard from "./PageCard1.vue";

//加载api
// import usedefault from "@/api/serviceitem/usedefault";
// const { serviceList } = usedefault();
import { onMounted, ref } from "vue";
import { getServiceItem } from "@/api/serviceitem/default";

const serviceList = ref([]);

onMounted(async () => {
  try {
    const response = await getServiceItem();
    serviceList.value = response.data;
    console.log(serviceList.value);
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
  box-shadow: 0 0 8px rgba(150, 150, 150, 0.664);
}

section.my-5:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("http://localhost:3000/public/20230501130322.jpg");
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
            image="http://localhost:3000/service-bg.jpg"
            title="技术服务中心"
            description=""
            :action="{
              color: 'bg-gradient-info',
              route: '/pages/landing-pages/basic',
            }"
          />
        </div>
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <DefaultInfoCard
              v-for="(item, index) in serviceList"
              :key="index"
              color="info"
              icon="settings"
              :title="item.attributes.title"
              :description="item.attributes.content"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
