import { onMounted, ref } from "vue";
import { getServiceItem } from "@/api/serviceitem/default";

export default function useDefault() {
  // 使用响应式对象来存储服务项目列表
  const serList = ref([]);

  // 定义一个获取服务项目数据的异步函数
  async function fetchServiceItem() {
    try {
      // 调用API并获取响应数据
      const response = await getServiceItem();
      // 将响应数据赋值给serList
      serList.value = response.data;
      // console.log(serList.value);
    } catch (error) {
      // 如果发生错误，打印错误信息
      console.error(error);
    }
  }

  // 在组件挂载后调用获取服务项目数据的函数
  onMounted(fetchServiceItem);

  // 返回serList供其他组件使用
  return { serList };
}
