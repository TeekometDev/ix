"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54763],{54763:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=t(7896),s=(t(2784),t(30876));const o={},i=void 0,r={unversionedId:"auto-generated/previews/angular/modal-sizes.ts",id:"auto-generated/previews/angular/modal-sizes.ts",title:"modal-sizes.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/modal-sizes.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/modal-sizes.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/modal-sizes.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/modal-sizes.ts.md",tags:[],version:"current",frontMatter:{}},l={},d=[],m={toc:d};function c(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component, TemplateRef, ViewChild } from '@angular/core';\nimport { IxModalSize, ModalService } from '@siemens/ix-angular';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './modal-sizes.html',\n  styles: [\n    `\n      .modal-sizes-example {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n\n      .modal-sizes-example > * {\n        width: auto;\n        margin: 0.25rem;\n      }\n    `,\n  ],\n})\nexport default class ModalSizes {\n  @ViewChild('customModal', { read: TemplateRef })\n  customModalRef!: TemplateRef<any>;\n\n  constructor(private readonly modalService: ModalService) {}\n\n  async open(size: IxModalSize) {\n    await this.modalService.open({\n      content: this.customModalRef,\n      data: size,\n      size: size,\n    });\n  }\n}\n\n")))}c.isMDXComponent=!0}}]);