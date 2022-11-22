"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18611,82106,70407,83179,37851,82859],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(2784);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=l,v=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(v,i(i({ref:t},d),{},{components:n})):a.createElement(v,i({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},82009:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(2784),l=n(6277);const r="tabItem_OMyP";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:n},t)}},1112:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7896),l=n(2784),r=n(6277),i=n(89741),o=n(42244),s=n(78963),p=n(24126);const d="tabList_M0Dn",u="tabItem_ysIP";function c(e){var t;const{lazy:n,block:i,defaultValue:c,values:m,groupId:v,className:g}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,o.l)(f,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const x=null===c?c:c??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==x&&!f.some((e=>e.value===x)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${x}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:h}=(0,s.U)(),[w,N]=(0,l.useState)(x),T=[],{blockElementScrollPositionUntilNextRender:P}=(0,p.o5)();if(null!=v){const e=y[v];null!=e&&e!==w&&f.some((t=>t.value===e))&&N(e)}const L=e=>{const t=e.currentTarget,n=T.indexOf(t),a=f[n].value;a!==w&&(P(t),N(a),null!=v&&h(v,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},g)},f.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:I,onFocus:L,onClick:L},i,{className:(0,r.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,l.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,i.Z)();return l.createElement(c,(0,a.Z)({key:String(t)},e))}},77942:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(37949),l=n(90077),r=n(37614),i=n(2784),o=n(90943);function s(e){const t=(0,r.Z)(),[n]=(0,i.useState)(!1),s=(0,l.Z)("/"),[p,d]=(0,i.useState)(""),[u,c]=(0,i.useState)((0,o.V)(t)),{preferredVersion:m}=(0,a.J)();return(0,i.useEffect)((()=>{const t=null==m?void 0:m.name;d(void 0===t||"current"===t?s+`webcomponent-examples/dist/preview-examples/${e.name}.html`:s+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[s,null==m?void 0:m.name,e.name]),(0,i.useLayoutEffect)((()=>{const e=()=>{let e=(0,o.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),c(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),i.createElement(i.Fragment,null,n?i.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==m?void 0:m.name):i.createElement("iframe",{src:`${p}?theme=${e.theme?e.theme:u}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},64176:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(82009),l=n(1112),r=n(2784),i=n(77942);const o={angular:1,react:2,javascript:3,preview:4};function s(e){const t=e.children??[],n=Array.isArray(t)?t:[t];return r.createElement(l.Z,{groupId:e.name,values:[{value:"preview",label:"Preview"},...[{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"javascript",label:"Web Components"}].filter((e=>n.map((e=>e.props.value)).includes(e.value)))],defaultValue:"preview"},[r.createElement(a.Z,{value:"preview",key:"preview"},r.createElement(i.Z,{name:e.name,height:e.height,noMargin:e.noMargin})),...n].sort(((e,t)=>o[e.props.value]-o[t.props.value])))}},76924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7896),l=(n(2784),n(30876));const r={},i=void 0,o={unversionedId:"auto-generated/ix-pill/events",id:"auto-generated/ix-pill/events",title:"events",description:"No events available for this component.",source:"@site/docs/auto-generated/ix-pill/events.md",sourceDirName:"auto-generated/ix-pill",slug:"/auto-generated/ix-pill/events",permalink:"/docs/auto-generated/ix-pill/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-pill/events.md",tags:[],version:"current",frontMatter:{}},s={},p=[],d={toc:p};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No events available for this component."))}u.isMDXComponent=!0},1983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7896),l=(n(2784),n(30876));const r={},i=void 0,o={unversionedId:"auto-generated/ix-pill/props",id:"auto-generated/ix-pill/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-pill/props.md",sourceDirName:"auto-generated/ix-pill",slug:"/auto-generated/ix-pill/props",permalink:"/docs/auto-generated/ix-pill/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-pill/props.md",tags:[],version:"current",frontMatter:{}},s={},p=[],d={toc:p};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",{className:"Api__Table"}," ",(0,l.kt)("div",null,"alignLeft")," ",(0,l.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,l.kt)("td",{parentName:"tr",align:null},"Align pill content left"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"align-left")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",{className:"Api__Table"}," ",(0,l.kt)("div",null,"background")," ",(0,l.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,l.kt)("td",{parentName:"tr",align:null},"Custom color for pill. Only working for ",(0,l.kt)("inlineCode",{parentName:"td"},"variant='custom'")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"background")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",{className:"Api__Table"}," ",(0,l.kt)("div",null,"color")," ",(0,l.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,l.kt)("td",{parentName:"tr",align:null},"Custom font color for pill. Only working for ",(0,l.kt)("inlineCode",{parentName:"td"},"variant='custom'")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"color")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",{className:"Api__Table"}," ",(0,l.kt)("div",null,"icon")," ",(0,l.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,l.kt)("td",{parentName:"tr",align:null},"Show icon"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"icon")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",{className:"Api__Table"}," ",(0,l.kt)("div",null,"outline")," ",(0,l.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,l.kt)("td",{parentName:"tr",align:null},"Show pill as outline"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"outline")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",{className:"Api__Table"}," ",(0,l.kt)("div",null,"variant")," ",(0,l.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,l.kt)("td",{parentName:"tr",align:null},"Pill variant"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"variant")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"alarm" \uff5c "critical" \uff5c "custom" \uff5c "info" \uff5c "neutral" \uff5c "primary" \uff5c "success" \uff5c "warning"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'primary'"))))))}u.isMDXComponent=!0},57934:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7896),l=(n(2784),n(30876));const r={},i=void 0,o={unversionedId:"auto-generated/previews/angular/pill",id:"auto-generated/previews/angular/pill",title:"pill",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/pill.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/pill",permalink:"/docs/auto-generated/previews/angular/pill",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/pill.md",tags:[],version:"current",frontMatter:{}},s={},p=[],d={toc:p};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-pill\',\n  template: `\n    <ix-pill variant="custom" color="white" background="purple">\n      Label\n    </ix-pill>\n\n    <ix-pill>Label</ix-pill>\n    <ix-pill outline>Label</ix-pill>\n    <ix-pill style="width: 8rem">Label</ix-pill>\n\n    <ix-pill icon="star">Label</ix-pill>\n    <ix-pill icon="star" style="width: 8rem"> Label </ix-pill>\n    <ix-pill outline alignLeft icon="star" style="width: 8rem"> Label </ix-pill>\n\n    <ix-pill variant="alarm">Label</ix-pill>\n    <ix-pill variant="alarm" outline> Label </ix-pill>\n    <ix-pill variant="alarm" style="width: 8rem"> Label </ix-pill>\n\n    <ix-pill variant="alarm" icon="star"> Label </ix-pill>\n    <ix-pill variant="alarm" icon="star" style="width: 8rem"> Label </ix-pill>\n    <ix-pill variant="alarm" outline alignLeft icon="star" style="width: 8rem">\n      Label\n    </ix-pill>\n  `,\n})\nexport class Pill {}\n')))}u.isMDXComponent=!0},53447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7896),l=(n(2784),n(30876));const r={},i=void 0,o={unversionedId:"auto-generated/previews/react/pill",id:"auto-generated/previews/react/pill",title:"pill",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/pill.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/pill",permalink:"/docs/auto-generated/previews/react/pill",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/pill.md",tags:[],version:"current",frontMatter:{}},s={},p=[],d={toc:p};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxPill } from \'@siemens/ix-react\';\nimport React, { CSSProperties } from \'react\';\n\nexport const Pill: React.FC = () => {\n  const styled: CSSProperties = {\n    width: \'8rem\',\n  };\n\n  return (\n    <>\n      <IxPill variant="custom" color="white" background="purple">\n        Label\n      </IxPill>\n\n      <IxPill>Label</IxPill>\n      <IxPill outline>Label</IxPill>\n      <IxPill style={styled}>Label</IxPill>\n\n      <IxPill icon="star">Label</IxPill>\n      <IxPill icon="star" style={styled}>\n        Label\n      </IxPill>\n      <IxPill outline alignLeft icon="star" style={styled}>\n        Label\n      </IxPill>\n\n      <IxPill variant="alarm">Label</IxPill>\n      <IxPill variant="alarm" outline>\n        Label\n      </IxPill>\n      <IxPill variant="alarm" style={styled}>\n        Label\n      </IxPill>\n\n      <IxPill variant="alarm" icon="star">\n        Label\n      </IxPill>\n      <IxPill variant="alarm" icon="star" style={styled}>\n        Label\n      </IxPill>\n      <IxPill variant="alarm" outline alignLeft icon="star" style={styled}>\n        Label\n      </IxPill>\n    </>\n  );\n};\n')))}u.isMDXComponent=!0},92665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7896),l=(n(2784),n(30876));const r={},i=void 0,o={unversionedId:"auto-generated/previews/web-component/pill",id:"auto-generated/previews/web-component/pill",title:"pill",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/pill.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/pill",permalink:"/docs/auto-generated/previews/web-component/pill",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/pill.md",tags:[],version:"current",frontMatter:{}},s={},p=[],d={toc:p};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<ix-pill variant="custom" color="white" background="purple">\n  Label\n</ix-pill>\n\n<ix-pill>Label</ix-pill>\n<ix-pill outline>Label</ix-pill>\n<ix-pill style="width: 8rem">Label</ix-pill>\n\n<ix-pill icon="star">Label</ix-pill>\n<ix-pill icon="star" style="width: 8rem"> Label </ix-pill>\n<ix-pill outline alignLeft icon="star" style="width: 8rem"> Label </ix-pill>\n\n<ix-pill variant="alarm">Label</ix-pill>\n<ix-pill variant="alarm" outline> Label </ix-pill>\n<ix-pill variant="alarm" style="width: 8rem"> Label </ix-pill>\n\n<ix-pill variant="alarm" icon="star"> Label </ix-pill>\n<ix-pill variant="alarm" icon="star" style="width: 8rem"> Label </ix-pill>\n<ix-pill variant="alarm" outline alignLeft icon="star" style="width: 8rem">\n  Label\n</ix-pill>\n')))}u.isMDXComponent=!0},27859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>k,frontMatter:()=>c,metadata:()=>v,toc:()=>b});var a=n(7896),l=(n(2784),n(30876)),r=n(82009),i=n(64176),o=n(1983),s=n(76924),p=n(92665),d=n(53447),u=n(57934);const c={},m="Pill",v={unversionedId:"controls/pill",id:"controls/pill",title:"Pill",description:"Usage",source:"@site/docs/controls/pill.md",sourceDirName:"controls",slug:"/controls/pill",permalink:"/docs/controls/pill",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/pill.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Modal",permalink:"/docs/controls/modal"},next:{title:"Radiobutton",permalink:"/docs/controls/radiobutton"}},g={},b=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3}],f={toc:b};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"pill"},"Pill"),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(i.Z,{name:"pill",height:"24rem",mdxType:"Preview"},(0,l.kt)(r.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)(p.default,{mdxType:"SourcePill"})),(0,l.kt)(r.Z,{value:"react",mdxType:"TabItem"},(0,l.kt)(d.default,{mdxType:"SourceReactPill"})),(0,l.kt)(r.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)(u.default,{mdxType:"SourceAngularPill"}))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"props"},"Props"),(0,l.kt)(o.default,{mdxType:"Props"}),(0,l.kt)("h3",{id:"events"},"Events"),(0,l.kt)(s.default,{mdxType:"Events"}))}k.isMDXComponent=!0}}]);