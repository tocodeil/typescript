import './style.css'

const h1 = document.querySelector('h1')!;

function setStyleAttribute<Attr extends keyof CSSStyleDeclaration>(
  el: HTMLElement,
  styleAttribute: Attr,
  value: CSSStyleDeclaration[Attr]) {

  el.style[styleAttribute] = value;
}

function setStyleAttributes(el: HTMLElement, style: Partial<CSSStyleDeclaration>) {
  Object.assign(el.style, style);
}

function css<Attr extends keyof CSSStyleDeclaration>(
  el: HTMLElement,
  styleAttribute: Attr,
  value: CSSStyleDeclaration[Attr]): void;
function css(el: HTMLElement, style: Partial<CSSStyleDeclaration>): void;
function css(el: HTMLElement, attrOrAttributes: any, value?: any) {
  if (value) {
    return setStyleAttribute(el, attrOrAttributes, value);
  } else {
    return setStyleAttributes(el, attrOrAttributes);
  }
}


css(h1, 'fontSize', '96px');
css(h1, {
  background: 'red',
  padding: '10px',
});

