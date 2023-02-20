<template>
  <input
    type="email"
    class="form-control"
    placeholder="E-mail"
    :value="email"
    @input="update($event)"
    :class="{
      'is-valid': emailValidate(email),
      'is-invalid': !emailValidate(email),
    }"
  />
</template>

<script>
import emailValidate from "../email-validate";
export default {
  name: "EmailInput",
  props: ["email"],
  methods: {
    update($event) {
      this.$emit("update:email", $event.target.value);
    },
    emailValidate,
  },
  /* data() {
    return {
      value: "",
    };
  }, */
};
</script>

<style lang="scss" scoped></style>
