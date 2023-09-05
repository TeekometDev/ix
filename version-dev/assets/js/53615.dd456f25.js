"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53615],{53615:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var o=a(7896),n=(a(2784),a(30876));const s={},r=void 0,i={unversionedId:"auto-generated/previews/angular/toast.ts",id:"auto-generated/previews/angular/toast.ts",title:"toast.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/toast.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/toast.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/toast.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/toast.ts.md",tags:[],version:"current",frontMatter:{}},u={},d=[],c={toc:d};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { Component } from '@angular/core';\nimport { ToastService } from '@siemens/ix-angular';\n\n@Component({\n  selector: 'app-example',\n  template: `\n    <div>\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit\n      amet.\n    </div>\n    <ix-button (click)=\"showToastMessage()\">Show Toast</ix-button>\n  `,\n})\nexport default class Toast {\n  constructor(private readonly toastService: ToastService) {}\n\n  async showToastMessage() {\n    this.toastService.show({\n      message: 'Hello World!',\n    });\n  }\n}\n")))}m.isMDXComponent=!0}}]);