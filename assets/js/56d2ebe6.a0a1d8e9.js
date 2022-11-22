"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[98239],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var i=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),m=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=m(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||r;return n?i.createElement(f,l(l({ref:t},c),{},{components:n})):i.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var m=2;m<r;m++)l[m]=n[m];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},10725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var i=n(7896),a=(n(2784),n(30876));const r={},l="Animation",o={unversionedId:"theming/animation",id:"theming/animation",title:"Animation",description:"Siemens iX uses meaningful animations to make applications appear physically tangible.",source:"@site/docs/theming/animation.md",sourceDirName:"theming",slug:"/theming/animation",permalink:"/docs/theming/animation",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/theming/animation.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Themes",permalink:"/docs/theming/theme"},next:{title:"Colors",permalink:"/docs/theming/colors"}},s={},m=[{value:"Standard timings",id:"standard-timings",level:3},{value:"default-time: 150 ms",id:"default-time-150-ms",level:5},{value:"medium-time: 300 ms",id:"medium-time-300-ms",level:5},{value:"slow-time: 500 ms",id:"slow-time-500-ms",level:5},{value:"xslow-time: 1000 ms",id:"xslow-time-1000-ms",level:5},{value:"Acceleration &amp; Deceleration",id:"acceleration--deceleration",level:3},{value:"Animation timing variables",id:"animation-timing-variables",level:3}],c={toc:m};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"animation"},"Animation"),(0,a.kt)("p",null,"Siemens iX uses meaningful animations to make applications appear physically tangible.\nThis way UIs become predictable and interactions easier to follow along with for users.",(0,a.kt)("br",{parentName:"p"}),"\n","Abrupt state changes are prevented in oder to make UIs feel smooth and anchored in reality."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"standard-timings"},"Standard timings"),(0,a.kt)("p",null,"If an animation is too slow it can feel sluggish and disturb efficient workflows.",(0,a.kt)("br",{parentName:"p"}),"\n","In contrast an animation that runs too fast can be irritating and stressful.",(0,a.kt)("br",{parentName:"p"}),"\n","Therefore it is important to choose the correct timing for the respective situation."),(0,a.kt)("h5",{id:"default-time-150-ms"},"default-time: 150 ms"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"all mouse state changes e.g. normal <-> hover <-> active/pressed"),(0,a.kt)("li",{parentName:"ul"},"showing and hiding of small UI elements")),(0,a.kt)("h5",{id:"medium-time-300-ms"},"medium-time: 300 ms"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"e.g. moving or fading complex components or multiple small elements")),(0,a.kt)("h5",{id:"slow-time-500-ms"},"slow-time: 500 ms"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"e.g. moving or fading larger screen elements")),(0,a.kt)("h5",{id:"xslow-time-1000-ms"},"xslow-time: 1000 ms"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"e.g. moving or fading entire screen parts")),(0,a.kt)("h3",{id:"acceleration--deceleration"},"Acceleration & Deceleration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Objects should move in a learned physical way, objects have mass and don't start or stop immediately, they accelerate and decelerate"),(0,a.kt)("li",{parentName:"ul"},"use ",(0,a.kt)("inlineCode",{parentName:"li"},"ease-in")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"ease-out")," to accelerate and decelerate objects"),(0,a.kt)("li",{parentName:"ul"},"Slide-in movements (from off screen) should use ",(0,a.kt)("inlineCode",{parentName:"li"},"ease-out")," only"),(0,a.kt)("li",{parentName:"ul"},"Slide-out movements (to off screen) should use ",(0,a.kt)("inlineCode",{parentName:"li"},"ease-in")," only"),(0,a.kt)("li",{parentName:"ul"},"transformations or translations within the screen (object is visisble the whole time) should use ",(0,a.kt)("inlineCode",{parentName:"li"},"ease-in-out")),(0,a.kt)("li",{parentName:"ul"},"hiding or appearing objects (opacity) use linear transitions as there is no mass to accelerate/decelerate")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"animation-timing-variables"},"Animation timing variables"),(0,a.kt)("p",null,"All animation timing values are also available through SASS variables:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$x-slow-time: 1s;\n$slow-time: 500ms;\n$medium-time: 300ms;\n$default-time: 150ms;\n$short-time: 0ms;\n")),(0,a.kt)("p",null,"Usage example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"@import '@siemens/ix/scss/common-variables';\n\ntransition: $default-time;\n")))}u.isMDXComponent=!0}}]);