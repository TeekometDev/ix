/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
import { LegalLinkLanguage } from "./components/siemens-about-content/imprint-language";
export namespace Components {
    interface IxSiemensAboutContent {
        /**
          * Should only be set if you use ix-menu standalone
         */
        "applicationDescription": string;
        /**
          * Should only be set if you use ix-menu standalone
         */
        "applicationName": string;
        /**
          * Copyright
         */
        "copyrightYears": string;
        "i18nCookieNoticeLabel": string;
        "i18nCorporateLabel": string;
        "i18nDigitalId": string;
        "i18nPrivacyNoticeLabel": string;
        "i18nTermsOfUseLabel": string;
        /**
          * Language of the links in the About & Legal Tab
         */
        "imprintLanguage": LegalLinkLanguage;
    }
    interface IxSiemensLogo {
    }
}
declare global {
    interface HTMLIxSiemensAboutContentElement extends Components.IxSiemensAboutContent, HTMLStencilElement {
    }
    var HTMLIxSiemensAboutContentElement: {
        prototype: HTMLIxSiemensAboutContentElement;
        new (): HTMLIxSiemensAboutContentElement;
    };
    interface HTMLIxSiemensLogoElement extends Components.IxSiemensLogo, HTMLStencilElement {
    }
    var HTMLIxSiemensLogoElement: {
        prototype: HTMLIxSiemensLogoElement;
        new (): HTMLIxSiemensLogoElement;
    };
    interface HTMLElementTagNameMap {
        "ix-siemens-about-content": HTMLIxSiemensAboutContentElement;
        "ix-siemens-logo": HTMLIxSiemensLogoElement;
    }
}
declare namespace LocalJSX {
    interface IxSiemensAboutContent {
        /**
          * Should only be set if you use ix-menu standalone
         */
        "applicationDescription"?: string;
        /**
          * Should only be set if you use ix-menu standalone
         */
        "applicationName"?: string;
        /**
          * Copyright
         */
        "copyrightYears"?: string;
        "i18nCookieNoticeLabel"?: string;
        "i18nCorporateLabel"?: string;
        "i18nDigitalId"?: string;
        "i18nPrivacyNoticeLabel"?: string;
        "i18nTermsOfUseLabel"?: string;
        /**
          * Language of the links in the About & Legal Tab
         */
        "imprintLanguage"?: LegalLinkLanguage;
    }
    interface IxSiemensLogo {
    }
    interface IntrinsicElements {
        "ix-siemens-about-content": IxSiemensAboutContent;
        "ix-siemens-logo": IxSiemensLogo;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ix-siemens-about-content": LocalJSX.IxSiemensAboutContent & JSXBase.HTMLAttributes<HTMLIxSiemensAboutContentElement>;
            "ix-siemens-logo": LocalJSX.IxSiemensLogo & JSXBase.HTMLAttributes<HTMLIxSiemensLogoElement>;
        }
    }
}
