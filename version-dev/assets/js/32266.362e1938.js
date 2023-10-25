"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[32266],{93086:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var o=t(7896),a=(t(2784),t(30876));const s={},r=void 0,d={unversionedId:"auto-generated/previews/react/modal",id:"auto-generated/previews/react/modal",title:"modal",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/modal.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/modal",permalink:"/version-dev/docs/auto-generated/previews/react/modal",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/modal.md",tags:[],version:"current",frontMatter:{}},i={},l=[],c={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport {\n  IxButton,\n  IxModalContent,\n  IxModalFooter,\n  IxModalHeader,\n  Modal,\n  ModalRef,\n  showModal,\n} from '@siemens/ix-react';\nimport React, { useRef } from 'react';\n\nfunction CustomModal() {\n  const modalRef = useRef<ModalRef>(null);\n\n  const close = () => {\n    modalRef.current?.close('close payload!');\n  };\n  const dismiss = () => {\n    modalRef.current?.dismiss('dismiss payload');\n  };\n\n  return (\n    <Modal ref={modalRef}>\n      <IxModalHeader onCloseClick={() => dismiss()}>\n        Message headline\n      </IxModalHeader>\n      <IxModalContent>Message text lorem ipsum</IxModalContent>\n      <IxModalFooter>\n        <IxButton outline onClick={() => dismiss()}>\n          Cancel\n        </IxButton>\n        <IxButton onClick={() => close()}>OK</IxButton>\n      </IxModalFooter>\n    </Modal>\n  );\n}\n\nexport default () => {\n  async function show() {\n    await showModal({\n      content: <CustomModal />,\n    });\n  }\n\n  return (\n    <>\n      <IxButton onClick={show}>Show modal</IxButton>\n    </>\n  );\n};\n\n")))}u.isMDXComponent=!0}}]);