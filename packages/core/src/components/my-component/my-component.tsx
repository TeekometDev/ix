/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */

import { Component, h, Host, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {
  @State() expanded: boolean = false;
  @State() slot: string = 'left';

  render() {
    return (
      <Host>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <ix-pane-layout
            variant={'floating'}
            layout={'full-width-top-bottom'}
            borderless={true}
          >
            <ix-pane key={1} heading={'Pane 1'} slot={this.slot} size={'33%'}>
              <div style={{ width: '1000px', height: '1000px' }}>
                <h1>Pane 1</h1>
              </div>
            </ix-pane>

            <ix-pane key={2} heading={'Pane 2'} slot={'top'} size={'33%'}>
              <h1>Pane 2</h1>
            </ix-pane>

            <ix-pane
              key={3}
              heading={'Pane 3'}
              slot={'right'}
              size={'33%'}
              // overwrite layout defaults
              variant={'inline'}
              borderless={false}
            >
              <h1>Pane 3</h1>
            </ix-pane>

            <ix-pane key={4} heading={'Pane 4'} slot={'bottom'} size={'33%'}>
              <h1>Pane 4</h1>
            </ix-pane>

            <div
              slot={'content'}
              style={{
                backgroundColor: 'white',
                width: '100%',
                height: '100%',
                padding: '2.5rem',
              }}
            >
              <ix-button
                onClick={() => {
                  this.expanded = !this.expanded;
                }}
              >
                Popup Pane
              </ix-button>
            </div>
          </ix-pane-layout>

          <ix-pane
            key={5}
            heading={'popup'}
            position={'right'}
            expanded={this.expanded}
            variant={'floating'}
            size={'50%'}
            collapsible={false}
            onExpandedChanged={(event) => {
              this.expanded = event.detail.expanded;
            }}
            style={{
              position: 'absolute',
              right: '0',
              zIndex: '10',
            }}
          >
            <h1>Popup</h1>
          </ix-pane>
        </div>
      </Host>
    );
  }
}
