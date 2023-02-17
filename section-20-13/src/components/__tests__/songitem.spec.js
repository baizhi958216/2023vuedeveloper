import SongItem from "@/components/SongItem.vue";
import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import { expect } from "vitest";

describe("SongItem.vue", () => {
  test("render song.display_name", () => {
    const song = {
      display_name: "test",
    };
    const wrapper = shallowMount(SongItem, {
      // 塞假数据
      propsData: {
        song,
      },

      // 加载路由
      global: {
        components: {
          "router-link": RouterLinkStub,
        },
      },
    });

    // 通过css查找
    const compositionAuthor = wrapper.find(".text-gray-500");

    // 测试是否正常渲染
    expect(compositionAuthor.text()).toBe(song.display_name);

    // 尽可能避免boolean的判断, 发生错误后不能准确的知道具体的错误位置
    // expect(compositionAuthor.text() === song.display_name).toBe(false);
  });

  test("render song.docID in id attribute", () => {
    const song = {
      docID: "abc",
    };
    const wrapper = shallowMount(SongItem, {
      // 塞假数据
      propsData: {
        song,
      },

      // 加载路由
      global: {
        components: {
          "router-link": RouterLinkStub,
        },
      },
    });

    // id选择器
    expect(wrapper.attributes().id).toBe(`song-id-${song.docID}`);
    // class选择器
    expect(wrapper.classes()).toContain(`song-id-${song.docID}`);
  });
});
