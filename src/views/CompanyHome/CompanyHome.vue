<script setup>
import { onMounted, onUnmounted, ref } from "vue";

//example components
import NavbarDefault from "./Components/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";
import JobCard from "./Components/JobCard.vue";

//Vue Material Kit 2 components
import MaterialSocialButton from "@/components/MaterialSocialButton.vue";

// sections
import CorporateView from "./Sections/CorporateView.vue";
import CustomerStories from "./Sections/CustomerStories.vue";
import DataShow from "./Sections/DataShow.vue";
import BuiltByDevelopers from "./Components/BuiltByDevelopers.vue";
import TechnologyService from "./Sections/TechnologyService.vue";

//加载API
import useJobList from "@/api/usejoblist";
const { jobList } = useJobList();

//images
import vueMkHeader from "@/assets/img/banner-new-202007.jpg";
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});

//weixin logo
const showImage = ref(false);
function handleMouseenter() {
  showImage.value = true;
}
function handleMouseleave() {
  showImage.value = false;
}
</script>
<style scoped>
.im-p {
  display: flex;
  float: right;
  margin-right: auto;
}
.image-container {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.fade-in {
  animation: fade-in 0.5s ease-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10%);
  }

  to {
    opacity: 1;
    transform: translateY(0%);
  }
}
</style>

<template>
  <div class="position-sticky z-index-sticky top-0">
    <NavbarDefault
      :action="{ color: 'bg-gradient-dark', label: '首页', route: '#' }"
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
    <DataShow />
    <TechnologyService />
    <CustomerStories />
    <el-divider />
    <CorporateView />
    <el-divider />
    <BuiltByDevelopers />

    <div class="container">
      <div class="row">
        <div
          class="col-lg-4 mt-3"
          v-for="(item, index) in jobList.slice(0, 3)"
          :key="index"
        >
          <JobCard
            class="p-4"
            :color="{ text: 'white', background: 'bg-gradient-light' }"
            :icon="{ component: 'work', color: 'white' }"
            :title="item.attributes.title"
            :description="item.attributes.keywords"
            :keyword="item.attributes.salary"
            :action="{
              route: '/liweikeji/Components/recruit',
              label: { text: '查看', color: 'white' },
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
              component="weixin"
              color="info"
              label="微信"
              @mouseenter="handleMouseenter"
              @mouseleave="handleMouseleave"
              route="/"
            />
            <div
              id="weixin-logo"
              class="image-container col-lg-8 me-lg-1"
              v-if="showImage"
            >
              <img
                v-if="showImage"
                class="logo-size fade-in"
                src="../../../public/weixinlogo.jpg"
                alt="weixin logo"
                width="200"
                height="190"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>
