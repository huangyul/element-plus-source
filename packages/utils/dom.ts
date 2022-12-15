import isServer from './isServer';

const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;

const camelCase = function(name: string) {
  return name
    .replace(SPECIAL_CHARS_REGEXP, function(_, __, letter, offset) {
      return offset ? letter.toUpperCase() : letter;
    })
    .replace(MOZ_HACK_REGEXP, 'Moz$1');
};

/**
 * 给元素添加事件监听
 */
export const on = (function() {
  if (!isServer) {
    return function(
      element: HTMLElement | Document,
      event: string,
      handler: EventListenerOrEventListenerObject,
    ) {
      if (element && event && handler) {
        element.addEventListener(event, handler);
      }
    };
  }
})();

/**
 * 给元素移除事件监听
 */
export const off = (function() {
  if (!isServer) {
    return function(
      element: HTMLElement | Document,
      event: string,
      handler: EventListenerOrEventListenerObject,
    ) {
      if (element && event && handler) {
        element.removeEventListener(event, handler);
      }
    };
  }
})();

export const once = function(
  el: HTMLElement,
  event: string,
  fn: EventListener,
  ...args: Array<unknown>
): void {
  const listener = function() {
    if (fn) {
      fn.apply(this, args);
    }
    off(el, event, listener);
  };
  on(el, event, listener);
};

export function hasClass(el: HTMLElement, cls: string): boolean {
  if (!el || !cls) return false;

  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
}

/* istanbul ignore next */
export function addClass(el: HTMLElement, cls: string): void {
  if (!el) return;
  let curClass = el.className;
  const classes = (cls || '').split(' ');

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}

/* istanbul ignore next */
export function removeClass(el: HTMLElement, cls: string): void {
  if (!el || !cls) return;
  const classes = cls.split(' ');
  let curClass = ' ' + el.className + ' ';

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ');
    }
  }
  if (!el.classList) {
    el.className = curClass.trim();
  }
}

/* istanbul ignore next */
// Here I want to use the type CSSStyleDeclaration, but the definition for CSSStyleDeclaration
// has { [index: number]: string } in its type annotation, which does not satisfiy the method
// camelCase(s: string)
// Same as the return type
export const getStyle = function(
  element: HTMLElement,
  styleName: string,
): string {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    const computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
};

/* istanbul ignore next */
export function setStyle(
  element: HTMLElement,
  styleName: CSSStyleDeclaration | string,
  value: string,
): void {
  if (!element || !styleName) return;

  if (typeof styleName === 'object') {
    for (const prop in styleName) {
      if (styleName.hasOwnProperty(prop)) {
        setStyle(element, prop, styleName[prop]);
      }
    }
  } else {
    styleName = camelCase(styleName);

    element.style[styleName] = value;
  }
}

export const isScroll = (
  el: HTMLElement,
  isVertical?: Nullable<boolean>,
): RegExpMatchArray => {
  if (isServer) return;

  const determinedDirection = isVertical !== null || isVertical !== undefined;
  const overflow = determinedDirection
    ? isVertical
      ? getStyle(el, 'overflow-y')
      : getStyle(el, 'overflow-x')
    : getStyle(el, 'overflow');

  return overflow.match(/(scroll|auto)/);
};

export const getScrollContainer = (
  el: HTMLElement,
  isVertical?: Nullable<boolean>,
): HTMLElement | (Window & typeof globalThis) => {
  if (isServer) return;
  el.classList;
  let parent: HTMLElement = el;
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window;
    }
    if (isScroll(parent, isVertical)) {
      return parent;
    }
    parent = parent.parentNode as HTMLElement;
  }

  return parent;
};

export const isInContainer = (
  el: HTMLElement,
  container: HTMLElement,
): number | boolean => {
  if (isServer || !el || !container) return false;

  const elRect = el.getBoundingClientRect();
  let containerRect: Partial<DOMRect>;

  if (
    [window, document, document.documentElement, null, undefined].includes(
      container,
    )
  ) {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0,
    };
  } else {
    containerRect = container.getBoundingClientRect();
  }

  return (
    elRect.top < containerRect.bottom &&
    elRect.bottom > containerRect.top &&
    elRect.right > containerRect.left &&
    elRect.left < containerRect.right
  );
};
