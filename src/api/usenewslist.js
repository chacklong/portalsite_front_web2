import { onMounted, ref } from "vue";
import { getNewsDefault } from "@/api/news";

export default function useNewsList() {
  const newList = ref([]);

  onMounted(async () => {
    try {
      const response = await getNewsDefault();
      newList.value = response.data;
      // console.log(newList.value);
    } catch (error) {
      console.error(error);
    }
  });

  return { newList };
}
