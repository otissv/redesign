import React from 'react'
import { theme, Box, Th, Td } from './story.components'
import { ThemeProvider } from '../ThemeProvider'

export default {
  title: 'Theme/MediaQueries',
}

export const Breakpoints = () => {
  let rows = []

  for (let key in theme.breakpoints) {
    const item = theme.breakpoints[key]

    const row = (
      <tr key={key}>
        <Td>{key}</Td>
        <Td>{item.min as string}</Td>
        <Td>{item.max as string}</Td>
      </tr>
    )

    rows.push(row)
  }

  return (
    <ThemeProvider>
      <Box display="flex" flexWrap="wrap">
        <table>
          <thead>
            <tr>
              <Th>Key</Th>
              <Th>Min Value</Th>
              <Th>Max Value</Th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </Box>
    </ThemeProvider>
  )
}

export const MediaQueries = () => {
  let rows = []

  for (let key in theme.mediaQueries) {
    const item = theme.mediaQueries[key]

    const row = (
      <tr key={key}>
        <Td>{key}</Td>
        <Td>{item.min as string}</Td>
        <Td>{item.max as string}</Td>
      </tr>
    )

    rows.push(row)
  }

  return (
    <ThemeProvider>
      <Box display="flex" flexWrap="wrap">
        <table>
          <thead>
            <tr>
              <Th>Key</Th>
              <Th>Min Value</Th>
              <Th>Max Value</Th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </Box>
    </ThemeProvider>
  )
}

export const Example = () => {
  const boxCss = {
    background: 'red',
    width: '100%',
    height: '100px',
    margin: '10px',
  }

  const mq = {
    sm: {
      min: {
        color: 'blue',
        background: 'green',
      },
    },
    md: {
      min: {
        fontSize: '48px',
        color: 'white',
        background: 'black',
      },
    },
  }

  return (
    <ThemeProvider>
      <Box css={boxCss} mq={mq} radius="rounded">
        Media Queries
      </Box>
    </ThemeProvider>
  )
}
