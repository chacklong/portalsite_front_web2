<script setup>
// example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import Header from "../../../examples/Header.vue";

// sections
import AuthorPosts from "./Sections/AuthorPosts.vue";
import AuthorProfile from "./Sections/AuthorProfile.vue";

// image
import image from "@/assets/img/bg.jpg";
</script>
<template>
  <DefaultNavbar
    transparent
    :action="{ color: 'bg-gradient-dark', label: '首页', route: '/' }"
  />
  <Header>
    <div
      class="page-header min-height-400"
      :style="{ backgroundImage: `url(${image})` }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-8"></span>
    </div>
  </Header>
  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
    <AuthorProfile />
    <AuthorPosts />
  </div>
</template>
