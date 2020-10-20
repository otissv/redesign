import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ImageMultipleIcon: FC<IconInterface> = function ImageMultipleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ImageMultipleIcon ${className}`;
      return (
        <Icon alt="ImageMultiple" className={classNames} {...propsRest}>
          <path d="M22,16V4A2,2 0 0,0 20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16M11,12L13.03,14.71L16,11L20,16H8M2,6V20A2,2 0 0,0 4,22H18V20H4V6" />

        </Icon>
      );
    };
    ImageMultipleIcon.displayName = 'ImageMultipleIcon';
      