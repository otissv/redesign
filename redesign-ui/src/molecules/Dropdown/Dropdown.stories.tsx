import React from 'react'

import { DropdownProvider } from './DropdownProvider'
import { Dropdown } from './Dropdown'
import { DropdownButton } from './DropdownButton'
import { DropdownContent } from './DropdownContent'
import { ThemeProvider } from '@redesign/ui-core'
import { Box } from '../../atoms/Box'

export default {
  title: 'Components/Molecules/Dropdown',
  component: Dropdown,
}

export const Default = () => (
  <ThemeProvider>
    <DropdownProvider>
      <Dropdown>
        <DropdownButton>Click</DropdownButton>
        <DropdownContent>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
            <li>Item 6</li>
            <li>Item 7</li>
            <li>Item 8</li>
            <li>Item 9</li>
            <li>Item 10</li>
            <li>Item 11</li>
            <li>Item 12</li>
          </ul>
        </DropdownContent>
      </Dropdown>
    </DropdownProvider>
  </ThemeProvider>
)

export const Appearance = () => (
  <ThemeProvider>
    <Box matchProps={{ margin3: 'right bottom' }}>
      <DropdownProvider>
        <Dropdown>
          <DropdownButton appearance="PRIMARY">Primary</DropdownButton>
          <DropdownContent>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              <li>Item 10</li>
              <li>Item 11</li>
              <li>Item 12</li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </DropdownProvider>
      <DropdownProvider>
        <Dropdown>
          <DropdownButton appearance="SECONDARY">Secondary</DropdownButton>
          <DropdownContent>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              <li>Item 10</li>
              <li>Item 11</li>
              <li>Item 12</li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </DropdownProvider>
      <DropdownProvider>
        <Dropdown>
          <DropdownButton appearance="TERTIARY">Tertiary</DropdownButton>
          <DropdownContent>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              <li>Item 10</li>
              <li>Item 11</li>
              <li>Item 12</li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </DropdownProvider>

      <DropdownProvider>
        <Dropdown>
          <DropdownButton appearance="ACCENT">Accent</DropdownButton>
          <DropdownContent>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              <li>Item 10</li>
              <li>Item 11</li>
              <li>Item 12</li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </DropdownProvider>
      <DropdownProvider>
        <Dropdown>
          <DropdownButton appearance="PRIMARY_ACCENT">
            Primary accent
          </DropdownButton>
          <DropdownContent>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              <li>Item 10</li>
              <li>Item 11</li>
              <li>Item 12</li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </DropdownProvider>
      <DropdownProvider>
        <Dropdown>
          <DropdownButton appearance="SECONDARY_ACCENT">
            Secondary Accent
          </DropdownButton>
          <DropdownContent>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              <li>Item 10</li>
              <li>Item 11</li>
              <li>Item 12</li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </DropdownProvider>
      <DropdownProvider>
        <Dropdown>
          <DropdownButton appearance="TERTIARY_ACCENT">
            Tertiary Accent
          </DropdownButton>
          <DropdownContent>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              <li>Item 10</li>
              <li>Item 11</li>
              <li>Item 12</li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </DropdownProvider>

      <DropdownProvider>
        <Dropdown>
          <DropdownButton appearance="ACTIVE">Active</DropdownButton>
          <DropdownContent>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              <li>Item 10</li>
              <li>Item 11</li>
              <li>Item 12</li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </DropdownProvider>
      <DropdownProvider>
        <Dropdown>
          <DropdownButton appearance="PRIMARY_ACTIVE">
            Primary accent
          </DropdownButton>
          <DropdownContent>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              <li>Item 10</li>
              <li>Item 11</li>
              <li>Item 12</li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </DropdownProvider>
      <DropdownProvider>
        <Dropdown>
          <DropdownButton appearance="SECONDARY_ACTIVE">
            Secondary Active
          </DropdownButton>
          <DropdownContent>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              <li>Item 10</li>
              <li>Item 11</li>
              <li>Item 12</li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </DropdownProvider>
      <DropdownProvider>
        <Dropdown>
          <DropdownButton appearance="TERTIARY_ACTIVE">
            Tertiary Active
          </DropdownButton>
          <DropdownContent>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              <li>Item 10</li>
              <li>Item 11</li>
              <li>Item 12</li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </DropdownProvider>

      <DropdownProvider>
        <Dropdown>
          <DropdownButton appearance="ACTION">Action</DropdownButton>
          <DropdownContent>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              <li>Item 10</li>
              <li>Item 11</li>
              <li>Item 12</li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </DropdownProvider>
      <DropdownProvider>
        <Dropdown>
          <DropdownButton appearance="PRIMARY_ACTION">
            Primary accent
          </DropdownButton>
          <DropdownContent>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              <li>Item 10</li>
              <li>Item 11</li>
              <li>Item 12</li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </DropdownProvider>
      <DropdownProvider>
        <Dropdown>
          <DropdownButton appearance="SECONDARY_ACTION">
            Secondary Action
          </DropdownButton>
          <DropdownContent>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              <li>Item 10</li>
              <li>Item 11</li>
              <li>Item 12</li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </DropdownProvider>
      <DropdownProvider>
        <Dropdown>
          <DropdownButton appearance="TERTIARY_ACTION">
            Tertiary Action
          </DropdownButton>
          <DropdownContent>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              <li>Item 10</li>
              <li>Item 11</li>
              <li>Item 12</li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </DropdownProvider>

      <DropdownProvider>
        <Dropdown>
          <DropdownButton appearance="DANGER">Danger</DropdownButton>
          <DropdownContent>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              <li>Item 10</li>
              <li>Item 11</li>
              <li>Item 12</li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </DropdownProvider>
      <DropdownProvider>
        <Dropdown>
          <DropdownButton appearance="PRIMARY_DANGER">
            Primary accent
          </DropdownButton>
          <DropdownContent>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              <li>Item 10</li>
              <li>Item 11</li>
              <li>Item 12</li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </DropdownProvider>
      <DropdownProvider>
        <Dropdown>
          <DropdownButton appearance="SECONDARY_DANGER">
            Secondary Danger
          </DropdownButton>
          <DropdownContent>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              <li>Item 10</li>
              <li>Item 11</li>
              <li>Item 12</li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </DropdownProvider>
      <DropdownProvider>
        <Dropdown>
          <DropdownButton appearance="TERTIARY_DANGER">
            Tertiary Danger
          </DropdownButton>
          <DropdownContent>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              <li>Item 10</li>
              <li>Item 11</li>
              <li>Item 12</li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </DropdownProvider>

      <DropdownProvider>
        <Dropdown>
          <DropdownButton appearance="SUCCESS">Success</DropdownButton>
          <DropdownContent>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              <li>Item 10</li>
              <li>Item 11</li>
              <li>Item 12</li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </DropdownProvider>
      <DropdownProvider>
        <Dropdown>
          <DropdownButton appearance="PRIMARY_SUCCESS">
            Primary accent
          </DropdownButton>
          <DropdownContent>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              <li>Item 10</li>
              <li>Item 11</li>
              <li>Item 12</li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </DropdownProvider>
      <DropdownProvider>
        <Dropdown>
          <DropdownButton appearance="SECONDARY_SUCCESS">
            Secondary Success
          </DropdownButton>
          <DropdownContent>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              <li>Item 10</li>
              <li>Item 11</li>
              <li>Item 12</li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </DropdownProvider>
      <DropdownProvider>
        <Dropdown>
          <DropdownButton appearance="TERTIARY_SUCCESS">
            Tertiary Success
          </DropdownButton>
          <DropdownContent>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              <li>Item 10</li>
              <li>Item 11</li>
              <li>Item 12</li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </DropdownProvider>

      <DropdownProvider>
        <Dropdown>
          <DropdownButton appearance="WARNING">Warning</DropdownButton>
          <DropdownContent>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              <li>Item 10</li>
              <li>Item 11</li>
              <li>Item 12</li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </DropdownProvider>
      <DropdownProvider>
        <Dropdown>
          <DropdownButton appearance="PRIMARY_WARNING">
            Primary accent
          </DropdownButton>
          <DropdownContent>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              <li>Item 10</li>
              <li>Item 11</li>
              <li>Item 12</li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </DropdownProvider>
      <DropdownProvider>
        <Dropdown>
          <DropdownButton appearance="SECONDARY_WARNING">
            Secondary Warning
          </DropdownButton>
          <DropdownContent>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              <li>Item 10</li>
              <li>Item 11</li>
              <li>Item 12</li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </DropdownProvider>
      <DropdownProvider>
        <Dropdown>
          <DropdownButton appearance="TERTIARY_WARNING">
            Tertiary Warning
          </DropdownButton>
          <DropdownContent>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              <li>Item 10</li>
              <li>Item 11</li>
              <li>Item 12</li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </DropdownProvider>

      <DropdownProvider>
        <Dropdown>
          <DropdownButton appearance="DISABLED">Disabled</DropdownButton>
          <DropdownContent>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              <li>Item 10</li>
              <li>Item 11</li>
              <li>Item 12</li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </DropdownProvider>
      <DropdownProvider>
        <Dropdown>
          <DropdownButton appearance="PRIMARY_DISABLED">
            Primary accent
          </DropdownButton>
          <DropdownContent>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              <li>Item 10</li>
              <li>Item 11</li>
              <li>Item 12</li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </DropdownProvider>
      <DropdownProvider>
        <Dropdown>
          <DropdownButton appearance="SECONDARY_DISABLED">
            Secondary Disabled
          </DropdownButton>
          <DropdownContent>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              <li>Item 10</li>
              <li>Item 11</li>
              <li>Item 12</li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </DropdownProvider>
      <DropdownProvider>
        <Dropdown>
          <DropdownButton appearance="TERTIARY_DISABLED">
            Tertiary Disabled
          </DropdownButton>
          <DropdownContent>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              <li>Item 10</li>
              <li>Item 11</li>
              <li>Item 12</li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </DropdownProvider>
    </Box>
  </ThemeProvider>
)
