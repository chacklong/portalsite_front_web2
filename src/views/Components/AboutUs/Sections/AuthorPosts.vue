<script setup>
// example components
import TransparentBlogCard from "./components/TransparentBlogCard.vue";
import BackgroundBlogCard from "./components/BackgroundBlogCard.vue";
import { computed } from "vue";

import useNewsList from "@/api/useNewsList";

const getFullImageUrl = (url) => {
  return "http://8.222.140.62:1337" + url;
};
const getImageUrl = (caseList) => {
  if (caseList.attributes.image.data.length > 0) {
    return getFullImageUrl(caseList.attributes.image.data[0].attributes.url);
  }
  return "";
};
const { newList } = useNewsList();
const firstImageUrl = computed(() => {
  if (newList.value.length > 0) {
    const firstCaseList = newList.value[0];
    return getFullImageUrl(
      firstCaseList.attributes.image.data[0].attributes.url
    );
  }
  return "";
});
//Vue Material Kit 2 components
</script>
<template>
  <section class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3 class="mb-5">最新资讯</h3>
        </div>
      </div>
      <div class="row">
        <div
          class="col-lg-3 col-sm-6"
          v-for="(caseList, index) in newList.slice(0, 3)"
          :key="index"
        >
          <TransparentBlogCard
            :image="getImageUrl(caseList)"
            :title="caseList.attributes.title"
            :description="caseList.attributes.description.slice(0, 80) + '...'"
            :action="{
              label: '查看',
              color: 'info',
              route: `/corporateinformation/newscontent/newsdetails/${caseList.id}`,
            }"
          />
        </div>
        <div class="col-lg-3 col-md-12 col-12">
          <BackgroundBlogCard
            :image="firstImageUrl"
            :action="{
              label: '查看更多',
              color: 'white',
              route: '/corporateinformation/newscontent',
            }"
          />
        </div>
      </div>
    </div>
  </section>
</template>
