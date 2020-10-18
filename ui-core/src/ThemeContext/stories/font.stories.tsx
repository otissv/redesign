import React from 'react'
import { theme, Box, Td, Th } from './story.components'
import { ThemeProvider } from '../ThemeProvider'

const tdLineHeightStyle = {
  paddingTop: 0,
  paddingBottom: 0,
}

export default {
  title: 'Theme/Font',
}

export const Font = () => {
  return (
    <ThemeProvider>
      <Box display="flex" flexWrap="wrap">
        <table>
          <thead>
            <tr>
              <Th>Key</Th>
              <Th>Value</Th>
              <Th>Example</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>base</Td>
              <Td>{theme.font.base}</Td>
              <Td style={{ fontSize: theme.font.base }}>Base font size</Td>
            </tr>

            <tr>
              <Td>color</Td>
              <Td>{theme.font.color}</Td>
              <Td style={{ color: theme.font.color }}>Text color</Td>
            </tr>

            <tr>
              <Td>colorInvert</Td>
              <Td>{theme.font.colorInvert}</Td>
              <Td style={{ color: theme.font.colorInvert }}>
                Text color inverted
              </Td>
            </tr>

            <tr>
              <Td>smooth</Td>
              <Td>{theme.font.smooth}</Td>
              <Td style={{ fontFamily: theme.font.smooth }}>Smooth font</Td>
            </tr>

            <tr>
              <Td>code</Td>
              <Td>{theme.font.code}</Td>
              <Td style={{ fontFamily: theme.font.code }}>Code font</Td>
            </tr>

            <tr>
              <Td>serif</Td>
              <Td>{theme.font.serif}</Td>
              <Td style={{ fontFamily: theme.font.serif }}>Serif font</Td>
            </tr>

            <tr>
              <Td>sans</Td>
              <Td>{theme.font.sans}</Td>
              <Td style={{ fontFamily: theme.font.sans }}>Sans font</Td>
            </tr>

            <tr>
              <Td>letterSpacing</Td>
              <Td>{theme.font.letterSpacing}</Td>
              <Td style={{ letterSpacing: theme.font.letterSpacing }}>
                Letter spacing
              </Td>
            </tr>
          </tbody>
        </table>
      </Box>
    </ThemeProvider>
  )
}

export const Size = () => {
  return (
    <ThemeProvider>
      <Box display="flex" flexWrap="wrap">
        <table>
          <thead>
            <tr>
              <Th>Key</Th>
              <Th>Value</Th>
              <Th>Example</Th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(theme.font.size).map(([key, size]) => {
              return (
                <tr key={key}>
                  <Td>{key}</Td>
                  <Td>{size as string}</Td>
                  <Td
                    css={{
                      fontSize: size,
                    }}
                  >
                    font Size {key}
                  </Td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Box>
    </ThemeProvider>
  )
}

export const LineHeight = () => {
  return (
    <ThemeProvider>
      <Box display="flex" flexWrap="wrap">
        <table>
          <thead>
            <tr>
              <Th>Key</Th>
              <Th>Value</Th>
              <Th>Example</Th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(theme.font.lineHeight).map(([key, lineHeight]) => {
              return (
                <tr key={key}>
                  <Td css={tdLineHeightStyle}>{key}</Td>
                  <Td css={tdLineHeightStyle}>{lineHeight as string}</Td>
                  <Td
                    css={{
                      ...tdLineHeightStyle,
                      lineHeight: lineHeight,
                    }}
                  >
                    Line height {key}
                  </Td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Box>
    </ThemeProvider>
  )
}

export const Weight = () => {
  return (
    <ThemeProvider>
      <Box display="flex" flexWrap="wrap">
        <table>
          <thead>
            <tr>
              <Th>Key</Th>
              <Th>Value</Th>
              <Th>Example</Th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(theme.font.weight).map(([key, weight]) => {
              return (
                <tr key={key}>
                  <Td>{key}</Td>
                  <Td>{weight as string}</Td>
                  <Td
                    css={{
                      fontWeight: weight,
                    }}
                  >
                    Weight{key}
                  </Td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Box>
    </ThemeProvider>
  )
}
