<script setup>
import { onMounted } from "vue";

// example components
import DefaultNavbar from "./Sections/NavbarDefault.vue";
import Header from "@/examples/Header.vue";
import imagebg from "@/assets/img/hero-bg.png";
import useDefault from "@/api/serviceitem/usedefault";
const { serList } = useDefault();

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
  background-color: #ffffff00;
}
.tx-color {
  color: #ffffff;
}
.box-card {
  /* border: 1px #27262894 solid; */
  border-radius: 12px;
}
.box-card:hover {
  border-color: #613681;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  transition: 0.5s ease;
}
.box-content {
  max-width: 720px;
  margin-left: 270px;
}
.card-list {
  margin-top: 16px;
}
.tg-style {
  border: 1px #ffffff5a solid;
  background-color: #ffffff00;
  color: #ffffff;
  font-size: 30px;
  height: 140px;
  text-align: center;
  margin-top: 12px;
}
.tg-style .tg-f {
  margin-top: 10px;
}
</style>
<template>
  <DefaultNavbar
    transparent
    :action="{
      color: 'bg-gradient-dark',
      label: '首页',
      route: '/',
    }"
  />
  <Header>
    <div
      class="page-header align-items-start min-vh-100"
      :style="`background-image: url(${imagebg})`"
      loading="lazy"
    >
      <div class="container mt-11">
        <el-carousel indicator-position="outside" class="box-card">
          <el-carousel-item v-for="(item, index) in serList" :key="index">
            <h2 class="text-center tx-color mt-5">
              {{ item.attributes.title }}
            </h2>
            <div class="box-content">
              <h4 text="2xl" justify="center" class="text-center tx-color mt-5">
                {{ item.attributes.description }}
              </h4>
            </div>
          </el-carousel-item>
        </el-carousel>
        <div class="card-list">
          <el-row :gutter="8">
            <el-col
              :span="8"
              v-for="(item, index) in serList.slice(0, 3)"
              :key="index"
            >
              <el-card class="tg-style" shadow="hover">
                <h3 style="color: #ffffff; margin-top: 23px">
                  {{ item.attributes.title }}
                </h3>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </Header>
</template>
