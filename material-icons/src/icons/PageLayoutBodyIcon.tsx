import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PageLayoutBodyIcon: FC<IconInterface> = function PageLayoutBodyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PageLayoutBodyIcon ${className}`;
      return (
        <Icon alt="PageLayoutBody" className={classNames} {...propsRest}>
          <path d="M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M6,8V16H18V8H6Z" />

        </Icon>
      );
    };
    PageLayoutBodyIcon.displayName = 'PageLayoutBodyIcon';
      