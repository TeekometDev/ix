/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
type ThemeVariables = Record<string, string>;
type Themes = Record<string, ThemeVariables>;

const generateTargetPath = './scss/theme';

const copyrightHeader = `/**
* COPYRIGHT (c) Siemens AG
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
/*
* Autogenerated please not edit directly
*/
`;

const alias = {
  bl: 'brand-light',
  bd: 'brand-dark',
  cl: 'classic-light',
  cd: 'classic-dark',
};

if (process.argv.length !== 3) {
  console.error('Error: Call script with a color file');
}

const staticTheme = {};
const colorFilePath = process.argv[2];
const colorFile = readFileSync(colorFilePath).toString();

function extractZeplinColorExport(file: string): Themes {
  const themes: Themes = {};

  const colors = file.match(/--\w\w_theme.*/g);
  colors.forEach((rawColor) => {
    const color = rawColor.replace(';', '');

    let [alias, name] = color.split('_theme');
    alias = alias.substring(2).trim();
    name = name.substring(1, name.length);

    let [variableName, value] = name.split(':');

    if (variableName[0] === '-') {
      variableName = variableName.substring(1, variableName.length);
    }

    if (!themes[alias]) {
      themes[alias] = {};
    }

    themes[alias][variableName.trim()] = value.trim();
  });

  const staticColors = file.match(/^\s*--(?!cl|cd|bl|bd).*/gm);

  // List of colors added due to zeplin export bug, that should be ignored.
  const colorZombies = [
    '--1FillsSpecialpurposetheme-color-shadow-1-dark',
    '--1FillsSpecialpurposetheme-color-shadow-1-light',
    '--1FillsSpecialpurposetheme-color-shadow-2-dark',
    '--1FillsSpecialpurposetheme-color-shadow-2-light',
    '--1FillsTextIconcolors10theme-color-static-blackplanned',
    '--1FillsTextIconcolors4theme-color-contrast-text-dark',
    '--1FillsTextIconcolors4theme-color-contrast-text-light',
    '--1UIColorsBackgroundcolorstheme-color-4-light',
    '--1UIColorstexttheme-color-std-text-light',
    '--Fills2Status-lightchart-critical',
    '--3InteractionstatesCards1card-hover-dark',
    '--3InteractionstatesCards1card-hover-light',
    '--3InteractionstatesCards2card-pressed-light',
    '--3InteractionstatesGhostmousestates4theme-ghost-weak-selected',
    '--3InteractionstatesStandardmousestates3selected',
    '--3InteractionstatesStandardmousestates4weak-selected',
    '--Fills1LightOtherchart-critical',
    '--bd_theme-color-1',
    '--darkplotticks',
    '--plot1Lightaxes',
    '--plot1Lightgrid-lines',
    '--plot1Lightstd-text',
    '--plot1Lightticks',
    '--plot2Darkaxes',
    '--plot2Darkgrid-lines',
    '--plot2Darkstd-text',
  ];

  staticColors.forEach((rawColor) => {
    const color = rawColor.trim().replace(';', '');
    let [variableName, value] = color.split(':');
    if (colorZombies.indexOf(variableName) >= 0) {
      return;
    }

    staticTheme[variableName] = value;
  });

  return themes;
}

const aliasedThemes = extractZeplinColorExport(colorFile);
const themes: Themes = {};

function formatVariableOutputs(themeVariables: ThemeVariables) {
  const s = Object.keys(themeVariables).map((k) => {
    return `    ${k}: ${themeVariables[k]},\n`;
  });

  return s.join('');
}

Object.keys(aliasedThemes).forEach((theme) => {
  const themeName = alias[theme];
  themes[themeName] = aliasedThemes[theme];

  let data =
    copyrightHeader +
    `
$${themeName}: (
$replace$
);
`;

  const format = formatVariableOutputs(themes[themeName]);
  const reg = /\$replace\$/g;

  data = data.replace(reg, format);

  if (!existsSync(`${generateTargetPath}/${themeName}`)) {
    mkdirSync(`${generateTargetPath}/${themeName}`, {
      recursive: true,
    });
  }
  writeFileSync(`${generateTargetPath}/${themeName}/_variables.scss`, data);
});

// Write static colors
let data = `${copyrightHeader}
body {
  `;

Object.keys(staticTheme).forEach((color) => {
  data += `${color}: ${staticTheme[color]};
  `;
});

data += `
}`;

writeFileSync(`${generateTargetPath}/_static-colors.scss`, data);
