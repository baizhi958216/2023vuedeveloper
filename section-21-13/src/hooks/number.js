import { ref, computed, isRef, isReactive, reactive } from "vue";
export const useNumber = () => {
  let num = ref(0);
  const accounts = reactive({
    checking: 3242,
    savings: 242,
  });

  console.log(isRef(num));
  console.log(isReactive(accounts));

  console.log(num);

  function increment() {
    num.value++;
  }

  const double = computed(() => {
    return num.value * 2;
  });

  return { num, increment, double };
};
