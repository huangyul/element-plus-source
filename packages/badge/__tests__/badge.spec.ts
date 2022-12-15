import { mount } from '@vue/test-utils';
import ElBadge from '../src/index.vue';

const AXION = 'beauty';

describe('Badge.vue', () => {
  test('has value', () => {
    const instance = mount(ElBadge, {
      props: {
        value: 80,
      },
    });
    expect(instance.vm.content).toEqual(80);
  });

  test('is fixed', () => {
    const instance = mount(ElBadge, {
      slots: {
        default: AXION,
      },
    });
    expect(instance.find('.el-badge__content.is-fixed').exists()).toBe(true);
  });

  test('max', async () => {
    const instance = mount(ElBadge, {
      props: {
        value: 200,
        max: 100,
      },
      slots: {
        default: AXION,
      },
    })
    expect(instance.vm.content).toEqual('100+')
    await instance.setProps({ value: 80 })
    expect(instance.vm.content).toEqual(80)
  })
});
