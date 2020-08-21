import React from 'react'

import { ThemeProvider } from '@redesign/ui-core'
import { Typography } from './Typography'
import { Box } from '../Box'

export default {
  title: 'Components/Atoms/Typography',
  component: Typography,
}

export const Default = () => (
  <ThemeProvider>
    <Typography>Typography</Typography>
  </ThemeProvider>
)

export const As = () => (
  <ThemeProvider>
    <Box margin="default">
      <table>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>a</td>
            <td>
              <Typography href="#" as="a">
                hyper link
              </Typography>
            </td>
          </tr>
          <tr>
            <td>code</td>
            <td>
              <Typography as="code">code element</Typography>
            </td>
          </tr>
          <tr>
            <td>em</td>
            <td>
              <Typography as="em">em element</Typography>
            </td>
          </tr>
          <tr>
            <td>h1</td>
            <td>
              <Typography as="h1">h1 element</Typography>
            </td>
          </tr>
          <tr>
            <td>h2</td>
            <td>
              <Typography as="h2">h2 element</Typography>
            </td>
          </tr>
          <tr>
            <td>h3</td>
            <td>
              <Typography as="h3">h3 element</Typography>
            </td>
          </tr>
          <tr>
            <td>h4</td>
            <td>
              <Typography as="h4">h4 element</Typography>
            </td>
          </tr>
          <tr>
            <td>h5</td>
            <td>
              <Typography as="h5">h5 element</Typography>
            </td>
          </tr>
          <tr>
            <td>h6</td>
            <td>
              <Typography as="h6">h6 element</Typography>
            </td>
          </tr>
          <tr>
            <td>hr</td>
            <td>
              <Typography as="hr" />
            </td>
          </tr>
          <tr>
            <td>q</td>
            <td>
              <Typography as="q">q element</Typography>
            </td>
          </tr>
          <tr>
            <td>p</td>
            <td>
              <Typography as="p">
                Define a paragraph using the p element.
              </Typography>
            </td>
          </tr>
          <tr>
            <td>span</td>
            <td>
              <Typography as="span">span element</Typography>
            </td>
          </tr>
          <tr>
            <td>strong</td>
            <td>
              <Typography as="strong">strong element</Typography>
            </td>
          </tr>
        </tbody>
      </table>
    </Box>
  </ThemeProvider>
)

export const Appearance = () => (
  <ThemeProvider>
    <Box mb={5}>
      <Typography>Default</Typography>
    </Box>
    <Box mb={5}>
      <Typography appearance="PRIMARY"> Primary</Typography>
    </Box>
    <Box mb={5}>
      <Typography appearance="ACCENT">Accent</Typography>
    </Box>
    <Box mb={5}>
      <Typography appearance="ACTIVE">Active</Typography>
    </Box>
    <Box mb={5}>
      <Typography appearance="ACTION">Action</Typography>
    </Box>
    <Box mb={5}>
      <Typography appearance="DANGER">Danger</Typography>
    </Box>
    <Box mb={5}>
      <Typography appearance="ERROR">Error</Typography>
    </Box>
    <Box mb={5}>
      <Typography appearance="SUCCESS">Success</Typography>
    </Box>
    <Box mb={5}>
      <Typography appearance="WARNING">Warning</Typography>
    </Box>
    <Box mb={5}>
      <Typography appearance="DISABLED">Disabled</Typography>
    </Box>
  </ThemeProvider>
)
