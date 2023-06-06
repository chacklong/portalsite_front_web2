<script setup>
import { onMounted, ref } from "vue";

import { getNewsDetail } from "@/api/news";
const newList = ref([]);

onMounted(async () => {
  const route = useRoute(); // 使用useRoute来获取路由对象
  try {
    const response = await getNewsDetail(route.params.id);
    newList.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
import BaseLayout from "./components/BaseLayout.vue";
import View from "./components/View.vue";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";
import { useRoute } from "vue-router";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    :breadcrumb="[
      { label: '企业资讯', route: '#' },
      {
        label: '新闻列表',
        route: 'http://localhost:3000/corporateinformation/newscontent',
      },
      { label: '新闻详情' },
    ]"
  >
    <View title="新闻详情">
      <div class="container">
        <div class="row">
          <div
            class="col-12 mt-4"
            v-for="(news, index) in newList"
            :key="index"
          >
            <div class="newsheader text-center">
              <h3>{{ news.title }}</h3>
            </div>
            <div class="newcontent text-center">
              <p>{{ news.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </View>
  </BaseLayout>
</template>
