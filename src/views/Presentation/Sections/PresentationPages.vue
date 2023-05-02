<script setup>
import ExampleCard from "../Components/ExampleCard.vue";
import MaterialBadge from "../../../components/MaterialBadge.vue";

//加载api
import useNewsList from "@/api/useNewsList";

const { newList } = useNewsList();
</script>
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
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-8">
          <div class="row mt-4">
            <div
              class="col-md-6 mt-md-0 mt-5"
              v-for="(news, index) in newList"
              :key="index"
            >
              <ExampleCard
                class="shadow-lg"
                :title="news.attributes.title.slice(0, 30) + '...'"
                image="http://localhost:3000/public/work2.png"
                route=""
              />
            </div>
          </div>
        </div>
        <div class="col-md-3 mx-auto mt-md-0 mt-3">
          <div class="position-sticky" style="top: 100px !important">
            <h3>实例</h3>
            <h6 class="text-secondary font-weight-normal">实例</h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
