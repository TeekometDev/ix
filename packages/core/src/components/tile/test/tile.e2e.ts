/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('tile', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto(`tile/test/basic`);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
