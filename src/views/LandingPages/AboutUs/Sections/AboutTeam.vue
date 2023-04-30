<script setup>
// example component
import HorizontalTeamCard from "@/examples/cards/teamCards/HorizontalTeamCard.vue";

// images
import demo from "@/assets/img/login1.png";
</script>

<template>
  <section
    class="pb-5 position-relative bg-gradient-dark mx-n3"
    style="margin-bottom: -15px !important"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-start mb-5 mt-5 text-center">
          <h3 class="text-white z-index-1 position-relative">我们的团队</h3>
          <p class="text-white opacity-8 mb-0">
            我们的制作团队不光在技术上处于行业前端，我们更注重将客户的产品表达的清楚与准确
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4"
            :image="demo"
            :profile="{ name: '高级工程师', link: 'javascript:;' }"
            :position="{ label: 'UI Designer', color: 'info' }"
            description="人物介绍"
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4"
            :image="demo"
            :profile="{ name: '高级工程师', link: 'javascript:;' }"
            :position="{ label: 'UI Designer', color: 'info' }"
            description="人物介绍"
          />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4"
            :image="demo"
            :profile="{ name: '高级工程师', link: 'javascript:;' }"
            :position="{ label: 'UI Designer', color: 'info' }"
            description="人物介绍"
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4"
            :image="demo"
            :profile="{ name: '高级工程师', link: 'javascript:;' }"
            :position="{ label: 'UI Designer', color: 'info' }"
            description="人物介绍"
          />
        </div>
      </div>
    </div>
  </section>
</template>
