<script setup>
import ExampleCard from "../Components/ExampleCard.vue";
import MaterialBadge from "./Components/MaterialBadge.vue";
//加载api
import useNewsList from "@/api/useNewsList";
import { ref, onMounted, watch } from "vue";
const { newList } = useNewsList();
// console.log(newList);
const scrollPosition = ref(0);

//定义计算属性来筛选新闻
// const filteredNews = computed(() => {
//   return newList.value;
// });
//创建一个watch监听最近消息，每当最新消息更新时，将滚动位置重置为0
watch(newList, () => {
  scrollPosition.value = 0;
});

//在组件挂载时添加一个window。scoll事件监听器，当页面滚动时更新滚动位置
onMounted(() => {
  window.addEventListener("scroll", () => {
    scrollPosition.value = window.scrollY;
  });
});

// const conut = ref(0);
// const load = () => {
//   conut.value += 1;
// };
const getFullImageUrl = (url) => {
  return "http://8.222.140.62:1337" + url;
};

const getImageUrl = (news) => {
  if (news.attributes.image.data.length > 0) {
    return getFullImageUrl(news.attributes.image.data[0].attributes.url);
  }
  return ""; // 或者根据需求返回默认图片的 URL
};
</script>
<style scoped>
/*  */
.card-anim {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}
.card-anim.card-show {
  opacity: 1;
  transform: translateY(0px);
}
.new-box {
  margin: 0;
  /* background-color: #409eff; */
  /* background-color: rgba(151, 149, 220, 0.793); */
}
.new-box-content {
  background-color: #ffffff00;
  border-radius: 8px;
  box-shadow: 1px 5px 12px rgba(64, 160, 255, 0.19);
}
.infinite-list {
  height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list .infinite-list-item {
  /* display: flex; */
  align-items: center;
  justify-content: center;
  /* height: 50px; */
  background: var(--el-color-primary-light-9);
  margin: 10px;
  color: var(--el-color-primary);
  background-color: #ffffff00;
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>
<template>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="row text-center my-sm-5 mt-5">
          <div class="col-lg-6 mx-auto">
            <MaterialBadge color="info" class="mb-3">企业资讯</MaterialBadge>
            <h2 class="">企业资讯</h2>
            <p class="lead">
              企业资讯可以帮助公众了解企业的最新情况，增加企业的知名度和影响力，也可以帮助企业与客户、合作伙伴、投资者等建立良好的沟通和信任
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-sm-5 mt-3">
      <div class="row pt-lg-6">
        <div class="col-md-12">
          <div class="row mt-3">
            <div
              class="col-md-4 mt-md-0 mt-5"
              v-for="(news, index) in newList.slice(0, 12)"
              :key="index"
            >
              <ExampleCard
                class="shadow-lg card-anim"
                :title="news.attributes.title"
                :image="getImageUrl(news)"
                :route="{ name: 'demo', params: { id: 1 } }"
              />
            </div>
          </div>
        </div>
        <!-- <div class="col-md-3 mx-auto mt-md-0 mt-3">
          <div class="position-sticky" style="top: 100px !important">
            <h3>最新资讯</h3>
            <div class="new-box">
              <div class="col-9 new-box-content">
                <ul
                  v-infinite-scroll="load"
                  class="infinite-list"
                  style="overflow: auto"
                >
                  <li
                    v-for="(newsid, index) in filteredNews"
                    :key="index"
                    class="infinite-list-item text-dark"
                  >
                    {{ newsid.attributes.title }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>
