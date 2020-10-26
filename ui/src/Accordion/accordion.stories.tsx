import React from 'react'
import { ThemeProvider } from '@redesign-system/ui-core'

import { Accordion } from './Accordion'
import { AccordionButton } from './AccordionButton'
import { AccordionContent } from './AccordionContent'
import { AccordionItem } from './AccordionItem'

import { useString } from '../useString'

export default {
  title: 'Components/Accordion',
  component: Accordion,
}

export const Default = () => {
  const { string: active, onClick } = useString()
  return (
    <ThemeProvider>
      <Accordion>
        <AccordionItem>
          <AccordionButton
            title="Item 1"
            id="1"
            active={active === '1'}
            onClick={onClick}
            textAlign="left"
          >
            Item 1
          </AccordionButton>
          <AccordionContent
            active={active === '1'}
            padding={5}
            css="height: 100px"
            overflow="hidden auto"
          >
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
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton
            title="Item 2"
            id="2"
            active={active === '2'}
            onClick={onClick}
            textAlign="left"
          >
            Item 2
          </AccordionButton>
          <AccordionContent
            active={active === '2'}
            padding={5}
            overflow="hidden auto"
          >
            <h4>Item 2</h4>
            <p>
              In eu mi bibendum neque. In ante metus dictum at. Senectus et
              netus et malesuada fames ac. Ac tortor dignissim convallis aenean
              et tortor at risus viverra. Pulvinar neque laoreet suspendisse
              interdum consectetur libero. Maecenas pharetra convallis posuere
              morbi leo.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton
            title="Item 3"
            id="3"
            active={active === '3'}
            onClick={onClick}
            textAlign="left"
          >
            Item 3
          </AccordionButton>
          <AccordionContent
            active={active === '3'}
            padding={5}
            overflow="hidden auto"
          >
            <h4>Item 3</h4>
            <p>
              Volutpat diam ut venenatis tellus in metus vulputate eu
              scelerisque. Dolor sit amet consectetur adipiscing elit
              pellentesque. Quisque sagittis purus sit amet volutpat consequat.
              Aliquam eleifend mi in nulla posuere sollicitudin aliquam.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </ThemeProvider>
  )
}
