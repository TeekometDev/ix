/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ix-menu-about-item',
  styleUrl: 'menu-about-item.css',
  scoped: true,
})
export class CwMenuAboutItem {
  /**
   * About Item label
   */
  @Prop({ reflect: true }) label: string;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
