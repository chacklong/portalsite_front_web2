<script setup>
import { onMounted } from "vue";
import BaseLayout from "./components/BaseLayout.vue";
import View from "./components/View.vue";
// import PaginationSimple from "./components/PaginationSimple.vue";
import FilledInfoCard from "@/examples/cards/infoCards/FilledInfoCard.vue";
import setNavPills from "@/assets/js/nav-pills";

//加载api
import useNewsList from "@/api/useNewsList";
const { newList } = useNewsList();

onMounted(() => {
  setNavPills();
});
</script>
<style scoped>
.example-pagination-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.pagination-container {
  margin: 0 auto;
}
</style>
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
                route: `/corporateinformation/newscontent/newsdetails/${news.id}`,
                label: { text: '阅读', color: 'white' },
              }"
            />
          </div>
        </div>
      </div>
      <div class="example-pagination-block text-center">
        <div class="example-demonstration">页面数量</div>
        <el-pagination layout="prev, pager, next" :total="50" />
      </div>
    </View>
  </BaseLayout>
</template>
