/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('aggrid', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('/');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('filter', async ({ page }) => {
    await page.goto('/');

    const filterHandle = await page.waitForSelector('.ag-header-cell:nth-child(2) [ref="eMenu"]');
    await filterHandle.click();

    const inputHandle = await page.waitForSelector('.ag-input-field-input.ag-text-field-input');
    await inputHandle.fill('Test');

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
