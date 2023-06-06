<script setup>
import jobbackground from "@/assets/img/20230501130249.jpg";
</script>
<style scoped>
.job-join-button {
  /* border: 1px #6e6ec59d solid !important; */
  width: 120px;
  height: 30px;
  border-radius: 12px;
  text-align: center;
}
</style>
<template>
  <div class="container mt-sm-5">
    <div
      class="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl"
      :style="`background-image: url(${jobbackground})`"
      loading="lazy"
    >
      <span class="mask bg-gradient-white"></span>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 ms-lg-5">
            <h4 class="text-dark">人才服务</h4>
            <h1 class="text-dark">欢迎加入我们的团队</h1>
            <p class="lead text-dark opacity-8">
              人才招聘是指企业或组织为了满足自身发展需要，通过各种渠道和方式，寻找和吸引合适的人才的活动
            </p>
            <div class="job-join-button">
              <a
                href="/liweikeji/Components/recruit"
                class="text-dark text-center icon-move-right"
              >
                加入我们
                <i class="fas fa-arrow-right text-sm ms-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
