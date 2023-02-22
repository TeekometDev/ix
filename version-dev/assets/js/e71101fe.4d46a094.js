"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[39849],{50834:(o,e,r)=>{r.r(e),r.d(e,{assets:()=>b,contentTitle:()=>h,default:()=>f,frontMatter:()=>p,metadata:()=>g,toc:()=>y});var t=r(7896),c=r(2784),l=r(30876),n=r(6277),a=r(88932);const s="table_hjB9",i="img_GpXV",m="colorPreviewRow_Lsmf",d="colorPreview_BbHd",v=["color-ghost","color-ghost--hover","color-ghost--active","color-primary","color-primary--contrast","color-primary--hover","color-primary--active","color-dynamic","color-secondary","color-secondary--hover","color-secondary--active","color-component-1","color-component-1--hover","color-component-1--active","color-component-2","color-component-3","color-component-4","color-component-5","color-component-6","color-component-7--hover","color-component-7","color-component-7--active","color-component-error","color-component-8","color-ghost--selected","color-ghost--selected-hover","color-ghost--selected-active","color-ghost-primary--active","color-ghost-primary--hover","color-ghost-alt","color-ghost-alt--hover","color-ghost-alt--active","color-ghost-alt--selected","color-ghost-alt--selected-hover","color-ghost-alt--selected-active","color-primary--disabled","color-dynamic--hover","color-dynamic--active","color-dynamic-alt","color-dynamic-alt--hover","color-dynamic-alt--active","color-component-8--hover","color-component-9","color-component-9--hover","color-component-9--active","color-component-9--disabled","color-component-10","color-component-10--hover","color-component-10--active","color-component-10--disabled","color-1--hover","color-1--active","color-component-11","color-0","color-1","color-2","color-3","color-4","color-5","color-6","color-7","color-8","color-std-bdr","color-soft-bdr","color-weak-bdr","color-x-weak-bdr","color-focus-bdr","color-contrast-bdr","color-alarm","color-alarm--hover","color-alarm--active","color-alarm--contrast","color-alarm-40","color-alarm-10","color-warning","color-warning--hover","color-warning--active","color-warning--contrast","color-warning-40","color-warning-10","color-critical","color-critical--hover","color-critical--active","color-critical--contrast","color-critical-40","color-success","color-success--hover","color-success--active","color-success--contrast","color-success-40","color-info","color-info--hover","color-info--active","color-info--contrast","color-info-40","color-neutral","color-neutral--hover","color-neutral--active","color-neutral--contrast","color-neutral-40","color-contrast-text","color-std-text","color-soft-text","color-weak-text","color-inv-contrast-text","color-inv-std-text","color-inv-soft-text","color-inv-weak-text","color-alarm-text","color-shadow-1","color-shadow-2","color-shadow-3","color-lightbox","color-backdrop","color-backdrop-3"];function u(){const[o,e]=(0,c.useState)([]),r=(0,c.useRef)({});return(0,c.useLayoutEffect)((()=>{const o=new MutationObserver((()=>{r()})),r=()=>{setTimeout((()=>{const o=getComputedStyle(document.body),r=v.map((e=>[`--theme-${e}`,o.getPropertyValue(`--theme-${e}`)]));e(r)}))};return r(),o.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>{o.disconnect()}}),[]),c.createElement(c.Fragment,null,c.createElement(a.Ix,null),c.createElement("table",{className:(0,n.Z)(s)},c.createElement("thead",null,c.createElement("tr",null,c.createElement("th",null,"Custom Property Name"),c.createElement("th",null,"Name"),c.createElement("th",null,"Preview"))),c.createElement("tbody",null,o.map((o=>{let[e,t]=o;return c.createElement("tr",{key:e},c.createElement("td",null,c.createElement("input",{readOnly:!0,className:"form-control",defaultValue:e,ref:r[e],onFocus:o=>{}})),c.createElement("td",null,e.substring("--theme-color-".length)),c.createElement("td",{className:(0,n.Z)(m)},c.createElement("img",{className:(0,n.Z)(i),src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0AQMAAADxGE3JAAAABlBMVEXKysz9/f1VKNQLAAAAuElEQVR42u3XsQ2DAAADQSOKlBmBURgNRssoGYGSAmFWoETiautq65NkaX/J1G7Jpz2Soe3dged5nn+lb7smc/tPvu2ejO2Z3BvC8zzPv9T7X57neV5/8DzP8/qD53me1x88z/O8/vC/PM/zvP7geZ7n9QfP8zyvP3ie53n9wfM8z+sP/8vzPM/rD57neV5/8DzP8/qD53me1x88z/O8/vC/PM/zvP7geZ7n9QfP8zyvP3ie5/nH+wusZT1o33zVDwAAAABJRU5ErkJggg=="}),c.createElement("div",{className:(0,n.Z)(d),style:{backgroundColor:t}})))})))))}const p={},h="Colors",g={unversionedId:"theming/colors",id:"theming/colors",title:"Colors",description:"All colors are provided as custom properties.",source:"@site/docs/theming/colors.md",sourceDirName:"theming",slug:"/theming/colors",permalink:"/version-dev/docs/theming/colors",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/theming/colors.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Animations",permalink:"/version-dev/docs/theming/animation"},next:{title:"Fonts",permalink:"/version-dev/docs/theming/fonts"}},b={},y=[{value:"Base colors",id:"base-colors",level:2}],A={toc:y};function f(o){let{components:e,...r}=o;return(0,l.kt)("wrapper",(0,t.Z)({},A,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"colors"},"Colors"),(0,l.kt)("p",null,"All colors are provided as custom properties.\nTo access them the ",(0,l.kt)("inlineCode",{parentName:"p"},"var()")," CSS function can be called with the color's name:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".some-example {\n  background-color: var(--theme-color-primary);\n}\n")),(0,l.kt)("h2",{id:"base-colors"},"Base colors"),(0,l.kt)(u,{mdxType:"Color"}))}f.isMDXComponent=!0}}]);