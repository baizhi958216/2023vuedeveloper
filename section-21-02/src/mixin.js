export default {
  data() {
    return {
      offset: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.update);
  },
  methods: {
    update() {
      this.offset = window.pageYOffset;
    },
  },
};
