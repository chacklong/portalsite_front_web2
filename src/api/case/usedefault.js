import { onMounted, ref } from "vue";
import { getCaseDefault } from "./default";
export default function useCaseList() {
  const caseList = ref([]);
  onMounted(async () => {
    try {
      const response = await getCaseDefault();
      caseList.value = response.data;
    } catch (error) {
      console.log(error);
    }
  });
  return { caseList };
}
