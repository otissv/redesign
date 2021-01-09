import React, { Fragment } from 'react'
import { theme, Box, Td, Th } from './story.components'
import { ThemeProvider } from '../ThemeProvider'

export default {
  title: 'Theme/Color',
}

function getColorItems() {
  const items: any[] = []
  for (let key in theme.color) {
    const value = theme.color[key]

    items.push(
      <Fragment>
        <Box w="200px" m={4} childrenProps={{ mb: 2 }}>
          <Box>
            <Box as="p">{key}</Box>

            <Box as="p">{value}</Box>
          </Box>

          <Box w="100px" h="100px" bg={value} display="block" />
        </Box>
      </Fragment>
    )
  }

  console.log(items)

  return items
}

export const Color = () => {
  return (
    <ThemeProvider>
      <Box display="flex" flexWrap="wrap">
        {getColorItems()}
      </Box>
    </ThemeProvider>
  )
}

{
  /* <table>
<thead>
  <tr>
    <Th>Key</Th>
    <Th>Value</Th>
    <Th>Example</Th>
  </tr>
</thead>
<tbody>
  {Object.entries(theme.color).map(([key, color]) => {
    return (
      <tr key={key}>
        <Td>{key}</Td>
        <Td>{color as string}</Td>
        <Td>
          <div
            style={{
              height: '100px',
              width: '100px',
              background: color as string,
            }}
          ></div>
        </Td>
      </tr>
    )
  })}
</tbody>
</table> */
}
