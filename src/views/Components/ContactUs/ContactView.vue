<script setup>
import { onMounted, reactive, ref } from "vue";
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import weixin from "@/assets/img/weixinlogo.jpg";
// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});

const formRef = ref();
const dynamicValidateForm = reactive({
  domains: [{ key: 1, value: "" }],
  email: "",
});
const labelPosition = ref("top");

const submitForm = (formEl) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const ruleForm = reactive({
  desc: "",
});
</script>
<style scoped>
/* .contact-us {
  padding: 20px;
} */

.navbar-wrapper {
  position: sticky;
  top: 0;
  z-index: 999;
}

.contact-section {
  /* position: relative; */
  margin-top: 35px;
}

.card {
  border-radius: 10px;
}

.card-header {
  padding: 10px 20px;
}

.card-body {
  padding: 20px;
}

.contact-form {
  margin-top: 20px;
}

.domain-list {
  margin-bottom: 10px;
}

.domain-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.delete-button {
  color: red;
}

.form-buttons {
  margin-top: 20px;
  text-align: right;
}
.el-input {
  width: 400px;
}
.el-form {
  float: right;
}
</style>
<template>
  <div class="contact-us">
    <div class="navbar-wrapper">
      <DefaultNavbar
        :action="{ color: 'bg-gradient-dark', label: '首页', route: '/' }"
        :light="true"
      />
    </div>
    <section class="contact-section">
      <div class="container">
        <div class="card">
          <div class="card-header bg-gradient-info">
            <h3 class="text-white">联系我们</h3>
          </div>
          <div class="card-body">
            <el-form
              ref="formRef"
              :model="dynamicValidateForm"
              label-width="120px"
              class="contact-form"
              :label-position="labelPosition"
            >
              <el-form-item prop="name" label="你的姓名" :rules="emailRules">
                <el-input v-model="dynamicValidateForm.email" />
              </el-form-item>
              <el-form-item prop="phone" label="你的电话" :rules="emailRules">
                <el-input v-model="dynamicValidateForm.email" />
              </el-form-item>
              <el-form-item prop="email" label="你的邮箱" :rules="emailRules">
                <el-input v-model="dynamicValidateForm.email" />
              </el-form-item>
              <el-form-item label="其他描述" prop="desc">
                <el-input v-model="ruleForm.desc" type="textarea" />
              </el-form-item>
              <div class="form-buttons">
                <el-button
                  class="submit-button"
                  @click="submitForm"
                  type="primary"
                  >提交</el-button
                >
              </div>
            </el-form>
            <div class="contact-y">
              <el-text class="mx-1" size="large" type="info"
                >电话：17685363757</el-text
              >
              <br />
              <el-text class="mx-1" size="large" type="info"
                >传真：0856-009191911</el-text
              >
              <br />
              <el-text class="mx-1" size="large" type="info"
                >公众号：XXXX</el-text
              >
              <br />
              <img :src="weixin" alt="weixin" width="100px" height="100px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
