import React from 'react'
import { ThemeProvider } from '@redesign-system/ui-core'

import { Section } from './Section'
import { Box } from '../../atoms/Box'

export default {
  title: 'Components/Molecules/Section',
  component: Section,
}

export const Default = () => (
  <ThemeProvider>
    <Section heading="Section Title">
      <Box bt="thin" mt={3} pt={5}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Box>
    </Section>
  </ThemeProvider>
)

export const Heading = () => (
  <ThemeProvider>
    <Section
      heading={{
        title: {
          as: 'h3',
          children: 'Section Title',
        },
        secondaryTitle: 'Sub heading',
      }}
    >
      <Box bt="thin" mt={3} pt={5}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Box>
    </Section>
  </ThemeProvider>
)
