import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ImageFilterFramesIcon: FC<IconInterface> = function ImageFilterFramesIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ImageFilterFramesIcon ${className}`;
      return (
        <Icon alt="ImageFilterFrames" className={classNames} {...propsRest}>
          <path d="M18,8H6V18H18M20,20H4V6H8.5L12.04,2.5L15.5,6H20M20,4H16L12,0L8,4H4A2,2 0 0,0 2,6V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V6A2,2 0 0,0 20,4Z" />

        </Icon>
      );
    };
    ImageFilterFramesIcon.displayName = 'ImageFilterFramesIcon';
      