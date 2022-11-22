"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71871,67003,81501,99244,504,2491],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,v=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(v,o(o({ref:t},u),{},{components:n})):r.createElement(v,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},82009:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(2784),a=n(6277);const i="tabItem_OMyP";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},1112:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7896),a=n(2784),i=n(6277),o=n(89741),l=n(42244),s=n(78963),c=n(24126);const u="tabList_M0Dn",d="tabItem_ysIP";function p(e){var t;const{lazy:n,block:o,defaultValue:p,values:m,groupId:v,className:g}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),x=(0,l.l)(h,((e,t)=>e.value===t.value));if(x.length>0)throw new Error(`Docusaurus error: Duplicate values "${x.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===p?p:p??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==b&&!h.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[k,T]=(0,a.useState)(b),N=[],{blockElementScrollPositionUntilNextRender:I}=(0,c.o5)();if(null!=v){const e=y[v];null!=e&&e!==k&&h.some((t=>t.value===e))&&T(e)}const D=e=>{const t=e.currentTarget,n=N.indexOf(t),r=h[n].value;r!==k&&(I(t),T(r),null!=v&&w(v,String(r)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},g)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>N.push(e),onKeyDown:E,onFocus:D,onClick:D},o,{className:(0,i.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":k===t})}),n??t)}))),n?(0,a.cloneElement)(f.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function m(e){const t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},77942:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(37949),a=n(90077),i=n(37614),o=n(2784),l=n(90943);function s(e){const t=(0,i.Z)(),[n]=(0,o.useState)(!1),s=(0,a.Z)("/"),[c,u]=(0,o.useState)(""),[d,p]=(0,o.useState)((0,l.V)(t)),{preferredVersion:m}=(0,r.J)();return(0,o.useEffect)((()=>{const t=null==m?void 0:m.name;u(void 0===t||"current"===t?s+`webcomponent-examples/dist/preview-examples/${e.name}.html`:s+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[s,null==m?void 0:m.name,e.name]),(0,o.useLayoutEffect)((()=>{const e=()=>{let e=(0,l.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),p(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),o.createElement(o.Fragment,null,n?o.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==m?void 0:m.name):o.createElement("iframe",{src:`${c}?theme=${e.theme?e.theme:d}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},64176:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(82009),a=n(1112),i=n(2784),o=n(77942);const l={angular:1,react:2,javascript:3,preview:4};function s(e){const t=e.children??[],n=Array.isArray(t)?t:[t];return i.createElement(a.Z,{groupId:e.name,values:[{value:"preview",label:"Preview"},...[{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"javascript",label:"Web Components"}].filter((e=>n.map((e=>e.props.value)).includes(e.value)))],defaultValue:"preview"},[i.createElement(r.Z,{value:"preview",key:"preview"},i.createElement(o.Z,{name:e.name,height:e.height,noMargin:e.noMargin})),...n].sort(((e,t)=>l[e.props.value]-l[t.props.value])))}},29603:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/ix-tile/events",id:"auto-generated/ix-tile/events",title:"events",description:"No events available for this component.",source:"@site/docs/auto-generated/ix-tile/events.md",sourceDirName:"auto-generated/ix-tile",slug:"/auto-generated/ix-tile/events",permalink:"/docs/auto-generated/ix-tile/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-tile/events.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No events available for this component."))}d.isMDXComponent=!0},95960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/ix-tile/props",id:"auto-generated/ix-tile/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-tile/props.md",sourceDirName:"auto-generated/ix-tile",slug:"/auto-generated/ix-tile/props",permalink:"/docs/auto-generated/ix-tile/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-tile/props.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{className:"Api__Table"}," ",(0,a.kt)("div",null,"size")," ",(0,a.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,a.kt)("td",{parentName:"tr",align:null},"Size of the tile - one of 'small', 'medium' or 'large'"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"size")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"big" \uff5c "medium" \uff5c "small"')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"'medium'"))))))}d.isMDXComponent=!0},41167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/previews/angular/tile",id:"auto-generated/previews/angular/tile",title:"tile",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/tile.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/tile",permalink:"/docs/auto-generated/previews/angular/tile",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/tile.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-tile\',\n  template: `\n    <ix-tile size="small">92.8 \xb0C</ix-tile>\n\n    <ix-tile size="medium" class="mr-1">\n      <div slot="header">Tile header</div>\n      <div class="text-l">92.8 \xb0C</div>\n    </ix-tile>\n\n    <ix-tile size="big">\n      <div\n        class="d-flex flex-grow-1 align-items-center justify-content-between"\n        slot="header"\n      >\n        Tile header\n        <ix-icon-button ghost icon="context-menu"></ix-icon-button>\n      </div>\n      <div slot="subheader">Temperature</div>\n      <div\n        style="\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        align-items: flex-end;\n        justify-content: space-between;\n      "\n      >\n        <span>92.8 \xb0C</span>\n      </div>\n      <div\n        class="d-flex h-100 align-items-center justify-content-end"\n        slot="footer"\n      >\n        <ix-button ghost slot="footer">\n          <ix-icon name="chevron-right-small"></ix-icon>Details\n        </ix-button>\n      </div>\n    </ix-tile>\n  `,\n})\nexport class Tile {}\n')))}d.isMDXComponent=!0},88185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/previews/react/tile",id:"auto-generated/previews/react/tile",title:"tile",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/tile.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/tile",permalink:"/docs/auto-generated/previews/react/tile",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/tile.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxButton, IxIcon, IxIconButton, IxTile } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport const Tile: React.FC = () => {\n  return (\n    <div className="example">\n      <IxTile size="small">92.8 \xb0C</IxTile>\n\n      <IxTile size="medium" className="mr-1">\n        <div slot="header">Tile header</div>\n        <div className="text-l">92.8 \xb0C</div>\n      </IxTile>\n\n      <IxTile size="big">\n        <div\n          className="d-flex flex-grow-1 align-items-center justify-content-between"\n          slot="header"\n        >\n          Tile header\n          <IxIconButton ghost icon="context-menu"></IxIconButton>\n        </div>\n        <div slot="subheader">Temperature</div>\n        <div\n          style={{\n            display: \'flex\',\n            flexDirection: \'column\',\n            height: \'100%\',\n            alignItems: \'flex-end\',\n            justifyContent: \'space-between\',\n          }}\n        >\n          <span>92.8 \xb0C</span>\n        </div>\n        <div\n          className="d-flex h-100 align-items-center justify-content-end"\n          slot="footer"\n        >\n          <IxButton ghost slot="footer">\n            <IxIcon name="chevron-right-small"></IxIcon>Details\n          </IxButton>\n        </div>\n      </IxTile>\n    </div>\n  );\n};\n')))}d.isMDXComponent=!0},90191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/previews/web-component/tile",id:"auto-generated/previews/web-component/tile",title:"tile",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/tile.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/tile",permalink:"/docs/auto-generated/previews/web-component/tile",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/tile.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ix-tile size="small">92.8 \xb0C</ix-tile>\n\n<ix-tile size="medium" class="mr-1">\n  <div slot="header">Tile header</div>\n  <div class="text-l">92.8 \xb0C</div>\n</ix-tile>\n\n<ix-tile size="big">\n  <div\n    class="d-flex flex-grow-1 align-items-center justify-content-between"\n    slot="header"\n  >\n    Tile header\n    <ix-icon-button ghost icon="context-menu"></ix-icon-button>\n  </div>\n  <div slot="subheader">Temperature</div>\n  <div\n    style="\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n      align-items: flex-end;\n      justify-content: space-between;\n    "\n  >\n    <span>92.8 \xb0C</span>\n  </div>\n  <div\n    class="d-flex h-100 align-items-center justify-content-end"\n    slot="footer"\n  >\n    <ix-button ghost slot="footer">\n      <ix-icon name="chevron-right-small"></ix-icon>Details\n    </ix-button>\n  </div>\n</ix-tile>\n')))}d.isMDXComponent=!0},61065:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>x,frontMatter:()=>p,metadata:()=>v,toc:()=>f});var r=n(7896),a=(n(2784),n(30876)),i=n(82009),o=n(64176),l=n(95960),s=n(29603),c=n(90191),u=n(88185),d=n(41167);const p={},m="Tile",v={unversionedId:"controls/tile",id:"controls/tile",title:"Tile",description:"Usage",source:"@site/docs/controls/tile.md",sourceDirName:"controls",slug:"/controls/tile",permalink:"/docs/controls/tile",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/tile.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Textarea",permalink:"/docs/controls/textarea"},next:{title:"Timepicker",permalink:"/docs/controls/time-picker"}},g={},f=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3}],h={toc:f};function x(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tile"},"Tile"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(o.Z,{name:"tile",height:"22rem",mdxType:"Preview"},(0,a.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,a.kt)(c.default,{mdxType:"SourceTile"})),(0,a.kt)(i.Z,{value:"react",mdxType:"TabItem"},(0,a.kt)(u.default,{mdxType:"SourceReactTile"})),(0,a.kt)(i.Z,{value:"angular",mdxType:"TabItem"},(0,a.kt)(d.default,{mdxType:"SourceAngularTile"}))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"props"},"Props"),(0,a.kt)(l.default,{mdxType:"Props"}),(0,a.kt)("h3",{id:"events"},"Events"),(0,a.kt)(s.default,{mdxType:"Events"}))}x.isMDXComponent=!0}}]);