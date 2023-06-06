<script setup>
import { onMounted } from "vue";
import { ElMessage } from "element-plus";

import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});

//oprions
const options = [
  {
    value: "oprion",
    label: "ALL",
  },
];

// import { ElNotification } from 'element-plus'
const open1 = () => {
  ElMessage({
    message: "暂未支持查询",
    type: "warning",
  });
};
</script>
<template>
  <section class="card py-sm-7 py-5 position-relative">
    <div class="container">
      <div class="row">
        <div class="col-7 mf-auto">
          <el-row :gutter="20">
            <el-col :span="16"
              ><el-input
                size="large"
                v-model="input"
                placeholder="查询职位"
                clearable
            /></el-col>
            <el-col :span="8"
              ><el-button
                :plain="true"
                @click="open1"
                type="primary"
                size="large"
                :icon="Search"
                >查询</el-button
              ></el-col
            >
          </el-row>
        </div>
        <div class="col-12 mx-auto">
          <span>职位类型</span>
          <el-select v-model="value" class="m-2" placeholder="ALL" size="large">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <span>工作经验</span>
          <el-select v-model="value" class="m-2" placeholder="ALL" size="large">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <span>学历要求</span>
          <el-select v-model="value" class="m-2" placeholder="ALL" size="large">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </div>
    </div>
  </section>
</template>
