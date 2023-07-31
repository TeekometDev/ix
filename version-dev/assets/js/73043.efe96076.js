"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[73043],{86941:(e,r,o)=>{o.d(r,{a:()=>t,b:()=>n});const t=e=>e?"true":"false",n=e=>{const r={};return i.forEach((o=>{if(e.hasAttribute(o)){null!==e.getAttribute(o)&&(r[o]=e.getAttribute(o)),e.removeAttribute(o)}})),r},i=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"]},13961:(e,r,o)=>{o.d(r,{g:()=>i});const t=e=>e.toUpperCase()==="Primary".toUpperCase(),n=e=>e.toUpperCase()==="Secondary".toUpperCase(),i=function(e,r,o,i,a,d,b){return void 0===i&&(i=!1),void 0===a&&(a=!1),{btn:!0,"btn-primary":t(e)&&!r&&!o,"btn-outline-primary":t(e)&&r&&!o,"btn-invisible-primary":t(e)&&!r&&o,"btn-secondary":n(e)&&!r&&!o,"btn-outline-secondary":n(e)&&r&&!o,"btn-invisible-secondary":n(e)&&!r&&o,"btn-icon":i,"btn-oval":a,selected:n(e)&&(r||o)&&d,disabled:b}}},73043:(e,r,o)=>{o.r(r),o.d(r,{ix_burger_menu:()=>a});var t=o(44530),n=o(13961),i=o(86941);const a=class{constructor(e){(0,t.r)(this,e),this.ixAriaLabel="Expand",this.expanded=!1,this.pinned=!1}render(){return(0,t.h)(t.H,{class:{expanded:this.expanded}},this.pinned?(0,t.h)("ix-icon-button",{icon:"double-chevron-right",ghost:!0}):(0,t.h)("button",{class:Object.assign(Object.assign({},(0,n.g)("secondary",!1,!0,!0,!1,!1,!1)),{"burger-menu-button":!0}),type:"button","aria-label":this.ixAriaLabel?this.ixAriaLabel:null,"aria-pressed":(0,i.a)(this.expanded)},(0,t.h)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},(0,t.h)("rect",{class:"line line-1",x:"2",y:"5",width:"20",height:"2"}),(0,t.h)("rect",{class:"line line-2",x:"2",y:"11",width:"13",height:"2"}),(0,t.h)("rect",{class:"line line-3",x:"2",y:"17",width:"20",height:"2"}))))}};a.style=".btn{display:inline-flex;align-items:center;justify-content:center;height:2rem;font-size:0.875rem;font-weight:700;transition:150ms;padding:0 0.5rem;min-width:5rem;gap:0.25rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.btn .glyph{margin-right:0.25rem;font-weight:400}.btn:focus-visible,.btn.focus{box-shadow:none}.btn-primary{border-radius:var(--theme-btn--border-radius)}.btn-primary,.btn-primary.focus,.btn-primary:focus-visible{background-color:var(--theme-btn-primary--background);color:var(--theme-btn-primary--color);--ix-button-color:var(--theme-btn-primary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-primary--border-color);border-style:solid}.btn-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}.btn-primary.selected{background-color:var(--theme-btn-primary--background--selected)}.btn-primary.hover,.btn-primary:hover{border-color:var(--theme-btn-primary--border-color--hover) !important;background-color:var(--theme-btn-primary--background--hover) !important;color:var(--theme-btn-primary--color--hover) !important}.btn-primary.selected.hover,.btn-primary.selected:hover{background-color:var(--theme-btn-primary--background--selected-hover);color:var(--theme-btn-primary--color--selected-hover)}.btn-primary:not(:disabled):not(.disabled):active,.btn-primary:not(:disabled):not(.disabled).active,.show>.btn-primary.dropdown-toggle{border-color:var(--theme-btn-primary--border-color--active) !important;background-color:var(--theme-btn-primary--background--active) !important;color:var(--theme-btn-primary--color--active) !important}.btn-primary.selected:not(:disabled):not(.disabled):active,.btn-primary.selected:not(:disabled):not(.disabled).active,.show>.btn-primary.selected.dropdown-toggle{background-color:var(--theme-btn-primary--background--selected-active);color:var(--theme-btn-primary--color--selected-active)}.btn-primary.disabled,.btn-primary:disabled{pointer-events:none;cursor:initial;border-color:var(--theme-btn-primary--border-color--disabled);background-color:var(--theme-btn-primary--background--disabled);color:var(--theme-btn-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-primary--color--disabled)}.btn-outline-primary{border-radius:var(--theme-btn--border-radius)}.btn-outline-primary,.btn-outline-primary.focus,.btn-outline-primary:focus-visible{background-color:var(--theme-btn-outline-primary--background);color:var(--theme-btn-outline-primary--color);--ix-button-color:var(--theme-btn-outline-primary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-outline-primary--border-color);border-style:solid}.btn-outline-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}.btn-outline-primary.selected{background-color:var(--theme-btn-outline-primary--background--selected)}.btn-outline-primary.hover,.btn-outline-primary:hover{border-color:var(--theme-btn-outline-primary--border-color--hover) !important;background-color:var(--theme-btn-outline-primary--background--hover) !important;color:var(--theme-btn-outline-primary--color--hover) !important}.btn-outline-primary.selected.hover,.btn-outline-primary.selected:hover{background-color:var(--theme-btn-outline-primary--background--selected-hover);color:var(--theme-btn-outline-primary--color--selected-hover)}.btn-outline-primary:not(:disabled):not(.disabled):active,.btn-outline-primary:not(:disabled):not(.disabled).active,.show>.btn-outline-primary.dropdown-toggle{border-color:var(--theme-btn-outline-primary--border-color--active) !important;background-color:var(--theme-btn-outline-primary--background--active) !important;color:var(--theme-btn-outline-primary--color--active) !important}.btn-outline-primary.selected:not(:disabled):not(.disabled):active,.btn-outline-primary.selected:not(:disabled):not(.disabled).active,.show>.btn-outline-primary.selected.dropdown-toggle{background-color:var(--theme-btn-outline-primary--background--selected-active);color:var(--theme-btn-outline-primary--color--selected-active)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{pointer-events:none;cursor:initial;border-color:var(--theme-btn-outline-primary--border-color--disabled);background-color:var(--theme-btn-outline-primary--background--disabled);color:var(--theme-btn-outline-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-outline-primary--color--disabled)}.btn-invisible-primary{border-radius:var(--theme-btn--border-radius);--bs-btn-border-width:0px;--bs-btn-active-border-color:none}.btn-invisible-primary,.btn-invisible-primary.focus,.btn-invisible-primary:focus-visible{background-color:var(--theme-btn-invisible-primary--background);color:var(--theme-btn-invisible-primary--color);--ix-button-color:var(--theme-btn-invisible-primary--color);border-color:transparent}.btn-invisible-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}.btn-invisible-primary.selected{background-color:var(--theme-btn-invisible-primary--background--selected)}.btn-invisible-primary.hover,.btn-invisible-primary:hover{background-color:var(--theme-btn-invisible-primary--background--hover) !important;color:var(--theme-btn-invisible-primary--color--hover) !important}.btn-invisible-primary.selected.hover,.btn-invisible-primary.selected:hover{background-color:var(--theme-btn-invisible-primary--background--selected-hover);color:var(--theme-btn-invisible-primary--color--selected-hover)}.btn-invisible-primary:not(:disabled):not(.disabled):active,.btn-invisible-primary:not(:disabled):not(.disabled).active,.show>.btn-invisible-primary.dropdown-toggle{background-color:var(--theme-btn-invisible-primary--background--active) !important;color:var(--theme-btn-invisible-primary--color--active) !important}.btn-invisible-primary.selected:not(:disabled):not(.disabled):active,.btn-invisible-primary.selected:not(:disabled):not(.disabled).active,.show>.btn-invisible-primary.selected.dropdown-toggle{background-color:var(--theme-btn-invisible-primary--background--selected-active);color:var(--theme-btn-invisible-primary--color--selected-active)}.btn-invisible-primary.disabled,.btn-invisible-primary:disabled{pointer-events:none;cursor:initial;background-color:var(--theme-btn-invisible-primary--background--disabled);color:var(--theme-btn-invisible-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-invisible-primary--color--disabled)}.btn-secondary{border-radius:var(--theme-btn--border-radius)}.btn-secondary,.btn-secondary.focus,.btn-secondary:focus-visible{background-color:var(--theme-btn-secondary--background);color:var(--theme-btn-secondary--color);--ix-button-color:var(--theme-btn-secondary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-secondary--border-color);border-style:solid}.btn-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}.btn-secondary.selected{background-color:var(--theme-btn-secondary--background--selected)}.btn-secondary.hover,.btn-secondary:hover{border-color:var(--theme-btn-secondary--border-color--hover) !important;background-color:var(--theme-btn-secondary--background--hover) !important;color:var(--theme-btn-secondary--color--hover) !important}.btn-secondary.selected.hover,.btn-secondary.selected:hover{background-color:var(--theme-btn-secondary--background--selected-hover);color:var(--theme-btn-secondary--color--selected-hover)}.btn-secondary:not(:disabled):not(.disabled):active,.btn-secondary:not(:disabled):not(.disabled).active,.show>.btn-secondary.dropdown-toggle{border-color:var(--theme-btn-secondary--border-color--active) !important;background-color:var(--theme-btn-secondary--background--active) !important;color:var(--theme-btn-secondary--color--active) !important}.btn-secondary.selected:not(:disabled):not(.disabled):active,.btn-secondary.selected:not(:disabled):not(.disabled).active,.show>.btn-secondary.selected.dropdown-toggle{background-color:var(--theme-btn-secondary--background--selected-active);color:var(--theme-btn-secondary--color--selected-active)}.btn-secondary.disabled,.btn-secondary:disabled{pointer-events:none;cursor:initial;border-color:var(--theme-btn-secondary--border-color--disabled);background-color:var(--theme-btn-secondary--background--disabled);color:var(--theme-btn-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-secondary--color--disabled)}.btn-outline-secondary{border-radius:var(--theme-btn--border-radius)}.btn-outline-secondary,.btn-outline-secondary.focus,.btn-outline-secondary:focus-visible{background-color:var(--theme-btn-outline-secondary--background);color:var(--theme-btn-outline-secondary--color);--ix-button-color:var(--theme-btn-outline-secondary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-outline-secondary--border-color);border-style:solid}.btn-outline-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}.btn-outline-secondary.selected{background-color:var(--theme-btn-outline-secondary--background--selected)}.btn-outline-secondary.hover,.btn-outline-secondary:hover{border-color:var(--theme-btn-outline-secondary--border-color--hover) !important;background-color:var(--theme-btn-outline-secondary--background--hover) !important;color:var(--theme-btn-outline-secondary--color--hover) !important}.btn-outline-secondary.selected.hover,.btn-outline-secondary.selected:hover{background-color:var(--theme-btn-outline-secondary--background--selected-hover);color:var(--theme-btn-outline-secondary--color--selected-hover)}.btn-outline-secondary:not(:disabled):not(.disabled):active,.btn-outline-secondary:not(:disabled):not(.disabled).active,.show>.btn-outline-secondary.dropdown-toggle{border-color:var(--theme-btn-outline-secondary--border-color--active) !important;background-color:var(--theme-btn-outline-secondary--background--active) !important;color:var(--theme-btn-outline-secondary--color--active) !important}.btn-outline-secondary.selected:not(:disabled):not(.disabled):active,.btn-outline-secondary.selected:not(:disabled):not(.disabled).active,.show>.btn-outline-secondary.selected.dropdown-toggle{background-color:var(--theme-btn-outline-secondary--background--selected-active);color:var(--theme-btn-outline-secondary--color--selected-active)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{pointer-events:none;cursor:initial;border-color:var(--theme-btn-outline-secondary--border-color--disabled);background-color:var(--theme-btn-outline-secondary--background--disabled);color:var(--theme-btn-outline-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-outline-secondary--color--disabled)}.btn-invisible-secondary{border-radius:var(--theme-btn--border-radius);--bs-btn-border-width:0px;--bs-btn-active-border-color:none}.btn-invisible-secondary,.btn-invisible-secondary.focus,.btn-invisible-secondary:focus-visible{background-color:var(--theme-btn-invisible-secondary--background);color:var(--theme-btn-invisible-secondary--color);--ix-button-color:var(--theme-btn-invisible-secondary--color);border-color:transparent}.btn-invisible-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}.btn-invisible-secondary.selected{background-color:var(--theme-btn-invisible-secondary--background--selected)}.btn-invisible-secondary.hover,.btn-invisible-secondary:hover{background-color:var(--theme-btn-invisible-secondary--background--hover) !important;color:var(--theme-btn-invisible-secondary--color--hover) !important}.btn-invisible-secondary.selected.hover,.btn-invisible-secondary.selected:hover{background-color:var(--theme-btn-invisible-secondary--background--selected-hover);color:var(--theme-btn-invisible-secondary--color--selected-hover)}.btn-invisible-secondary:not(:disabled):not(.disabled):active,.btn-invisible-secondary:not(:disabled):not(.disabled).active,.show>.btn-invisible-secondary.dropdown-toggle{background-color:var(--theme-btn-invisible-secondary--background--active) !important;color:var(--theme-btn-invisible-secondary--color--active) !important}.btn-invisible-secondary.selected:not(:disabled):not(.disabled):active,.btn-invisible-secondary.selected:not(:disabled):not(.disabled).active,.show>.btn-invisible-secondary.selected.dropdown-toggle{background-color:var(--theme-btn-invisible-secondary--background--selected-active);color:var(--theme-btn-invisible-secondary--color--selected-active)}.btn-invisible-secondary.disabled,.btn-invisible-secondary:disabled{pointer-events:none;cursor:initial;background-color:var(--theme-btn-invisible-secondary--background--disabled);color:var(--theme-btn-invisible-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-invisible-secondary--color--disabled)}.btn-oval,.btn-icon{min-width:2rem;width:2rem}.btn-oval .glyph,.btn-icon .glyph{margin-right:0}.btn-oval{border-radius:6.25rem;width:2rem}.btn-icon-xs,.btn-icon-12{height:1rem;width:1rem;min-width:1rem;min-height:1rem}.btn-icon-s,.btn-icon-16{height:1.5rem;width:1.5rem;min-width:1.5rem;min-height:1.5rem}.btn-icon-32{height:2rem;width:2rem;min-width:2rem;min-height:2rem}:host{display:flex;justify-content:center;align-items:center;height:2rem;width:2.5rem;border-radius:var(--theme-btn--border-radius);pointer-events:all}:host *,:host *::after,:host *::before{box-sizing:border-box}:host svg{display:inline-block;vertical-align:middle}:host .line{fill:var(--theme-menu-btn--color);opacity:1;x:2px;transition:x 0.075s ease-in 0.15s, transform 0.075s ease-in-out 0.075s, y 0.075s ease-in-out, opacity 0.075s linear 0.075s;transform-origin:center}:host(:not(.disabled):not(:disabled)){cursor:pointer}:host(:hover:not(.disabled):not(:disabled)) .burger-menu-button{background-color:var(--theme-menu-btn--background--hover)}.burger-menu-button{width:40px;padding:0}:host(:not(.disabled):not(:disabled)){cursor:pointer}:host(:active:not(.disabled):not(:disabled)) .burger-menu-button{background-color:var(--theme-menu-btn--background--active)}:host(.expanded) svg .line-1{opacity:1;transform:rotate(-45deg);y:11px}:host(.expanded) svg .line-2{opacity:0;x:9}:host(.expanded) svg .line-3{opacity:1;transform:rotate(45deg);y:11px}:host(.expanded) ix-icon-button{transform:rotate(180deg)}"}}]);