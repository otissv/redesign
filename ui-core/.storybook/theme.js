// YourTheme.js

import { create } from '@storybook/theming/create'

const background = 'hsla(211,26%,21%,1)'

import logo from './redesign.svg'

export default create({
  base: 'dark',
  brandTitle: 'Redesign',
  brandUrl: '/',
  brandImage: logo,

  // // colorPrimary: 'hotpink',
  // colorSecondary: 'deepskyblue',

  // // UI
  appBg: background,
  appContentBg: background,
  appBorderColor: background,
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'white',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'white',
  barBg: background,

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,
})
