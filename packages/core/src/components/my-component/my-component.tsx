/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */
import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  render() {
    return (
      <Host>
        <ix-basic-navigation>
          <ix-menu
            expand={true}
            style={{ borderRight: '1px solid rgba(224, 245, 255, 0.25)' }}
          >
            <ix-menu-item home icon="home">
              Home
            </ix-menu-item>
            <ix-menu-item icon="globe">Normal Tab</ix-menu-item>
            <ix-menu-category label="Top level Category" icon="rocket">
              <ix-menu-item icon="globe">Nested Tab</ix-menu-item>
              <ix-menu-item icon="globe">Nested Tab</ix-menu-item>
            </ix-menu-category>
          </ix-menu>
          <ix-side-panel-wrapper floating={true}>
            <ix-side-panel slot="top" paneTitle="TOP">
              <h1>Test Heading</h1>
              <p>This is a test content with a button</p>
              <ix-button>PUSH ME</ix-button>
            </ix-side-panel>
            <ix-side-panel paneTitle="LEFT" slot="left">
              <h1>Test Heading</h1>
              <p>This is a test content with a button</p>
              <ix-button>PUSH ME</ix-button>
            </ix-side-panel>
            <ix-side-panel slot="right" paneTitle="RIGHT"></ix-side-panel>
            <ix-side-panel slot="bottom" paneTitle="BOTTOM"></ix-side-panel>
            <ix-side-panel-content-area
              style={{ backgroundColor: 'blue' }}
              slot="content"
            >
              <h1>Test Heading</h1>
              <h1>Test Heading</h1>
              <h1>Test Heading</h1>
              <h1>Test Heading</h1>
              <h1>Test Heading</h1>
              <p>This is a test content with a button</p>
            </ix-side-panel-content-area>
          </ix-side-panel-wrapper>
        </ix-basic-navigation>
      </Host>
    );
  }
}
