"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[10633],{10633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/vue/validation",id:"auto-generated/previews/vue/validation",title:"validation",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/validation.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/validation",permalink:"/version-dev/docs/auto-generated/previews/vue/validation",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/validation.md",tags:[],version:"current",frontMatter:{}},l={},d=[],u={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { IxValidationTooltip } from \'@siemens/ix-vue\';\nimport { useForm } from \'vue-hooks-form\';\n\nconst { useField, validateFields } = useForm({ defaultValues: {} });\n\nconst firstName = useField(\'firstName\', { rule: { required: true } });\nconst lastName = useField(\'lastName\', { rule: { required: true } });\nconst userName = useField(\'userName\', { rule: { required: true } });\n\nconst onSubmit = async (data: any) => {\n  console.log(data);\n  await validateFields();\n};\n<\/script>\n\n<template>\n  <form class="row g-3 needs-validation" noValidate @submit.prevent="onSubmit">\n    <div class="col-md-4">\n      <label htmlFor="validationCustom01" class="form-label">\n        First name\n      </label>\n      <input\n        id="validationCustom01"\n        type="text"\n        class="form-control"\n        :required="!!firstName.error"\n        :class="[firstName.error ? \'is-invalid\' : \'\']"\n        v-model="firstName.value"\n      />\n      <div class="valid-feedback">Looks good!</div>\n    </div>\n    <div class="col-md-4">\n      <label htmlFor="validationCustom02" class="form-label"> Last name </label>\n      <IxValidationTooltip\n        message="Error hint textError hint textError hint textError hint textError hint textError hint textError hint textError hint textError hint text"\n      >\n        <input\n          id="validationCustom02"\n          type="text"\n          class="form-control"\n          :required="!!lastName.error"\n          :class="[lastName.error ? \'is-invalid\' : \'\']"\n          v-model="lastName.value"\n        />\n      </IxValidationTooltip>\n    </div>\n    <div class="col-md-4">\n      <label htmlFor="validationCustomUsername" class="form-label">\n        Username\n      </label>\n      <input\n        id="validationCustomUsername"\n        aria-describedby="inputGroupPrepend"\n        type="text"\n        class="form-control"\n        :required="!!userName.error"\n        :class="[userName.error ? \'is-invalid\' : \'\']"\n        v-model="userName.value"\n      />\n      <div class="invalid-feedback">Please choose a username.</div>\n    </div>\n    <div class="col-12">\n      <button class="btn btn-primary" type="submit">Submit form</button>\n    </div>\n  </form>\n</template>\n')))}m.isMDXComponent=!0}}]);