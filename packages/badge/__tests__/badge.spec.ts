import { mount } from '@vue/test-utils';
import ElBadge from '../src/index.vue';

const AXIOM = 'Beauty girl';

describe('Badge.vue', () => {
  test('render test', () => {
    const instance = mount(ElBadge, {
      slots: {
        default: AXIOM,
      },
    });
    expect(instance.text()).toEqual(AXIOM);
  });
});
