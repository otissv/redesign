import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const IframeIcon: FC<IconInterface> = function IframeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `IframeIcon ${className}`;
      return (
        <Icon alt="Iframe" className={classNames} {...propsRest}>
          <path d="M21,2H3A2,2 0 0,0 1,4V20A2,2 0 0,0 3,22H21A2,2 0 0,0 23,20V4A2,2 0 0,0 21,2M11,17.5L9.5,19L5,14.5L9.5,10L11,11.5L8,14.5L11,17.5M14.5,19L13,17.5L16,14.5L13,11.5L14.5,10L19,14.5L14.5,19M21,7H3V4H21V7Z" />

        </Icon>
      );
    };
    IframeIcon.displayName = 'IframeIcon';
      