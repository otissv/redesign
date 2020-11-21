import React from 'react'

import { ThemeProvider } from '@redesign-system/ui-core'
import { Match } from '@redesign-system/ui-core/Match'
import { FacebookIcon } from '@redesign-system/material-icons/FacebookIcon'
import { TwitterIcon } from '@redesign-system/material-icons/TwitterIcon'
import { LinkedinIcon } from '@redesign-system/material-icons/LinkedinIcon'

import { Box } from '../Box'
import { Footer } from './Footer'
import { FixedWidth } from '../FixedWidth'

export default {
  title: 'Components/Footer',
  component: Footer,
}

export const Default = () => (
  <ThemeProvider>
    <Footer bg="grey_800" cl="grey_200">
      <Match pb={7}>
        <Box flex="1">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </Box>

        <Box pr={7} fl="1">
          <dl>
            <dt>Company</dt>
            <dd>
              Email: <a href="/">email@example.com</a>
            </dd>
            <dd>
              Telephone: <a href="/">+00 000 00000 000</a>
            </dd>
          </dl>
        </Box>

        <Box flex="1">
          <h5>Address</h5>
          <address>
            Address 1<br />
            City
            <br />
            County
            <br />
            County
            <br />
            State
            <br />
            Postal Code
          </address>
        </Box>

        <Box d="flex" fld="column" childrenProps={{ mb: 2 }}>
          <a href="/">
            <FacebookIcon cl="#fff" w={7} />
          </a>
          <a href="/">
            <TwitterIcon cl="#fff" w={7} />
          </a>
          <a href="/">
            <LinkedinIcon cl="#fff" w={7} />
          </a>
        </Box>
      </Match>
    </Footer>
  </ThemeProvider>
)

export const Fixed_Width = () => (
  <ThemeProvider>
    <Footer bg="grey_800" cl="grey_200">
      <FixedWidth>
        <Match pb={7}>
          <Box flex="1">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Products</a>
              </li>
              <li>
                <a href="/">Services</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </Box>

          <Box pr={7} fl="1">
            <dl>
              <dt>Company</dt>
              <dd>
                Email: <a href="/">email@example.com</a>
              </dd>
              <dd>
                Telephone: <a href="/">+00 000 00000 000</a>
              </dd>
            </dl>
          </Box>

          <Box flex="1">
            <h5>Address</h5>
            <address>
              Address 1<br />
              City
              <br />
              County
              <br />
              County
              <br />
              State
              <br />
              Postal Code
            </address>
          </Box>

          <Box d="flex" fld="column" childrenProps={{ mb: 2 }}>
            <a href="/">
              <FacebookIcon cl="#fff" w={7} />
            </a>
            <a href="/">
              <TwitterIcon cl="#fff" w={7} />
            </a>
            <a href="/">
              <LinkedinIcon cl="#fff" w={7} />
            </a>
          </Box>
        </Match>
      </FixedWidth>
    </Footer>
  </ThemeProvider>
)
