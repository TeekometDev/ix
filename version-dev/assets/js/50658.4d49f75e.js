"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50658],{50658:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var a=n(7896),o=(n(2784),n(30876));const i={},s=void 0,c={unversionedId:"auto-generated/previews/web-component/tabs",id:"auto-generated/previews/web-component/tabs",title:"tabs",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/tabs.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/tabs",permalink:"/version-dev/docs/auto-generated/previews/web-component/tabs",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/tabs.md",tags:[],version:"current",frontMatter:{}},d={},r=[],b={toc:r};function l(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},b,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<style>\n  .example {\n    display: block;\n    position: relative;\n    width: 100%;\n  }\n\n  div[data-tab-content] {\n    display: none;\n  }\n\n  div[data-tab-content].show {\n    display: block;\n  }\n</style>\n<div class="example">\n  <ix-tabs>\n    <ix-tab-item data-tab-id="0">Tab 1</ix-tab-item>\n    <ix-tab-item data-tab-id="1">Tab 2</ix-tab-item>\n    <ix-tab-item data-tab-id="2">Tab 3</ix-tab-item>\n  </ix-tabs>\n  <div data-tab-content="0" class="show">Content Tab 1</div>\n  <div data-tab-content="1">Content Tab 2</div>\n  <div data-tab-content="2">Content Tab 3</div>\n</div>\n\n<script>\n  (async function () {\n    await window.customElements.whenDefined(\'ix-tabs\');\n    const tabs = document.querySelectorAll(\'ix-tab-item[data-tab-id]\');\n\n    function registerClickListener(tab) {\n      tab.addEventListener(\'click\', (tabContent) => {\n        const contentList = document.querySelectorAll(\'[data-tab-content]\');\n        contentList.forEach((content) => {\n          if (content.dataset.tabContent === tab.dataset.tabId) {\n            content.classList.add(\'show\');\n          } else {\n            content.classList.remove(\'show\');\n          }\n        });\n      });\n    }\n\n    tabs.forEach(registerClickListener);\n  })();\n<\/script>\n')))}l.isMDXComponent=!0}}]);