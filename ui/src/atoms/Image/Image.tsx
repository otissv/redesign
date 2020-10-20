import React, { FC } from 'react'

import { ImageInterface } from './Image.types'
import { Base, useTheme } from '@redesign-system/ui-core'

import { imgTheme, imgSizeTheme } from './Image.theme'

export const Image: FC<ImageInterface> = function Image({
  as = 'img',
  children,
  className = '',
  css = '',
  ...propsRest
}: ImageInterface) {
  // componentDidMount() {
  //   // this.element = helpers.getElement(this.props.kitid);
  //   // this.updateImage(this.element);
  //   // window.addEventListener('resize', this.updateImage);
  // }

  // componentWillUnmount() {
  //   // window.removeEventListener('resize', this.updateImage);
  // }

  // updateImage() {
  //   // const props = this.props;
  //   // const element = this.element;
  //   // let screen = helpers.breakpoints().screen;
  //   // let locked = false;
  //   // if (!locked) {
  //   //   const updateElement = (media) => {
  //   //     if (props.cover) {
  //   //       element.style.backgroundImage = props[media].src  `url(${props[media].src})` : `url(${props.src})`;
  //   //     } else {
  //   //       element.src = props[media].src || props.src;
  //   //       element.alt = props[media].alt || props.alt;
  //   //     }
  //   //     element.style.width = props[media].width || props.width;
  //   //     element.style.height = props[media].height || props.height;
  //   //   };
  //   //   if (props.small || props.medium || props.large || props.xlarge) {
  //   //     if (screen.small) {
  //   //       updateElement('small');
  //   //     } else if (screen.medium) {
  //   //       updateElement('medium');
  //   //     } else if (screen.large) {
  //   //       updateElement('large');
  //   //     } else if (screen.xlarge) {
  //   //       updateElement('xlarge');
  //   //     }
  //   //   }
  //   // }
  // }
  const { theme } = useTheme()
  const classNames = `Image ${className}`
  const cssList: any = React.useMemo(() => [imgTheme, imgSizeTheme, css], [
    imgTheme,
    imgSizeTheme,
    css,
  ])

  return (
    <Base
      as={as}
      theme={theme}
      className={classNames}
      css={cssList}
      {...propsRest}
    />
  )
}

Image.displayName = 'Image'
