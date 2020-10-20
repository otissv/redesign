import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const IframeArrayIcon: FC<IconInterface> = function IframeArrayIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `IframeArrayIcon ${className}`;
      return (
        <Icon alt="IframeArray" className={classNames} {...propsRest}>
          <path d="M21 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H21C22.1 22 23 21.1 23 20V4C23 2.9 22.1 2 21 2M10 11H8V18H10V20H6V9H10V11M18 20H14V18H16V11H14V9H18V20M21 7H3V4H21V7Z" />

        </Icon>
      );
    };
    IframeArrayIcon.displayName = 'IframeArrayIcon';
      