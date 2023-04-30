<script setup>
import { onMounted } from "vue";

// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import Header from "@/examples/Header.vue";

import BackgroundBlogCard from "@/examples/cards/blogCards/BackgroundBlogCard.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>
<template>
  <DefaultNavbar
    transparent
    :action="{ color: 'bg-gradient-dark', label: '微信' }"
  />
  <Header>
    <div
      class="page-header align-items-start min-vh-100"
      :style="{
        backgroundImage: 'url(http://8.222.140.62:3000/service-bg-2.jpg)',
      }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container my-auto">
        <div class="row">
          <div class="col-3">
            <BackgroundBlogCard
              image="http://8.222.140.62:3000/service-bg.jpg"
              title="软件服务"
              description="软件服务"
              :action="{ label: '', color: 'bg-gradient-info' }"
            />
          </div>
          <div class="col-3">
            <BackgroundBlogCard
              image="http://8.222.140.62:3000/service-bg.jpg"
              title="硬件服务"
              description="硬件服务"
              :action="{ label: '', color: 'bg-gradient-info' }"
            />
          </div>
          <div class="col-3">
            <BackgroundBlogCard
              image="http://8.222.140.62:3000/service-bg.jpg"
              title="系统集成服务"
              description="系统集成服务"
              :action="{ label: '', color: 'bg-gradient-info' }"
            />
          </div>
          <div class="col-3">
            <BackgroundBlogCard
              image="http://8.222.140.62:3000/service-bg.jpg"
              title="技术解决方案"
              description="技术解决方案"
              :action="{ label: '', color: 'bg-gradient-info' }"
            />
          </div>
        </div>
      </div>
    </div>
  </Header>
</template>
