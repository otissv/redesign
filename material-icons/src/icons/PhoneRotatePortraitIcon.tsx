import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PhoneRotatePortraitIcon: FC<IconInterface> = function PhoneRotatePortraitIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PhoneRotatePortraitIcon ${className}`;
      return (
        <Icon alt="PhoneRotatePortrait" className={classNames} {...propsRest}>
          <path d="M9,1H3A2,2 0 0,0 1,3V16A2,2 0 0,0 3,18H4V15H3V3H9V11H11V3A2,2 0 0,0 9,1M23,21V15A2,2 0 0,0 21,13H8A2,2 0 0,0 6,15V21A2,2 0 0,0 8,23H21A2,2 0 0,0 23,21M9,21V15H21V21H9M23,10H21.5C21.5,7 19.69,4.27 16.92,3.09L16,5L14,1A9,9 0 0,1 23,10Z" />

        </Icon>
      );
    };
    PhoneRotatePortraitIcon.displayName = 'PhoneRotatePortraitIcon';
      