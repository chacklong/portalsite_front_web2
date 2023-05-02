import { onMounted, ref } from "vue";
import { getServiceItem } from "@/api/serviceitem/default";

export default function useDefault() {
  const serList = ref([]);

  onMounted(async () => {
    try {
      const response = await getServiceItem();
      serList.value = response.data;
      // console.log(newList.value[0].attributes);
    } catch (error) {
      console.error(error);
    }
  });

  return { serList };
}
