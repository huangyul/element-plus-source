import { mount } from '@vue/test-utils';
import Card from '../src/index.vue';

const AXIOM = 'beauty girl';

describe('card vue', () => {
  test('render text', () => {
    const wrapper = mount(Card, {
      slots: {
        default: AXIOM,
      },
    });
    expect(wrapper.text()).toEqual(AXIOM);
  });

  test('string header', () => {
    const header = 'I am header';
    const wrapper = mount(Card, {
      slots: {
        default: AXIOM,
      },
      props: {
        header,
      },
    });
    expect(wrapper.text()).toContain(header);
  });

  test('slot header', () => {
    const headerCls = 'header-text';
    const btnCls = 'btn-test';
    const wrapper = mount(Card, {
      slots: {
        default: AXIOM,
        header: `<div><span class="${headerCls}"></span><p class="${btnCls}"></p></div>`,
      },
    });
    expect(wrapper.find('.header-text').exists()).toBe(true);
    expect(wrapper.find('.btn-test').exists()).toBe(true);
  });

  test('shadow', () => {
    const wrapper = mount(Card, {
      props: {
        shadow: 'hover',
      },
    });
    expect(wrapper.find('.my-card-shadow-hover').exists()).toBe(true);
  });
});
