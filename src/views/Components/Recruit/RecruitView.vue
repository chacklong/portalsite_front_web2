<script setup>
// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import Footer from "@/examples/footers/FooterCentered.vue";
import Header from "@/examples/Header.vue";

// sections
import Profile from "./Sections/RecruitProfile.vue";
import Posts from "./Sections/RecruitPosts.vue";

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
    <Profile />
    <Posts />
  </div>
  <!-- <Contact /> -->
  <Footer />
</template>
