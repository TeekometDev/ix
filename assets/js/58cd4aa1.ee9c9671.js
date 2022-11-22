"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[68379,36936,55131,66341,11017,9437,24088,14358,21325,6091,17905],{30876:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>w});var a=r(2784);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(r),w=n,m=c["".concat(s,".").concat(w)]||c[w]||u[w]||o;return r?a.createElement(m,l(l({ref:t},d),{},{components:r})):a.createElement(m,l({ref:t},d))}));function w(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},82009:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(2784),n=r(6277);const o="tabItem_OMyP";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},1112:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(7896),n=r(2784),o=r(6277),l=r(89741),i=r(42244),s=r(78963),p=r(24126);const d="tabList_M0Dn",u="tabItem_ysIP";function c(e){var t;const{lazy:r,block:l,defaultValue:c,values:w,groupId:m,className:k}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=w??f.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),g=(0,i.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const x=null===c?c:c??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==x&&!v.some((e=>e.value===x)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${x}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:b}=(0,s.U)(),[h,y]=(0,n.useState)(x),T=[],{blockElementScrollPositionUntilNextRender:S}=(0,p.o5)();if(null!=m){const e=N[m];null!=e&&e!==h&&v.some((t=>t.value===e))&&y(e)}const I=e=>{const t=e.currentTarget,r=T.indexOf(t),a=v[r].value;a!==h&&(S(t),y(a),null!=m&&b(m,String(a)))},D=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;r=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;r=T[t]??T[T.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",d)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},k)},v.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,key:t,ref:e=>T.push(e),onKeyDown:D,onFocus:I,onClick:I},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":h===t})}),r??t)}))),r?(0,n.cloneElement)(f.filter((e=>e.props.value===h))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}function w(e){const t=(0,l.Z)();return n.createElement(c,(0,a.Z)({key:String(t)},e))}},77942:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(37949),n=r(90077),o=r(37614),l=r(2784),i=r(90943);function s(e){const t=(0,o.Z)(),[r]=(0,l.useState)(!1),s=(0,n.Z)("/"),[p,d]=(0,l.useState)(""),[u,c]=(0,l.useState)((0,i.V)(t)),{preferredVersion:w}=(0,a.J)();return(0,l.useEffect)((()=>{const t=null==w?void 0:w.name;d(void 0===t||"current"===t?s+`webcomponent-examples/dist/preview-examples/${e.name}.html`:s+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[s,null==w?void 0:w.name,e.name]),(0,l.useLayoutEffect)((()=>{const e=()=>{let e=(0,i.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),c(e)},r=new MutationObserver((()=>e()));return r.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{r.disconnect()}}),[]),l.createElement(l.Fragment,null,r?l.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==w?void 0:w.name):l.createElement("iframe",{src:`${p}?theme=${e.theme?e.theme:u}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},64176:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(82009),n=r(1112),o=r(2784),l=r(77942);const i={angular:1,react:2,javascript:3,preview:4};function s(e){const t=e.children??[],r=Array.isArray(t)?t:[t];return o.createElement(n.Z,{groupId:e.name,values:[{value:"preview",label:"Preview"},...[{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"javascript",label:"Web Components"}].filter((e=>r.map((e=>e.props.value)).includes(e.value)))],defaultValue:"preview"},[o.createElement(a.Z,{value:"preview",key:"preview"},o.createElement(l.Z,{name:e.name,height:e.height,noMargin:e.noMargin})),...r].sort(((e,t)=>i[e.props.value]-i[t.props.value])))}},83588:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7896),n=(r(2784),r(30876));const o={},l=void 0,i={unversionedId:"auto-generated/ix-workflow-step/events",id:"auto-generated/ix-workflow-step/events",title:"events",description:"No events available for this component.",source:"@site/docs/auto-generated/ix-workflow-step/events.md",sourceDirName:"auto-generated/ix-workflow-step",slug:"/auto-generated/ix-workflow-step/events",permalink:"/docs/auto-generated/ix-workflow-step/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-workflow-step/events.md",tags:[],version:"current",frontMatter:{}},s={},p=[],d={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No events available for this component."))}u.isMDXComponent=!0},67583:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7896),n=(r(2784),r(30876));const o={},l=void 0,i={unversionedId:"auto-generated/ix-workflow-step/props",id:"auto-generated/ix-workflow-step/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-workflow-step/props.md",sourceDirName:"auto-generated/ix-workflow-step",slug:"/auto-generated/ix-workflow-step/props",permalink:"/docs/auto-generated/ix-workflow-step/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-workflow-step/props.md",tags:[],version:"current",frontMatter:{}},s={},p=[],d={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{className:"Api__Table"}," ",(0,n.kt)("div",null,"clickable")," ",(0,n.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,n.kt)("td",{parentName:"tr",align:null},"Activate navigation click"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"clickable")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"false"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{className:"Api__Table"}," ",(0,n.kt)("div",null,"disabled")," ",(0,n.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,n.kt)("td",{parentName:"tr",align:null},"Set disabled"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"disabled")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"false"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{className:"Api__Table"}," ",(0,n.kt)("div",null,"position")," ",(0,n.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,n.kt)("td",{parentName:"tr",align:null},"Activate navigation click"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"position")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"first" \uff5c "last" \uff5c "undefined"')),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"'undefined'"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{className:"Api__Table"}," ",(0,n.kt)("div",null,"selected")," ",(0,n.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,n.kt)("td",{parentName:"tr",align:null},"Set selected"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"selected")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"false"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{className:"Api__Table"}," ",(0,n.kt)("div",null,"status")," ",(0,n.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,n.kt)("td",{parentName:"tr",align:null},"Set status"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"status")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"done" \uff5c "error" \uff5c "open" \uff5c "success" \uff5c "warning"')),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"'open'"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{className:"Api__Table"}," ",(0,n.kt)("div",null,"vertical")," ",(0,n.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,n.kt)("td",{parentName:"tr",align:null},"Select orientation"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"vertical")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"false"))))))}u.isMDXComponent=!0},47902:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7896),n=(r(2784),r(30876));const o={},l=void 0,i={unversionedId:"auto-generated/ix-workflow-steps/events",id:"auto-generated/ix-workflow-steps/events",title:"events",description:"| Name       | Description                   | Attribute        | Detail |",source:"@site/docs/auto-generated/ix-workflow-steps/events.md",sourceDirName:"auto-generated/ix-workflow-steps",slug:"/auto-generated/ix-workflow-steps/events",permalink:"/docs/auto-generated/ix-workflow-steps/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-workflow-steps/events.md",tags:[],version:"current",frontMatter:{}},s={},p=[],d={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,n.kt)("th",{parentName:"tr",align:null},"Detail"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{className:"Api__Table"}," ",(0,n.kt)("div",null,"stepSelected")," ",(0,n.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,n.kt)("td",{parentName:"tr",align:null},"On step selected event"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0},36795:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7896),n=(r(2784),r(30876));const o={},l=void 0,i={unversionedId:"auto-generated/ix-workflow-steps/props",id:"auto-generated/ix-workflow-steps/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-workflow-steps/props.md",sourceDirName:"auto-generated/ix-workflow-steps",slug:"/auto-generated/ix-workflow-steps/props",permalink:"/docs/auto-generated/ix-workflow-steps/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-workflow-steps/props.md",tags:[],version:"current",frontMatter:{}},s={},p=[],d={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{className:"Api__Table"}," ",(0,n.kt)("div",null,"clickable")," ",(0,n.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,n.kt)("td",{parentName:"tr",align:null},"Activate navigation click"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"clickable")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"false"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{className:"Api__Table"}," ",(0,n.kt)("div",null,"linear")," ",(0,n.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,n.kt)("td",{parentName:"tr",align:null},"Select linear mode"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"linear")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"false"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{className:"Api__Table"}," ",(0,n.kt)("div",null,"selectedIndex")," ",(0,n.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,n.kt)("td",{parentName:"tr",align:null},"Activate navigation click"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"selected-index")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"0"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{className:"Api__Table"}," ",(0,n.kt)("div",null,"vertical")," ",(0,n.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,n.kt)("td",{parentName:"tr",align:null},"Select orientation"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"vertical")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"false"))))))}u.isMDXComponent=!0},98117:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7896),n=(r(2784),r(30876));const o={},l=void 0,i={unversionedId:"auto-generated/previews/angular/workflow-vertical",id:"auto-generated/previews/angular/workflow-vertical",title:"workflow-vertical",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/workflow-vertical.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/workflow-vertical",permalink:"/docs/auto-generated/previews/angular/workflow-vertical",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/workflow-vertical.md",tags:[],version:"current",frontMatter:{}},s={},p=[],d={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-workflow\',\n  template: `<ix-workflow-steps vertical>\n    <ix-workflow-step status="done">Step 1</ix-workflow-step>\n    <ix-workflow-step status="success">Step 2</ix-workflow-step>\n    <ix-workflow-step status="open">Step 3</ix-workflow-step>\n    <ix-workflow-step status="warning">Step 4</ix-workflow-step>\n    <ix-workflow-step status="error">Step 5</ix-workflow-step>\n    <ix-workflow-step disabled>Step 6</ix-workflow-step>\n  </ix-workflow-steps>`,\n})\nexport class WorkflowVertical {}\n')))}u.isMDXComponent=!0},51422:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7896),n=(r(2784),r(30876));const o={},l=void 0,i={unversionedId:"auto-generated/previews/angular/workflow",id:"auto-generated/previews/angular/workflow",title:"workflow",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/workflow.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/workflow",permalink:"/docs/auto-generated/previews/angular/workflow",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/workflow.md",tags:[],version:"current",frontMatter:{}},s={},p=[],d={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-workflow\',\n  template: `<ix-workflow-steps>\n    <ix-workflow-step status="done">Step 1</ix-workflow-step>\n    <ix-workflow-step status="success">Step 2</ix-workflow-step>\n    <ix-workflow-step status="open">Step 3</ix-workflow-step>\n    <ix-workflow-step status="warning">Step 4</ix-workflow-step>\n    <ix-workflow-step status="error">Step 5</ix-workflow-step>\n    <ix-workflow-step disabled>Step 6</ix-workflow-step>\n  </ix-workflow-steps>`,\n})\nexport class Workflow {}\n')))}u.isMDXComponent=!0},258:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7896),n=(r(2784),r(30876));const o={},l=void 0,i={unversionedId:"auto-generated/previews/react/workflow-vertical",id:"auto-generated/previews/react/workflow-vertical",title:"workflow-vertical",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/workflow-vertical.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/workflow-vertical",permalink:"/docs/auto-generated/previews/react/workflow-vertical",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/workflow-vertical.md",tags:[],version:"current",frontMatter:{}},s={},p=[],d={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\nimport { IxWorkflowStep, IxWorkflowSteps } from \'@siemens/ix-react\';\nimport React from \'react\';\nexport const WorkflowVertical: React.FC = () => {\n  return (\n    <IxWorkflowSteps vertical>\n      <IxWorkflowStep status="done">Step 1</IxWorkflowStep>\n      <IxWorkflowStep status="success">Step 2</IxWorkflowStep>\n      <IxWorkflowStep status="open">Step 3</IxWorkflowStep>\n      <IxWorkflowStep status="warning">Step 4</IxWorkflowStep>\n      <IxWorkflowStep status="error">Step 5</IxWorkflowStep>\n      <IxWorkflowStep disabled>Step 6</IxWorkflowStep>\n    </IxWorkflowSteps>\n  );\n};\n')))}u.isMDXComponent=!0},13281:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7896),n=(r(2784),r(30876));const o={},l=void 0,i={unversionedId:"auto-generated/previews/react/workflow",id:"auto-generated/previews/react/workflow",title:"workflow",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/workflow.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/workflow",permalink:"/docs/auto-generated/previews/react/workflow",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/workflow.md",tags:[],version:"current",frontMatter:{}},s={},p=[],d={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\nimport { IxWorkflowStep, IxWorkflowSteps } from \'@siemens/ix-react\';\nimport React from \'react\';\nexport const Workflow: React.FC = () => {\n  return (\n    <IxWorkflowSteps>\n      <IxWorkflowStep status="done">Step 1</IxWorkflowStep>\n      <IxWorkflowStep status="success">Step 2</IxWorkflowStep>\n      <IxWorkflowStep status="open">Step 3</IxWorkflowStep>\n      <IxWorkflowStep status="warning">Step 4</IxWorkflowStep>\n      <IxWorkflowStep status="error">Step 5</IxWorkflowStep>\n      <IxWorkflowStep disabled>Step 6</IxWorkflowStep>\n    </IxWorkflowSteps>\n  );\n};\n')))}u.isMDXComponent=!0},17669:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7896),n=(r(2784),r(30876));const o={},l=void 0,i={unversionedId:"auto-generated/previews/web-component/workflow-vertical",id:"auto-generated/previews/web-component/workflow-vertical",title:"workflow-vertical",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/workflow-vertical.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/workflow-vertical",permalink:"/docs/auto-generated/previews/web-component/workflow-vertical",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/workflow-vertical.md",tags:[],version:"current",frontMatter:{}},s={},p=[],d={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<ix-workflow-steps vertical>\n  <ix-workflow-step status="done">Step 1</ix-workflow-step>\n  <ix-workflow-step status="success">Step 2</ix-workflow-step>\n  <ix-workflow-step status="open">Step 3</ix-workflow-step>\n  <ix-workflow-step status="warning">Step 4</ix-workflow-step>\n  <ix-workflow-step status="error">Step 5</ix-workflow-step>\n  <ix-workflow-step disabled>Step 6</ix-workflow-step>\n</ix-workflow-steps>\n')))}u.isMDXComponent=!0},67628:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7896),n=(r(2784),r(30876));const o={},l=void 0,i={unversionedId:"auto-generated/previews/web-component/workflow",id:"auto-generated/previews/web-component/workflow",title:"workflow",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/workflow.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/workflow",permalink:"/docs/auto-generated/previews/web-component/workflow",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/workflow.md",tags:[],version:"current",frontMatter:{}},s={},p=[],d={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<ix-workflow-steps>\n  <ix-workflow-step status="done">Step 1</ix-workflow-step>\n  <ix-workflow-step status="success">Step 2</ix-workflow-step>\n  <ix-workflow-step status="open">Step 3</ix-workflow-step>\n  <ix-workflow-step status="warning">Step 4</ix-workflow-step>\n  <ix-workflow-step status="error">Step 5</ix-workflow-step>\n  <ix-workflow-step disabled>Step 6</ix-workflow-step>\n</ix-workflow-steps>\n')))}u.isMDXComponent=!0},59486:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>N,contentTitle:()=>g,default:()=>y,frontMatter:()=>v,metadata:()=>x,toc:()=>b});var a=r(7896),n=(r(2784),r(30876)),o=r(82009),l=r(64176),i=r(67583),s=r(83588),p=r(36795),d=r(47902),u=r(67628),c=r(13281),w=r(51422),m=r(17669),k=r(258),f=r(98117);const v={},g="Workflow",x={unversionedId:"controls/workflow",id:"controls/workflow",title:"Workflow",description:"Usage",source:"@site/docs/controls/workflow.md",sourceDirName:"controls",slug:"/controls/workflow",permalink:"/docs/controls/workflow",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/workflow.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Form validation",permalink:"/docs/controls/validation"}},N={},b=[{value:"Usage",id:"usage",level:2},{value:"Vertical",id:"vertical",level:3},{value:"Properties ix-workflow-steps",id:"properties-ix-workflow-steps",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3},{value:"Properties ix-workflow-step",id:"properties-ix-workflow-step",level:2},{value:"Props",id:"props-1",level:3},{value:"Events",id:"events-1",level:3}],h={toc:b};function y(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"workflow"},"Workflow"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(l.Z,{name:"workflow",height:"24rem",mdxType:"Preview"},(0,n.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,n.kt)(u.default,{mdxType:"SourceWorkflow"})),(0,n.kt)(o.Z,{value:"react",mdxType:"TabItem"},(0,n.kt)(c.default,{mdxType:"SourceReactWorkflow"})),(0,n.kt)(o.Z,{value:"angular",mdxType:"TabItem"},(0,n.kt)(w.default,{mdxType:"SourceAngularWorkflow"}))),(0,n.kt)("h3",{id:"vertical"},"Vertical"),(0,n.kt)(l.Z,{name:"workflow-vertical",height:"24rem",mdxType:"Preview"},(0,n.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,n.kt)(m.default,{mdxType:"SourceWorkflowVertical"})),(0,n.kt)(o.Z,{value:"react",mdxType:"TabItem"},(0,n.kt)(k.default,{mdxType:"SourceReactWorkflowVertical"})),(0,n.kt)(o.Z,{value:"angular",mdxType:"TabItem"},(0,n.kt)(f.default,{mdxType:"SourceAngularWorkflowVertical"}))),(0,n.kt)("h2",{id:"properties-ix-workflow-steps"},"Properties ix-workflow-steps"),(0,n.kt)("h3",{id:"props"},"Props"),(0,n.kt)(p.default,{mdxType:"WorkflowStepsProps"}),(0,n.kt)("h3",{id:"events"},"Events"),(0,n.kt)(d.default,{mdxType:"WorkflowStepsEvents"}),(0,n.kt)("h2",{id:"properties-ix-workflow-step"},"Properties ix-workflow-step"),(0,n.kt)("h3",{id:"props-1"},"Props"),(0,n.kt)(i.default,{mdxType:"WorkflowStepProps"}),(0,n.kt)("h3",{id:"events-1"},"Events"),(0,n.kt)(s.default,{mdxType:"WorkflowStepEvents"}))}y.isMDXComponent=!0}}]);