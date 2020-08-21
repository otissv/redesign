import React from 'react'
import {
  HomeIcon,
  ContentCopyIcon,
  DeleteAlertIcon,
} from '@redesign/material-icons'

import { ThemeProvider } from '@redesign/ui-core'
import { TabsProvider } from './TabContext'
import { TabList } from './TabList'
import { Tabs } from './Tabs'
import { TabListButton } from './TabListButton'
import { TabListButtonIcon } from './TabListButtonIcon'
import { TabPanel } from './TabPanel'

export default {
  title: 'Components/Organisms/Tabs',
  component: Tabs,
}

export const Default = () => (
  <ThemeProvider>
    <TabsProvider active="1">
      <Tabs>
        <TabList>
          <TabListButton title="Tab1" id="1">
            Tab 1
          </TabListButton>
          <TabListButton title="Tab2" id="2">
            Tab 2
          </TabListButton>
          <TabListButton title="Tab3" id="3">
            Tab 3
          </TabListButton>
        </TabList>

        <TabPanel id="1" padding={5} css="height: 100px">
          <h4>Tab 1</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl
            at leo porta suscipit et vel diam. Maecenas venenatis consectetur
            tortor, quis fermentum orci tristique ut. Etiam tristique
            sollicitudin feugiat.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl
            at leo porta suscipit et vel diam. Maecenas venenatis consectetur
            tortor, quis fermentum orci tristique ut. Etiam tristique
            sollicitudin feugiat.
          </p>
        </TabPanel>
        <TabPanel id="2" padding={5}>
          <h4>Tab 2</h4>
          <p>
            In eu mi bibendum neque. In ante metus dictum at. Senectus et netus
            et malesuada fames ac. Ac tortor dignissim convallis aenean et
            tortor at risus viverra. Pulvinar neque laoreet suspendisse interdum
            consectetur libero. Maecenas pharetra convallis posuere morbi leo.
          </p>
        </TabPanel>
        <TabPanel id="3" padding={5}>
          <h4>Tab 3</h4>
          <p>
            Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque.
            Dolor sit amet consectetur adipiscing elit pellentesque. Quisque
            sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in
            nulla posuere sollicitudin aliquam.
          </p>
        </TabPanel>
      </Tabs>
    </TabsProvider>
  </ThemeProvider>
)

export const Icons = () => (
  <ThemeProvider>
    <TabsProvider active="1">
      <Tabs align="TABS_ALIGN_LEFT">
        <TabList stacked size={3}>
          <TabListButtonIcon title="Tab1" id="1" alt="home" icon={HomeIcon} />
          <TabListButtonIcon
            title="Tab2"
            id="2"
            alt="copy"
            icon={ContentCopyIcon}
          />
          <TabListButtonIcon
            title="Tab3"
            id="3"
            alt="delete"
            icon={DeleteAlertIcon}
          />
        </TabList>

        <TabPanel id="1" padding={5} css="height: 100px">
          <h4>Tab 1</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl
            at leo porta suscipit et vel diam. Maecenas venenatis consectetur
            tortor, quis fermentum orci tristique ut. Etiam tristique
            sollicitudin feugiat.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl
            at leo porta suscipit et vel diam. Maecenas venenatis consectetur
            tortor, quis fermentum orci tristique ut. Etiam tristique
            sollicitudin feugiat.
          </p>
        </TabPanel>
        <TabPanel id="2" padding={5}>
          <h4>Tab 2</h4>
          <p>
            In eu mi bibendum neque. In ante metus dictum at. Senectus et netus
            et malesuada fames ac. Ac tortor dignissim convallis aenean et
            tortor at risus viverra. Pulvinar neque laoreet suspendisse interdum
            consectetur libero. Maecenas pharetra convallis posuere morbi leo.
          </p>
        </TabPanel>
        <TabPanel id="3" padding={5}>
          <h4>Tab 3</h4>
          <p>
            Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque.
            Dolor sit amet consectetur adipiscing elit pellentesque. Quisque
            sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in
            nulla posuere sollicitudin aliquam.
          </p>
        </TabPanel>
      </Tabs>
    </TabsProvider>
  </ThemeProvider>
)
