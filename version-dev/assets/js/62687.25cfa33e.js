"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[62687],{62687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>m});var s=n(7896),o=(n(2784),n(30876));const a={},c=void 0,r={unversionedId:"auto-generated/previews/web-component/message",id:"auto-generated/previews/web-component/message",title:"message",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/message.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/message",permalink:"/version-dev/docs/auto-generated/previews/web-component/message",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/message.md",tags:[],version:"current",frontMatter:{}},i={},m=[],p={toc:m};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<ix-button>Show 'success' message</ix-button>\n<script type=\"module\">\n  import { showMessage } from '@siemens/ix';\n\n  const btn = document.querySelector('ix-button');\n  btn.addEventListener('click', async () => {\n    (\n      await showMessage.success(\n        'Example title',\n        'message',\n        'Save',\n        'Cancel',\n        'payload:save',\n        'payload:cancel'\n      )\n    ).once(console.log);\n  });\n<\/script>\n")))}d.isMDXComponent=!0}}]);