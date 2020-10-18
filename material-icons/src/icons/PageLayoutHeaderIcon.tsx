import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PageLayoutHeaderIcon: FC<IconInterface> = function PageLayoutHeaderIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PageLayoutHeaderIcon ${className}`;
      return (
        <Icon alt="PageLayoutHeader" className={classNames} {...propsRest}>
          <path d="M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M6,4V8H18V4H6Z" />

        </Icon>
      );
    };
    PageLayoutHeaderIcon.displayName = 'PageLayoutHeaderIcon';
      