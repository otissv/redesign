import React, { FC, useMemo } from 'react'

import { ImgInterface } from './img.types'
import { Base, useTheme } from '@redesign/ui-core'

import { imgTheme, imgSizeTheme } from './img.theme'

export const Img: FC<ImgInterface> = function Img({
  as = 'img',
  children,
  className = '',
  css = '',
  ...propsRest
}: ImgInterface) {
  // componentDidMount() {
  //   // this.element = helpers.getElement(this.props.kitid);
  //   // this.updateImg(this.element);
  //   // window.addEventListener('resize', this.updateImg);
  // }

  // componentWillUnmount() {
  //   // window.removeEventListener('resize', this.updateImg);
  // }

  // updateImg() {
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
  const classNames = useMemo(() => `Img ${className}`, [className])
  const cssList: any = useMemo(() => [imgTheme, imgSizeTheme, css], [
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

Img.displayName = 'Img'
