import { onMounted, ref } from "vue";
import { getNewsList } from "@/api/news";

export default function useNewsList() {
  const newList = ref([]);

  onMounted(async () => {
    try {
      const response = await getNewsList();
      newList.value = response.data;
      // console.log(newList.value[0].attributes);
    } catch (error) {
      console.error(error);
    }
  });

  return { newList };
}
