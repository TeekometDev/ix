"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[44108],{44108:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(7896),r=(t(2784),t(30876));const o={},s=void 0,i={unversionedId:"auto-generated/previews/react/tree-custom",id:"auto-generated/previews/react/tree-custom",title:"tree-custom",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/tree-custom.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/tree-custom",permalink:"/version-dev/docs/auto-generated/previews/react/tree-custom",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/tree-custom.md",tags:[],version:"current",frontMatter:{}},d={},c=[],l={toc:c};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { TreeContext, TreeModel } from '@siemens/ix';\nimport { IxButton, IxIcon, IxTree } from '@siemens/ix-react';\nimport React, { useState } from 'react';\n\ntype TreeData = {\n  name: string;\n  icon: string;\n};\n\nexport default () => {\n  const [context, setContext] = useState<TreeContext>();\n  const [model] = useState<TreeModel<TreeData>>({\n    root: {\n      id: 'root',\n      data: {\n        icon: '',\n        name: '',\n      },\n      hasChildren: true,\n      children: ['sample'],\n    },\n    sample: {\n      id: 'sample',\n      data: {\n        name: 'Sample',\n        icon: 'star',\n      },\n      hasChildren: true,\n      children: ['sample-child-1', 'sample-child-2'],\n    },\n    'sample-child-1': {\n      id: 'sample-child-1',\n      data: {\n        name: 'Sample Child 1',\n        icon: 'cut',\n      },\n      hasChildren: false,\n      children: [],\n    },\n    'sample-child-2': {\n      id: 'sample-child-2',\n      data: {\n        name: 'Sample Child 2',\n        icon: 'print',\n      },\n      hasChildren: false,\n      children: [],\n    },\n  });\n\n  function expandAndSelect() {\n    setContext({\n      sample: {\n        isExpanded: true,\n        isSelected: false,\n      },\n      'sample-child-2': {\n        isSelected: true,\n        isExpanded: false,\n      },\n    });\n  }\n\n  return (\n    <div\n      style={{\n        display: 'block',\n        position: 'relative',\n        width: '100%',\n        height: '40rem',\n      }}\n    >\n      <IxButton\n        onClick={expandAndSelect}\n        ghost\n        style={{ marginBottom: '2rem' }}\n      >\n        Expand Tree\n      </IxButton>\n      <IxTree\n        root=\"root\"\n        model={model}\n        context={context}\n        onContextChange={({ detail }) => {\n          setContext(detail);\n        }}\n        renderItem={(data: TreeData) => (\n          <div className=\"d-flex align-items-center\">\n            <IxIcon name={data.icon} size=\"16\" className=\"me-2\" /> {data.name}\n          </div>\n        )}\n      ></IxTree>\n    </div>\n  );\n};\n")))}m.isMDXComponent=!0}}]);