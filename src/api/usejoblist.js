import { onMounted, ref } from "vue";
import { getJobsList } from "./jobs";

export default function useJobList() {
  const jobList = ref([]);

  onMounted(async () => {
    try {
      const response = await getJobsList();
      jobList.value = response.data;
    } catch (error) {
      console.log(error);
    }
  });
  return { jobList };
}