import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const GifIcon: FC<IconInterface> = function GifIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GifIcon ${className}`;
      return (
        <Icon alt="Gif" className={classNames} {...propsRest}>
          <path d="M11,8H13V16H11V8M7.67,8H4.33C3.53,8 3,8.67 3,9.33V14.67C3,15.33 3.53,16 4.33,16H7.67C8.47,16 9,15.33 9,14.67V12H7V14H5V10H9V9.33C9,8.67 8.47,8 7.67,8M21,10V8H15V16H17V14H19.5V12H17V10H21Z" />

        </Icon>
      );
    };
    GifIcon.displayName = 'GifIcon';
      