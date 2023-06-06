<script setup>
//click
import { ElMessage } from "element-plus";
import useJobList from "@/api/usejoblist";

const { jobList } = useJobList();
const open1 = () => {
  ElMessage({
    message: "暂未支持提交，请通过邮箱或联系方式进行投递",
    type: "warning",
  });
};
</script>
<template>
  <section class="py-3 mt-5">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-12 col-sm-0 mt-3"
          v-for="(item, index) in jobList"
          :key="index"
        >
          <el-card class="box-card">
            <div class="jobtitle">
              <h3>{{ item.attributes.title }}</h3>
            </div>
            <div class="jobkeys">
              <el-tag class="ml-2" type="primary"
                ><span>薪资：</span>{{ item.attributes.salary }}</el-tag
              >
              <el-tag class="ml-2 m-1" type="primary"
                ><span>学历：</span>{{ item.attributes.diploma }}</el-tag
              >
              <el-tag class="ml-2 m-1" type="primary"
                ><span>经验：</span>1-3年</el-tag
              >
            </div>
            <div class="jobcontent">
              <p>{{ item.attributes.description }}</p>
            </div>
            <div class="jobbutton">
              <el-button :plain="true" @click="open1" type="primary"
                >立即提交</el-button
              >
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </section>
</template>
