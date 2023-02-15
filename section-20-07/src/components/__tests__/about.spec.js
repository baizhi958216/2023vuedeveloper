import About from "@/views/About.vue";
import { shallowMount } from "@vue/test-utils";

describe("About.vue", () => {
  test("renders inner test", () => {
    /* const wrapper = mount(About, {
      shallow: true,
    }); */
    const wrapper = shallowMount(About);

    expect(wrapper.text()).toContain("关于");
  });
});
