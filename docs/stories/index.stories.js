import React from "react";
import { ThemeProvider } from "@redesign-system/ui-core";

export default {
  title: "Home",
};

export const About = () => (
  <ThemeProvider>
    <h1>Redesign System</h1>
    <p>
      <strong>Work in progress</strong>
    </p>
    <h2>Redesign Theme</h2>
    Themable library for CSS-in-JS libraries
    <h2> Redesign UI Core</h2>
    Core components React Design System
    <h2> Redesign UI</h2>
    React Design System Components
    <h2>Principles</h2>
    <ul>
      <li>
        With the exception of ThemeProvider components all components are
        stateless and do not use context. This allows components to be easily
        composable. State can be passed as props to components using the
        provided hooks.
      </li>
      <li>All components are themeable and can be customized.</li>
      <li>Theme key/value pair should never be an array</li>
      <li>
        Numbered scales should are used where a theme key/value pair has
        multiple options. In addtion to the numbered scale string equivilents
        can be added.
      </li>
    </ul>
  </ThemeProvider>
);
