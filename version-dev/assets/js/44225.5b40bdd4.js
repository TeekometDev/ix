"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[44225],{44225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=n(7896),s=(n(2784),n(30876));const a={},i=void 0,r={unversionedId:"auto-generated/previews/angular/toast-custom.ts",id:"auto-generated/previews/angular/toast-custom.ts",title:"toast-custom.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/toast-custom.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/toast-custom.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/toast-custom.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/toast-custom.ts.md",tags:[],version:"current",frontMatter:{}},u={},c=[],m={toc:c};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component, TemplateRef, ViewChild } from '@angular/core';\nimport { ToastService } from '@siemens/ix-angular';\n\n@Component({\n  selector: 'app-example',\n  template: `\n    <div>\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit\n      amet.\n    </div>\n    <ix-button (click)=\"showToastMessage()\">Show Toast</ix-button>\n    <ng-template #customToast let-toast>\n      <div>\n        <div>Custom toast message</div>\n        <ix-button (click)=\"toast.close('Action')\">Action</ix-button>\n      </div>\n    </ng-template>\n  `,\n})\nexport default class ToastCustom {\n  @ViewChild('customToast', { read: TemplateRef })\n  customToastRef!: TemplateRef<any>;\n\n  constructor(private readonly toastService: ToastService) {}\n\n  async showToastMessage() {\n    this.toastService.show({\n      message: this.customToastRef,\n    });\n  }\n}\n\n")))}d.isMDXComponent=!0}}]);