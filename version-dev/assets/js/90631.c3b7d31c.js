"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[90631],{13961:(e,o,r)=>{r.d(o,{g:()=>i});const t=e=>e.toUpperCase()==="Primary".toUpperCase(),n=e=>e.toUpperCase()==="Secondary".toUpperCase(),i=function(e,o,r,i,a,d,b){return void 0===i&&(i=!1),void 0===a&&(a=!1),{btn:!0,"btn-primary":t(e)&&!o&&!r,"btn-outline-primary":t(e)&&o&&!r,"btn-invisible-primary":t(e)&&!o&&r,"btn-secondary":n(e)&&!o&&!r,"btn-outline-secondary":n(e)&&o&&!r,"btn-invisible-secondary":n(e)&&!o&&r,"btn-icon":i,"btn-oval":a,selected:n(e)&&(o||r)&&d,disabled:b}}},90631:(e,o,r)=>{r.r(o),r.d(o,{ix_icon_button:()=>i});var t=r(54813),n=r(13961);const i=class{constructor(e){(0,t.r)(this,e),this.variant="Secondary",this.outline=void 0,this.invisible=void 0,this.ghost=void 0,this.oval=void 0,this.icon=void 0,this.size="24",this.color=void 0,this.selected=!1,this.disabled=!1,this.type="button"}componentDidLoad(){if("submit"===this.type){const e=document.createElement("button");e.style.display="none",e.type="submit",e.tabIndex=-1,this.hostElement.appendChild(e),this.submitButtonElement=e}}dispatchFormEvents(){"submit"===this.type&&this.submitButtonElement&&this.submitButtonElement.click()}getIconSizeClass(){return{"btn-icon-12":"12"===this.size,"btn-icon-16":"16"===this.size,"btn-icon-32":"32"===this.size||"24"===this.size||!this.size}}getIconButtonClasses(){return Object.assign(Object.assign(Object.assign({},(0,n.g)(this.variant,this.outline,this.ghost||this.invisible,!0,this.oval,this.selected,this.disabled)),{"icon-button":!0}),this.getIconSizeClass())}render(){return(0,t.h)(t.H,{class:Object.assign(Object.assign({},this.getIconSizeClass()),{disabled:this.disabled})},(0,t.h)("button",{class:this.getIconButtonClasses(),type:this.type,onClick:()=>this.dispatchFormEvents()},(0,t.h)("ix-icon",{size:this.size,name:this.icon,color:this.color}),(0,t.h)("div",{style:{display:"none"}},(0,t.h)("slot",null))))}get hostElement(){return(0,t.g)(this)}};i.style=".btn{display:inline-flex;align-items:center;justify-content:center;height:2rem;font-size:0.875rem;font-weight:700;transition:150ms;padding:0 0.5rem;min-width:5rem;gap:0.25rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.btn .glyph{margin-right:0.25rem;font-weight:400}.btn:focus-visible,.btn.focus{box-shadow:none}.btn-primary{border-radius:var(--theme-btn--border-radius)}.btn-primary,.btn-primary.focus,.btn-primary:focus-visible{background-color:var(--theme-btn-primary--background);color:var(--theme-btn-primary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-primary--border-color);border-style:solid}.btn-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}.btn-primary.selected{background-color:var(--theme-btn-primary--background--selected)}.btn-primary.hover,.btn-primary:hover{border-color:var(--theme-btn-primary--border-color--hover) !important;background-color:var(--theme-btn-primary--background--hover) !important;color:var(--theme-btn-primary--color--hover) !important}.btn-primary.selected.hover,.btn-primary.selected:hover{background-color:var(--theme-btn-primary--background--selected-hover);color:var(--theme-btn-primary--color--selected-hover)}.btn-primary:not(:disabled):not(.disabled):active,.btn-primary:not(:disabled):not(.disabled).active,.show>.btn-primary.dropdown-toggle{border-color:var(--theme-btn-primary--border-color--active) !important;background-color:var(--theme-btn-primary--background--active) !important;color:var(--theme-btn-primary--color--active) !important}.btn-primary.selected:not(:disabled):not(.disabled):active,.btn-primary.selected:not(:disabled):not(.disabled).active,.show>.btn-primary.selected.dropdown-toggle{background-color:var(--theme-btn-primary--background--selected-active);color:var(--theme-btn-primary--color--selected-active)}.btn-primary.disabled,.btn-primary:disabled{pointer-events:none;cursor:initial;border-color:var(--theme-btn-primary--border-color--disabled);background-color:var(--theme-btn-primary--background--disabled);color:var(--theme-btn-primary--color--disabled);opacity:1}.btn-outline-primary{border-radius:var(--theme-btn--border-radius)}.btn-outline-primary,.btn-outline-primary.focus,.btn-outline-primary:focus-visible{background-color:var(--theme-btn-outline-primary--background);color:var(--theme-btn-outline-primary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-outline-primary--border-color);border-style:solid}.btn-outline-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}.btn-outline-primary.selected{background-color:var(--theme-btn-outline-primary--background--selected)}.btn-outline-primary.hover,.btn-outline-primary:hover{border-color:var(--theme-btn-outline-primary--border-color--hover) !important;background-color:var(--theme-btn-outline-primary--background--hover) !important;color:var(--theme-btn-outline-primary--color--hover) !important}.btn-outline-primary.selected.hover,.btn-outline-primary.selected:hover{background-color:var(--theme-btn-outline-primary--background--selected-hover);color:var(--theme-btn-outline-primary--color--selected-hover)}.btn-outline-primary:not(:disabled):not(.disabled):active,.btn-outline-primary:not(:disabled):not(.disabled).active,.show>.btn-outline-primary.dropdown-toggle{border-color:var(--theme-btn-outline-primary--border-color--active) !important;background-color:var(--theme-btn-outline-primary--background--active) !important;color:var(--theme-btn-outline-primary--color--active) !important}.btn-outline-primary.selected:not(:disabled):not(.disabled):active,.btn-outline-primary.selected:not(:disabled):not(.disabled).active,.show>.btn-outline-primary.selected.dropdown-toggle{background-color:var(--theme-btn-outline-primary--background--selected-active);color:var(--theme-btn-outline-primary--color--selected-active)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{pointer-events:none;cursor:initial;border-color:var(--theme-btn-outline-primary--border-color--disabled);background-color:var(--theme-btn-outline-primary--background--disabled);color:var(--theme-btn-outline-primary--color--disabled);opacity:1}.btn-invisible-primary{border-radius:var(--theme-btn--border-radius);--bs-btn-border-width:0px;--bs-btn-active-border-color:none}.btn-invisible-primary,.btn-invisible-primary.focus,.btn-invisible-primary:focus-visible{background-color:var(--theme-btn-invisible-primary--background);color:var(--theme-btn-invisible-primary--color);border-color:transparent}.btn-invisible-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}.btn-invisible-primary.selected{background-color:var(--theme-btn-invisible-primary--background--selected)}.btn-invisible-primary.hover,.btn-invisible-primary:hover{background-color:var(--theme-btn-invisible-primary--background--hover) !important;color:var(--theme-btn-invisible-primary--color--hover) !important}.btn-invisible-primary.selected.hover,.btn-invisible-primary.selected:hover{background-color:var(--theme-btn-invisible-primary--background--selected-hover);color:var(--theme-btn-invisible-primary--color--selected-hover)}.btn-invisible-primary:not(:disabled):not(.disabled):active,.btn-invisible-primary:not(:disabled):not(.disabled).active,.show>.btn-invisible-primary.dropdown-toggle{background-color:var(--theme-btn-invisible-primary--background--active) !important;color:var(--theme-btn-invisible-primary--color--active) !important}.btn-invisible-primary.selected:not(:disabled):not(.disabled):active,.btn-invisible-primary.selected:not(:disabled):not(.disabled).active,.show>.btn-invisible-primary.selected.dropdown-toggle{background-color:var(--theme-btn-invisible-primary--background--selected-active);color:var(--theme-btn-invisible-primary--color--selected-active)}.btn-invisible-primary.disabled,.btn-invisible-primary:disabled{pointer-events:none;cursor:initial;background-color:var(--theme-btn-invisible-primary--background--disabled);color:var(--theme-btn-invisible-primary--color--disabled);opacity:1}.btn-secondary{border-radius:var(--theme-btn--border-radius)}.btn-secondary,.btn-secondary.focus,.btn-secondary:focus-visible{background-color:var(--theme-btn-secondary--background);color:var(--theme-btn-secondary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-secondary--border-color);border-style:solid}.btn-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}.btn-secondary.selected{background-color:var(--theme-btn-secondary--background--selected)}.btn-secondary.hover,.btn-secondary:hover{border-color:var(--theme-btn-secondary--border-color--hover) !important;background-color:var(--theme-btn-secondary--background--hover) !important;color:var(--theme-btn-secondary--color--hover) !important}.btn-secondary.selected.hover,.btn-secondary.selected:hover{background-color:var(--theme-btn-secondary--background--selected-hover);color:var(--theme-btn-secondary--color--selected-hover)}.btn-secondary:not(:disabled):not(.disabled):active,.btn-secondary:not(:disabled):not(.disabled).active,.show>.btn-secondary.dropdown-toggle{border-color:var(--theme-btn-secondary--border-color--active) !important;background-color:var(--theme-btn-secondary--background--active) !important;color:var(--theme-btn-secondary--color--active) !important}.btn-secondary.selected:not(:disabled):not(.disabled):active,.btn-secondary.selected:not(:disabled):not(.disabled).active,.show>.btn-secondary.selected.dropdown-toggle{background-color:var(--theme-btn-secondary--background--selected-active);color:var(--theme-btn-secondary--color--selected-active)}.btn-secondary.disabled,.btn-secondary:disabled{pointer-events:none;cursor:initial;border-color:var(--theme-btn-secondary--border-color--disabled);background-color:var(--theme-btn-secondary--background--disabled);color:var(--theme-btn-secondary--color--disabled);opacity:1}.btn-outline-secondary{border-radius:var(--theme-btn--border-radius)}.btn-outline-secondary,.btn-outline-secondary.focus,.btn-outline-secondary:focus-visible{background-color:var(--theme-btn-outline-secondary--background);color:var(--theme-btn-outline-secondary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-outline-secondary--border-color);border-style:solid}.btn-outline-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}.btn-outline-secondary.selected{background-color:var(--theme-btn-outline-secondary--background--selected)}.btn-outline-secondary.hover,.btn-outline-secondary:hover{border-color:var(--theme-btn-outline-secondary--border-color--hover) !important;background-color:var(--theme-btn-outline-secondary--background--hover) !important;color:var(--theme-btn-outline-secondary--color--hover) !important}.btn-outline-secondary.selected.hover,.btn-outline-secondary.selected:hover{background-color:var(--theme-btn-outline-secondary--background--selected-hover);color:var(--theme-btn-outline-secondary--color--selected-hover)}.btn-outline-secondary:not(:disabled):not(.disabled):active,.btn-outline-secondary:not(:disabled):not(.disabled).active,.show>.btn-outline-secondary.dropdown-toggle{border-color:var(--theme-btn-outline-secondary--border-color--active) !important;background-color:var(--theme-btn-outline-secondary--background--active) !important;color:var(--theme-btn-outline-secondary--color--active) !important}.btn-outline-secondary.selected:not(:disabled):not(.disabled):active,.btn-outline-secondary.selected:not(:disabled):not(.disabled).active,.show>.btn-outline-secondary.selected.dropdown-toggle{background-color:var(--theme-btn-outline-secondary--background--selected-active);color:var(--theme-btn-outline-secondary--color--selected-active)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{pointer-events:none;cursor:initial;border-color:var(--theme-btn-outline-secondary--border-color--disabled);background-color:var(--theme-btn-outline-secondary--background--disabled);color:var(--theme-btn-outline-secondary--color--disabled);opacity:1}.btn-invisible-secondary{border-radius:var(--theme-btn--border-radius);--bs-btn-border-width:0px;--bs-btn-active-border-color:none}.btn-invisible-secondary,.btn-invisible-secondary.focus,.btn-invisible-secondary:focus-visible{background-color:var(--theme-btn-invisible-secondary--background);color:var(--theme-btn-invisible-secondary--color);border-color:transparent}.btn-invisible-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}.btn-invisible-secondary.selected{background-color:var(--theme-btn-invisible-secondary--background--selected)}.btn-invisible-secondary.hover,.btn-invisible-secondary:hover{background-color:var(--theme-btn-invisible-secondary--background--hover) !important;color:var(--theme-btn-invisible-secondary--color--hover) !important}.btn-invisible-secondary.selected.hover,.btn-invisible-secondary.selected:hover{background-color:var(--theme-btn-invisible-secondary--background--selected-hover);color:var(--theme-btn-invisible-secondary--color--selected-hover)}.btn-invisible-secondary:not(:disabled):not(.disabled):active,.btn-invisible-secondary:not(:disabled):not(.disabled).active,.show>.btn-invisible-secondary.dropdown-toggle{background-color:var(--theme-btn-invisible-secondary--background--active) !important;color:var(--theme-btn-invisible-secondary--color--active) !important}.btn-invisible-secondary.selected:not(:disabled):not(.disabled):active,.btn-invisible-secondary.selected:not(:disabled):not(.disabled).active,.show>.btn-invisible-secondary.selected.dropdown-toggle{background-color:var(--theme-btn-invisible-secondary--background--selected-active);color:var(--theme-btn-invisible-secondary--color--selected-active)}.btn-invisible-secondary.disabled,.btn-invisible-secondary:disabled{pointer-events:none;cursor:initial;background-color:var(--theme-btn-invisible-secondary--background--disabled);color:var(--theme-btn-invisible-secondary--color--disabled);opacity:1}.btn-oval,.btn-icon{min-width:2rem;width:2rem}.btn-oval .glyph,.btn-icon .glyph{margin-right:0}.btn-oval{border-radius:6.25rem;width:2rem}.btn-icon-xs,.btn-icon-12{height:1rem;width:1rem;min-width:1rem;min-height:1rem}.btn-icon-s,.btn-icon-16{height:1.5rem;width:1.5rem;min-width:1.5rem;min-height:1.5rem}.btn-icon-32{height:2rem;width:2rem;min-width:2rem;min-height:2rem}:host{display:inline-block;vertical-align:middle}:host .icon-button{padding:0;overflow:hidden}:host button:not(:disabled){cursor:pointer}:host(.disabled){pointer-events:none}"}}]);