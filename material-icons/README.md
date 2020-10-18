# Redesign Material Icons

A collection of over 5000 [Material Design Icons](https://github.com/templarian/MaterialDesign) converted to Redesign UI icons.

## Usage

`npm install @redesign/material-icons @redesign/theme @redesign/ui-core`

## Installation

`npm run install`

or

`yarn install`

## Build

All react icons are generated from the `svg` directory into the `src` directory, then compiled from Typescript to JavaScript into the `dist directory.

`svg` directory contains only the stripped (paths only) svgs.

As the `src` and `dist` directories are auto generated do not edit files in this directory.

To generate the svgs into components and type definitions run `npm run generate`.

Typescript files will be outputted to `src` and JavaScript and type definitions will be outputted to `dist`,

Due to the large number of icons and nodejs memory limits, components are not typed checked and definitions are hard coded.

## Credits

- [Material Design Icons](https://github.com/templarian/MaterialDesign)
- [Emotion](https://emotion.sh/)

## License

MIT
