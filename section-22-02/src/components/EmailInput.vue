<template>
  <input
    type="email"
    class="form-control"
    placeholder="E-mail"
    :value="email"
    @input="update($event)"
    :class="{
      'is-valid': email.length >= 4 && email.length > 0,
      'is-invalid': email.length < 4 && email.length > 0,
    }"
  />
</template>

<script>
export default {
  name: "EmailInput",
  props: ["email"],
  methods: {
    update($event) {
      this.$emit("update:email", $event.target.value);
    },
  },
  /* data() {
    return {
      value: "",
    };
  }, */
};
</script>

<style lang="scss" scoped></style>
