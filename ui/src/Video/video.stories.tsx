import React from 'react'
import { ThemeProvider } from '@redesign-system/ui-core'

import { Video } from './Video'

export default {
  title: 'Components/Video',
  component: Video,
}

export const Default = () => (
  <ThemeProvider>
    <Video controls>
      <source
        src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
        type="video/mp4"
      />
      <source src="http://clips.vorwaerts-gmbh.de/VfE.webm" type="video/webm" />
      <source src="http://clips.vorwaerts-gmbh.de/VfE.ogv" type="video/ogg" />
    </Video>
  </ThemeProvider>
)

export const Autoplay = () => (
  <ThemeProvider>
    <Video autoPlay muted>
      <source
        src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
        type="video/mp4"
      />
      <source src="http://clips.vorwaerts-gmbh.de/VfE.webm" type="video/webm" />
      <source src="http://clips.vorwaerts-gmbh.de/VfE.ogv" type="video/ogg" />
    </Video>
  </ThemeProvider>
)

export const Embeded = () => (
  <ThemeProvider>
    <Video
      embeded
      allowFullScreen
      height="315"
      width="560"
      src="https://www.youtube-nocookie.com/embed/YE7VzlLtp-4?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1"
    />
  </ThemeProvider>
)
