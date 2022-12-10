import { mount } from "@vue/test-utils";
import Button from "../src/index.vue";

const AXIOM = "Rem is the best girl";
const COMMON_CONFIG = {
  global: {
    provide: {
      elForm: {},
      elFormItem: {},
    },
  },
};

// 定义
describe("Button.vue", () => {
  // 测试一，渲染文本
  test("render text", () => {
    const instance = mount(Button, {
      slots: {
        default: AXIOM,
      },
      ...COMMON_CONFIG,
    });
    expect(instance.text()).toEqual(AXIOM);
  });

  // 测试二 模拟点击
  test("handle click", async () => {
    const instance = mount(Button, {
      slots: {
        default: AXIOM,
      },
      ...COMMON_CONFIG,
    });
    await instance.trigger("click");
    expect(instance.emitted()).toBeDefined();
  });
});
