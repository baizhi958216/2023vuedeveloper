import SongItem from "@/components/SongItem.vue";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("SongItem.vue", () => {
  test("render song.display_name", () => {
    const song = {
      display_name: "test",
    };
    const wrapper = shallowMount(SongItem, {
      propsData: {
        song,
      },
    });
    // 有报错: 因为router-link没有注册
    expect(wrapper.text()).toContain(song.display_name);
  });
});
