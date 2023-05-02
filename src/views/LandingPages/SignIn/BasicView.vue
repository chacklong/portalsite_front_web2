<script setup>
import { onMounted } from "vue";

// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import Header from "@/examples/Header.vue";

import useDefault from "@/api/serviceitem/usedefault";
const { serList } = useDefault();

// import BackgroundBlogCard from "@/examples/cards/blogCards/BackgroundBlogCard.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>
<style scoped>
.el-carousel__item h3 {
  display: flex;
  color: #000000;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #ffffff00;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #fdfdfd00;
}
</style>
<template>
  <DefaultNavbar
    transparent
    :action="{ color: 'bg-gradient-dark', label: '微信' }"
  />
  <Header>
      <div class="container mt-10">
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="(item, index) in serList" :key="index">
            <h3 text="2xl" justify="center">{{ item.attributes.title }}</h3>
            <h3 text="2xl" justify="center">{{ item.attributes.content }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
  </Header>
</template>
