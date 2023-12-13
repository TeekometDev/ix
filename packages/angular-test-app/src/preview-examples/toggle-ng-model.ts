/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-example-ng-model',
  template: ` <ix-toggle [(ngModel)]="checked"></ix-toggle>`,
})
export default class Toggle {
  checked = false;
}
