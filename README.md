# Redesign System

**_Work in progress_**

## Redesign Theme

Themable library for CSS-in-JS libraries

## Redesign UI Core

Core components React Design System

## Redesign UI

React Design System Components

## Principles

- With the exception of ThemeProvider components all components are stateless and do not use context. This allows components to be easily composable.
  State can be passed as props to components using the provided hooks.

- All components are themeable and can be customized.

- Theme key/value pair should never be an array

- Numbered scales should are used where a theme key/value pair has multiple options. In addtion to the numbered scale string equivilents can be added.

## License

MIT
