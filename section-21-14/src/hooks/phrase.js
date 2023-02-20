import { ref, watch, watchEffect } from "vue";
export const usePhrase = () => {
  const phrase = ref("");
  const reversedPhrase = ref("");
  const num = ref(null);

  /* watch([phrase],([newVal,oldVal]) => {
      reversedPhrase.value = phrase.value.split("").reverse().join("");
    }); */

  watchEffect(() => {
    reversedPhrase.value = phrase.value.split("").reverse().join("");
  });
  return { phrase, reversedPhrase, num };
};
