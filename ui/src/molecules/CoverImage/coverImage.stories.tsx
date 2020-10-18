import React from 'react'
import { ThemeProvider } from '@redesign/ui-core'

import { CoverImage } from './CoverImage'

export default {
  title: 'Components/Molecules/CoverImage',
  component: CoverImage,
}

export const Default = () => (
  <ThemeProvider>
    <CoverImage
      height="300px"
      src="https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    >
      {' '}
    </CoverImage>
  </ThemeProvider>
)

export const Overlay = () => (
  <ThemeProvider>
    <CoverImage
      height="300px"
      overlay="rgba(0, 0, 0, 0.5)"
      src="https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    >
      <p>Overlay with text</p>
    </CoverImage>
  </ThemeProvider>
)

export const Caption = () => (
  <ThemeProvider>
    <CoverImage
      height="300px"
      overlay="rgba(0, 0, 0, 0.5)"
      caption="this is a caption"
      src="https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    />
  </ThemeProvider>
)

export const Parallax = () => (
  <ThemeProvider>
    <CoverImage
      height="300px"
      overlay="rgba(0, 0, 0, 0.5)"
      parallax
      src="https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    />
  </ThemeProvider>
)
