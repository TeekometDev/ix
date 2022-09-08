/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'ix-flip-tile-content',
  styleUrl: 'flip-tile-content.css',
  shadow: true,
})
export class CwFlipTileContent {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
