<script setup>
import { onMounted } from "vue";
import { ElMessage } from "element-plus";
//example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
// import DefaultFooter from "@/examples/footers/FooterDefault.vue";

//image
import image from "@/assets/img/demo1.png";

//material components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
// import MaterialButton from "@/components/MaterialButton.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});

const open1 = () =>{
  ElMessage({
    showClose: true,
    message: "暂未支持提交，请使用其他方式",
    type: "warning",
  });
};
</script>
<template>
  <div class="position-sticky z-index-sticky top-0">
    <DefaultNavbar
      :action="{ color: 'bg-gradient-dark', label: '微信' }"
      :light="true"
    />
  </div>
  <section>
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div
            class="col-6 d-lg-flex d-none h-100 my-auto pe-4 position-absolute top-0 start-3 text-center justify-content-center flex-column"
            style="
              width: 820px;
              height: 620px !important;
              margin-top: 142px !important;
            "
          >
            <div
              class="position-relative h-100 m-7 px-7 border-radius-lg d-flex flex-column justify-content-center"
              :style="{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
              }"
              loading="lazy"
            ></div>
          </div>
          <div
            class="mt-8 col-xl-5 col-lg-6 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5"
          >
            <div
              class="card d-flex blur justify-content-center shadow-lg my-sm-0 my-sm-6 mt-8 mb-5"
            >
              <div
                class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent"
              >
                <div class="bg-gradient-info shadow-info border-radius-lg p-3">
                  <h3 class="text-white text-info mb-0">联系我们</h3>
                </div>
              </div>
              <div class="card-body">
                <p class="pb-3">
                  对于进一步的问题，包括合作机会，
                  请发送电子邮件：3066199080@qq.com
                  <br />
                  联系电话：17685363757
                  <br />
                  公众号：科技
                </p>
                <form id="contact-form" method="post" autocomplete="off">
                  <div class="card-body p-0 my-3">
                    <div class="row">
                      <div class="col-md-6">
                        <MaterialInput
                          class="input-group-static mb-4"
                          type="name"
                          label="姓名"
                          placeholder="请输入姓名"
                        />
                      </div>
                      <div class="col-md-6 ps-md-2">
                        <MaterialInput
                          class="input-group-static mb-4"
                          type="email"
                          label="邮箱"
                          placeholder="demo@demo.com"
                        />
                      </div>
                    </div>
                    <div class="form-group mb-0 mt-md-0 mt-4">
                      <MaterialTextArea
                        id="message"
                        class="input-group-static mb-4"
                        :rows="6"
                        placeholder="请描述你的问题"
                        >我们如何为您提供帮助？</MaterialTextArea
                      >
                    </div>
                    <div class="row">
                      <div class="col-md-12 text-center">
                        <el-button type="primary" :plain="true" @click="open1"
                          >保存提交</el-button
                        >
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <DefaultFooter /> -->
</template>
