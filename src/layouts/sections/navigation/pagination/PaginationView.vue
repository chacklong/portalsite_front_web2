<script setup>
import { onMounted } from "vue";
//加载api
import useNewsList from "@/api/useNewsList";

const { newList } = useNewsList();

import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

import PaginationSimple from "./components/PaginationSimple.vue";
import FilledInfoCard from "@/examples/cards/infoCards/FilledInfoCard.vue";

import setNavPills from "@/assets/js/nav-pills";

onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    :breadcrumb="[{ label: '企业资讯', route: '#' }, { label: '新闻列表' }]"
  >
    <View title="近日资讯">
      <div class="container">
        <div class="row">
          <div
            class="col-12 mt-4"
            v-for="(news, index) in newList"
            :key="index"
          >
            <FilledInfoCard
              class="p-4"
              :color="{
                background: 'bg-gradient-dark',
                text: 'white',
              }"
              :icon="{ component: 'shuffle', color: 'white' }"
              :title="news.attributes.title"
              :description="news.attributes.description.slice(0, 100)"
              :action="{
                route: `/sections/navigation/pagination/NewsContent/${news.id}`,
                label: { text: '阅读', color: 'white' },
              }"
            />
          </div>
        </div>
      </div>
      <PaginationSimple />
    </View>
  </BaseLayout>
</template>
