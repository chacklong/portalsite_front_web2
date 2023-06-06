<script setup>
import { onMounted } from "vue";

//Vue Material Kit 2 components
import MaterialAvatar from "./components/MaterialAvatar.vue";
import MaterialButton from "./components/MaterialButton.vue";

// image
import profilePic from "@/assets/img/bg.jpg";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>
<template>
  <section class="py-sm-7 py-5 position-relative">
    <div class="container">
      <div class="row">
        <div class="col-12 mx-auto">
          <div class="mt-n8 mt-md-n9 text-center">
            <div class="blur-shadow-avatar">
              <MaterialAvatar
                size="xxl"
                class="shadow-xl position-relative z-index-2"
                :image="profilePic"
                alt="logo"
              />
            </div>
          </div>
          <div class="row py-7">
            <div
              class="col-lg-7 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mx-auto"
            >
              <div
                class="d-flex justify-content-between align-items-center mb-2"
              >
                <h3 class="mb-0">企业名称</h3>
                <div class="d-block">
                  <MaterialButton
                    class="text-nowrap mb-0"
                    variant="outline"
                    color="info"
                    size="sm"
                    >tag</MaterialButton
                  >
                </div>
              </div>
              <div class="row mb-4">
                <div class="col-auto">
                  <span class="h6 me-1">323</span>
                  <span>tag</span>
                </div>
                <div class="col-auto">
                  <span class="h6 me-1">3.5k</span>
                  <span>tag</span>
                </div>
                <div class="col-auto">
                  <span class="h6 me-1">260</span>
                  <span>tag</span>
                </div>
              </div>
              <p class="text-lg mb-0">
                它是一家涵盖地产开发、商业投资、长租公寓、物业管理、智慧营造等多航道业务的公司。龙湖集团成立于1993年，发展于全国，目前已形成开发、运营、服务三大业务板块，并积极试水医养、产城等创新领域，实现全国一二线高能级城市的全面布局。截至2022年12月底，龙湖集团2016亿元合同销售额，地产开发1100+个开发项目，97%高能级城市销售占比²
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
