"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18856],{30876:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(a),p=r,v=d["".concat(s,".").concat(p)]||d[p]||m[p]||i;return a?n.createElement(v,l(l({ref:t},u),{},{components:a})):n.createElement(v,l({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},63483:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(2784),r=a(731);function i(e){var t,a,i,l,o,s,c,u;return n.createElement("div",{className:"row with--border"},n.createElement("div",{className:"col-sm-6"},n.createElement("div",{className:"ApiTable__Name"},null==e||null==(t=e.attribute)?void 0:t.name,null==e||null==(a=e.attribute)||null==(i=a.tags)?void 0:i.filter((e=>"since"===e.type)).map((t=>{var a;return n.createElement(r.h,{message:t.message,key:`Tag_Since_${null==e||null==(a=e.attribute)?void 0:a.name}`})})),null==e||null==(l=e.attribute)||null==(o=l.tags)?void 0:o.filter((e=>"deprecated"===e.type)).map((t=>{var a;return n.createElement(r.Q,{message:t.message,key:`Tag_Deprecated_${null==e||null==(a=e.attribute)?void 0:a.name}`})})))),n.createElement("div",{className:"col-sm-6"},n.createElement("div",{className:"ApiTable__Content"},n.createElement("span",{className:"Attribute__Description"},null==e||null==(s=e.attribute)?void 0:s.description),n.createElement("div",{className:"container-fluid"},null==e||null==(c=e.attribute)||null==(u=c.definition)?void 0:u.filter((e=>void 0!==e.value)).map((e=>n.createElement("div",{className:"row Attribute",key:e.name},n.createElement("div",{className:"col-auto Attribute__Name"},e.name,":"),n.createElement("code",{className:"col-auto Attribute__Value"},e.value))))))))}const l=function(e){var t;return n.createElement("div",{className:"container-fluid ApiTable"},n.createElement("div",{className:"row with--border"},n.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Name"),n.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Description and specifications")),null==e||null==(t=e.attributes)?void 0:t.map((e=>n.createElement(i,{attribute:e,key:e.name}))))}},731:(e,t,a)=>{a.d(t,{Q:()=>r,h:()=>i});var n=a(2784);function r(e){return n.createElement("div",{className:"ApiTableTag"},n.createElement("div",{className:"Tag Tag--Deprecated"},"Deprecated"),n.createElement("div",{className:"Tag__Message--Deprecated"},e.message))}function i(e){return n.createElement("div",{className:"ApiTableTag"},n.createElement("div",{className:"Tag"},"Since ",e.message))}},51405:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=a(7896),r=(a(2784),a(30876)),i=a(63483);const l={},o=void 0,s={unversionedId:"auto-generated/ix-modal/props",id:"auto-generated/ix-modal/props",title:"props",description:'boolean \uff5c Promise"},{"name"[]},{"name""Centered modal","definition""Attribute","value""Type","value""Default","value"[]},{"name""Dismiss modal on backdrop click","definition""Attribute","value""Type","value""Default","value"[{"type""2.0.0"}]},{"name""Use ESC to dismiss the modal","definition""Attribute","value""Type","value""Default","value"[]},{"name""Modal size","definition""Attribute","value""Type","value""Default","value"[{"type""2.0.0"}]}]} />',source:"@site/docs/auto-generated/ix-modal/props.md",sourceDirName:"auto-generated/ix-modal",slug:"/auto-generated/ix-modal/props",permalink:"/version-dev/docs/auto-generated/ix-modal/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-modal/props.md",tags:[],version:"current",frontMatter:{}},c={},u=[],m={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{attributes:[{name:"animation",description:"Should the modal be animated",definition:[{name:"Attribute",value:"animation"},{name:"Type",value:"boolean"},{name:"Default",value:"true"}],tags:[]},{name:"backdrop",description:"Show a backdrop behind the modal dialog",definition:[{name:"Attribute",value:"backdrop"},{name:"Type",value:"boolean"},{name:"Default",value:"true"}],tags:[]},{name:"beforeDismiss",description:"Is called before the modal is dismissed.\n\n- Return `true` to proceed in dismissing the modal\n- Return `false` to abort in dismissing the modal",definition:[{name:"Attribute"},{name:"Type",value:"(reason?: any) => boolean \uff5c Promise<boolean>"},{name:"Default"}],tags:[]},{name:"centered",description:"Centered modal",definition:[{name:"Attribute",value:"centered"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"closeOnBackdropClick",description:"Dismiss modal on backdrop click",definition:[{name:"Attribute",value:"close-on-backdrop-click"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[{type:"since",message:"2.0.0"}]},{name:"keyboard",description:"Use ESC to dismiss the modal",definition:[{name:"Attribute",value:"keyboard"},{name:"Type",value:"boolean"},{name:"Default",value:"true"}],tags:[]},{name:"size",description:"Modal size",definition:[{name:"Attribute",value:"size"},{name:"Type",value:'"360" \uff5c "480" \uff5c "600" \uff5c "720" \uff5c "840" \uff5c "full-width"'},{name:"Default",value:"'360'"}],tags:[{type:"since",message:"2.0.0"}]}],mdxType:"ApiTable"}))}d.isMDXComponent=!0}}]);