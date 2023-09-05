"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75059],{75059:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=t(7896),o=(t(2784),t(30876));const r={},i=void 0,s={unversionedId:"auto-generated/previews/vue/tree-custom",id:"auto-generated/previews/vue/tree-custom",title:"tree-custom",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/tree-custom.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/tree-custom",permalink:"/version-dev/docs/auto-generated/previews/vue/tree-custom",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/tree-custom.md",tags:[],version:"current",frontMatter:{}},d={},l=[],c={toc:l};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<script lang=\"ts\" setup>\nimport { TreeContext, TreeModel } from '@siemens/ix';\nimport { IxButton, IxTree } from '@siemens/ix-vue';\nimport { defineComponent, onMounted, ref } from 'vue';\n\ntype TreeData = {\n  name: string;\n  icon: string;\n};\n\nconst context = ref<TreeContext>();\nconst model = ref<TreeModel<TreeData>>();\n\nfunction renderItem(data: TreeData) {\n  return defineComponent({\n    setup: () => {\n      data;\n    },\n    template: `\n    <div class=\"d-flex align-items-center\">\n      <IxIcon :name=\"data.icon\" size=\"16\" class=\"me-2\" />\n      {{ data.name }}\n    </div>`,\n  });\n}\n\nfunction expandAndSelect() {\n  context.value = {\n    sample: {\n      isExpanded: true,\n      isSelected: false,\n    },\n    'sample-child-2': {\n      isSelected: true,\n      isExpanded: false,\n    },\n  };\n}\n\nonMounted(() => {\n  model.value = {\n    root: {\n      id: 'root',\n      data: {\n        icon: '',\n        name: '',\n      },\n      hasChildren: true,\n      children: ['sample'],\n    },\n    sample: {\n      id: 'sample',\n      data: {\n        name: 'Sample',\n        icon: 'star',\n      },\n      hasChildren: true,\n      children: ['sample-child-1', 'sample-child-2'],\n    },\n    'sample-child-1': {\n      id: 'sample-child-1',\n      data: {\n        name: 'Sample Child 1',\n        icon: 'cut',\n      },\n      hasChildren: false,\n      children: [],\n    },\n    'sample-child-2': {\n      id: 'sample-child-2',\n      data: {\n        name: 'Sample Child 2',\n        icon: 'print',\n      },\n      hasChildren: false,\n      children: [],\n    },\n  };\n});\n<\/script>\n\n<template>\n  <div style=\"display: block; position: relative; width: 100%; height: 40rem\">\n    <IxButton @click=\"expandAndSelect\" ghost style=\"margin-bottom: 2rem\">\n      Expand Tree\n    </IxButton>\n    <IxTree\n      root=\"root\"\n      :model=\"model\"\n      :context=\"context\"\n      @contextChange=\"({ detail }) => (context = detail)\"\n    >\n    </IxTree>\n  </div>\n</template>\n")))}m.isMDXComponent=!0}}]);