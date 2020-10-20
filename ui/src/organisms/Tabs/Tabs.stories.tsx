import React from 'react'
import { HomeIcon } from '@redesign-system/material-icons/'
import { ContentCopyIcon } from '@redesign-system/material-icons/'
import { DeleteAlertIcon } from '@redesign-system/material-icons/'

import { ThemeProvider } from '@redesign-system/ui-core'
import { TabList } from './TabList'
import { Tabs } from './Tabs'
import { TabButton } from './TabButton'
import { TabButtonIcon } from './TabButtonIcon'
import { TabPanel } from './TabPanel'
import { useString } from '../../hooks/useString'

export default {
  title: 'Components/Organisms/Tabs',
  component: Tabs,
  subcomponents: {
    TabList,
    TabPanel,
    TabButton,
    TabButtonIcon,
  },
}

export const Default = () => {
  const { string: active, onClick } = useString('1')

  return (
    <ThemeProvider>
      <Tabs>
        <TabList>
          <TabButton
            title="Tab1"
            id="1"
            active={active === '1'}
            onClick={onClick}
          >
            Tab 1
          </TabButton>
          <TabButton
            title="Tab2"
            id="2"
            active={active === '2'}
            onClick={onClick}
          >
            Tab 2
          </TabButton>
          <TabButton
            title="Tab3"
            id="3"
            active={active === '3'}
            onClick={onClick}
          >
            Tab 3
          </TabButton>
        </TabList>

        <TabPanel active={active === '1'} padding={5} css="height: 100px">
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
        <TabPanel active={active === '2'} padding={5}>
          <h4>Tab 2</h4>
          <p>
            In eu mi bibendum neque. In ante metus dictum at. Senectus et netus
            et malesuada fames ac. Ac tortor dignissim convallis aenean et
            tortor at risus viverra. Pulvinar neque laoreet suspendisse interdum
            consectetur libero. Maecenas pharetra convallis posuere morbi leo.
          </p>
        </TabPanel>
        <TabPanel active={active === '3'} padding={5}>
          <h4>Tab 3</h4>
          <p>
            Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque.
            Dolor sit amet consectetur adipiscing elit pellentesque. Quisque
            sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in
            nulla posuere sollicitudin aliquam.
          </p>
        </TabPanel>
      </Tabs>
    </ThemeProvider>
  )
}
export const Icons = () => {
  const { string: active, onClick } = useString('1')

  return (
    <ThemeProvider>
      <Tabs align="TABS_ALIGN_LEFT">
        <TabList stacked size={3}>
          <TabButtonIcon
            title="Tab1"
            id="1"
            alt="home"
            icon={HomeIcon}
            active={active === '1'}
            onClick={onClick}
          />
          <TabButtonIcon
            title="Tab2"
            id="2"
            alt="copy"
            icon={ContentCopyIcon}
            active={active === '2'}
            onClick={onClick}
          />
          <TabButtonIcon
            title="Tab3"
            id="3"
            alt="delete"
            icon={DeleteAlertIcon}
            active={active === '3'}
            onClick={onClick}
          />
        </TabList>

        <TabPanel active={active === '1'} padding={5} css="height: 100px">
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
        <TabPanel active={active === '2'} padding={5}>
          <h4>Tab 2</h4>
          <p>
            In eu mi bibendum neque. In ante metus dictum at. Senectus et netus
            et malesuada fames ac. Ac tortor dignissim convallis aenean et
            tortor at risus viverra. Pulvinar neque laoreet suspendisse interdum
            consectetur libero. Maecenas pharetra convallis posuere morbi leo.
          </p>
        </TabPanel>
        <TabPanel active={active === '3'} padding={5}>
          <h4>Tab 3</h4>
          <p>
            Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque.
            Dolor sit amet consectetur adipiscing elit pellentesque. Quisque
            sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in
            nulla posuere sollicitudin aliquam.
          </p>
        </TabPanel>
      </Tabs>
    </ThemeProvider>
  )
}

export const Accordion = () => {
  const { string: active, onClick } = useString('1')

  return (
    <ThemeProvider>
      <Tabs>
        <div>
          <TabButton
            title="Item 1"
            id="1"
            active={active === '1'}
            onClick={onClick}
            stretch
            textAlign="left"
          >
            Item 1
          </TabButton>
          <TabPanel active={active === '1'} padding={5} css="height: 100px">
            <h4>Item 1</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a
              nisl at leo porta suscipit et vel diam. Maecenas venenatis
              consectetur tortor, quis fermentum orci tristique ut. Etiam
              tristique sollicitudin feugiat.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a
              nisl at leo porta suscipit et vel diam. Maecenas venenatis
              consectetur tortor, quis fermentum orci tristique ut. Etiam
              tristique sollicitudin feugiat.
            </p>
          </TabPanel>
        </div>

        <div>
          <TabButton
            title="Item 2"
            id="2"
            active={active === '2'}
            onClick={onClick}
            textAlign="left"
            stretch
          >
            Item 2
          </TabButton>
          <TabPanel active={active === '2'} padding={5}>
            <h4>Tab 2</h4>
            <p>
              In eu mi bibendum neque. In ante metus dictum at. Senectus et
              netus et malesuada fames ac. Ac tortor dignissim convallis aenean
              et tortor at risus viverra. Pulvinar neque laoreet suspendisse
              interdum consectetur libero. Maecenas pharetra convallis posuere
              morbi leo.
            </p>
          </TabPanel>
        </div>

        <div>
          <TabButton
            title="Item 3"
            id="3"
            active={active === '3'}
            onClick={onClick}
            textAlign="left"
            stretch
          >
            Item 3
          </TabButton>

          <TabPanel active={active === '3'} padding={5}>
            <h4>Item 3</h4>
            <p>
              Volutpat diam ut venenatis tellus in metus vulputate eu
              scelerisque. Dolor sit amet consectetur adipiscing elit
              pellentesque. Quisque sagittis purus sit amet volutpat consequat.
              Aliquam eleifend mi in nulla posuere sollicitudin aliquam.
            </p>
          </TabPanel>
        </div>
      </Tabs>
    </ThemeProvider>
  )
}
