<script setup>
import ExampleCard from "./Components/ExampleCard.vue";
import MaterialBadge from "@/components/MaterialBadge.vue";

//加载api
import useCaseList from "@/api/case/usedefault";
const { caseList } = useCaseList();

const getFullImageUrl = (url) => {
  return "http://8.222.140.62:1337" + url;
};

const getImageUrl = (caseitem) => {
  if (caseitem.attributes.image.data.length > 0) {
    return getFullImageUrl(caseitem.attributes.image.data[0].attributes.url);
  }
  return ""; // 或者根据需求返回默认图片的 URL
};
defineProps({
  col1: {
    type: String,
    default: "col-lg-3",
  },
  col2: {
    type: String,
    default: "col-lg-9",
  },
});
</script>
<script>
export default {
  inheritAttrs: false,
};
</script>
<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row">
        <div class="row justify-content-center text-center my-sm-5">
          <div class="col-lg-6">
            <MaterialBadge color="info" class="mb-3">客户案例</MaterialBadge>

            <h2 class="text-dark mb-0">客户案例</h2>
            <p class="lead">
              客户案例是一种展示企业产品或服务的效果和价值的有效方式，可以帮助企业提升品牌形象，增加客户信任，促进销售转化
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-sm-5 mt-3">
      <div class="row pt-lg-6">
        <div class="col-lg-12">
          <div class="row mt-3">
            <div
              class="col-md-4 mt-md-0"
              v-for="(caseitem, index) in caseList"
              :key="index"
            >
              <ExampleCard
                class="min-height-160 shadow-lg mt-4 text-center"
                :image="getImageUrl(caseitem)"
                :title="caseitem.attributes.title"
                :route="{ name: 'demo', params: { id: 1 } }"
                @mouseenter="showText = true"
                @mouseleave="showText = false"
              >
                <div v-show="showText" class="card-text-overlay">
                  <!-- 要显示的文字内容 -->
                </div>
              </ExampleCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
