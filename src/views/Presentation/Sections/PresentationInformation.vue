<script setup>
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";
import PageCard from "./PageCard1.vue";
</script>
<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
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
              icon="devices"
              title="技术服务-1"
              description="无论您是在寻找网络、数据中心、云计算、智能制造、物联网等领域的技术服务，还是需要专业的技术培训、咨询、维修等技术支持，我们都能满足您的需求"
            />
            <DefaultInfoCard
              icon="devices"
              title="技术服务-2"
              description="无论您是在寻找网络、数据中心、云计算、智能制造、物联网等领域的技术服务，还是需要专业的技术培训、咨询、维修等技术支持，我们都能满足您的需求"
            />
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard
              icon="devices"
              title="技术服务-3"
              description="无论您是在寻找网络、数据中心、云计算、智能制造、物联网等领域的技术服务，还是需要专业的技术培训、咨询、维修等技术支持，我们都能满足您的需求"
            />
            <DefaultInfoCard
              icon="devices"
              title="技术服务-4"
              description="无论您是在寻找网络、数据中心、云计算、智能制造、物联网等领域的技术服务，还是需要专业的技术培训、咨询、维修等技术支持，我们都能满足您的需求"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
