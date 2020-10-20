import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ImagePlusIcon: FC<IconInterface> = function ImagePlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ImagePlusIcon ${className}`;
      return (
        <Icon alt="ImagePlus" className={classNames} {...propsRest}>
          <path d="M5,3A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H14.09C14.03,20.67 14,20.34 14,20C14,19.32 14.12,18.64 14.35,18H5L8.5,13.5L11,16.5L14.5,12L16.73,14.97C17.7,14.34 18.84,14 20,14C20.34,14 20.67,14.03 21,14.09V5C21,3.89 20.1,3 19,3H5M19,16V19H16V21H19V24H21V21H24V19H21V16H19Z" />

        </Icon>
      );
    };
    ImagePlusIcon.displayName = 'ImagePlusIcon';
      