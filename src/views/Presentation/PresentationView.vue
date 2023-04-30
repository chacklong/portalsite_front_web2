<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";
import FilledInfoCard from "../../examples/cards/infoCards/FilledInfoCard.vue";

//Vue Material Kit 2 components
import MaterialSocialButton from "@/components/MaterialSocialButton.vue";

// sections
import PresentationCounter from "./Sections/PresentationCounter.vue";
import PresentationPages from "./Sections/PresentationPages.vue";
import PresentationExample from "./Sections/PresentationExample.vue";
import data from "./Sections/Data/designBlocksData";
import BuiltByDevelopers from "./Components/BuiltByDevelopers.vue";
// import PresentationTestimonials from "./Sections/PresentationTestimonials.vue";
import PresentationInformation from "./Sections/PresentationInformation.vue";

//images
import vueMkHeader from "@/assets/img/banner-new-202007.jpg";
// import wavesWhite from "@/assets/img/waves-white.svg";
// import logoBootstrap from "@/assets/img/logos/bootstrap5.jpg";
// import logoTailwind from "@/assets/img/logos/icon-tailwind.jpg";
// import logoVue from "@/assets/img/logos/vue.jpg";
// import logoAngular from "@/assets/img/logos/angular.jpg";
// import logoReact from "@/assets/img/logos/react.jpg";
// import logoSketch from "@/assets/img/logos/sketch.jpg";
// import { type } from "os";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
</script>

<template>
  <div class="position-sticky z-index-sticky top-0">
    <NavbarDefault
      :action="{ color: 'bg-gradient-dark', label: '微信' }"
      :light="true"
    />
  </div>
  <Header>
    <div
      class="page-header min-vh-75"
      :style="`background-image: url(${vueMkHeader})`"
      loading="lazy"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1
              class="text-white pt-3 mt-n5 me-2"
              :style="{ display: 'inline-block ' }"
            >
              技术服务与技术支持
            </h1>
            <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500' }">
              我们是一家专业提供技术服务和技术支持的公司，拥有多年的IT行业经验和优秀的技术团队
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <PresentationCounter />
    <PresentationInformation />
    <PresentationExample :data="data" />
    <PresentationPages />
    <BuiltByDevelopers />

    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <FilledInfoCard
            class="p-4"
            :color="{ text: 'white', background: 'bg-gradient-info' }"
            :icon="{ component: 'work', color: 'white' }"
            title="linux运维工程师"
            description="岗位要求"
            :action="{
              route: '/',
              label: { text: '查看', color: 'white' }
            }"
          />
        </div>
        <div class="col-lg-4">
          <FilledInfoCard
            class="px-lg-1 mt-lg-0 mt-4 p-4"
            height="h-100"
            :icon="{ component: 'work', color: 'info' }"
            title="全栈开发工程师"
            description="岗位要求"
            :action="{
              route: '/',
              label: { text: '查看', color: 'info' },
            }"
          />
        </div>
        <div class="col-lg-4">
          <FilledInfoCard
            class="px-lg-1 mt-lg-0 mt-4 p-4"
            height="h-100"
            :icon="{ component: 'work', color: 'info' }"
            title="C++服务器开发工程师"
            description="岗位要求"
            :action="{
              route: '/',
              label: { text: '查看', color: 'info' },
            }"
          />
        </div>
      </div>
    </div>
    <div class="py-10">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 ms-auto">
            <h4 class="mb-1">感谢你的认可</h4>
            <p class="lead mb-0">我们将会持续提供更优质的技术支持</p>
          </div>
          <div class="col-lg-5 me-lg-auto my-lg-auto text-lg-end mt-5">
            <MaterialSocialButton
              route="#"
              component="weixin"
              color="info"
              label="微信"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>
