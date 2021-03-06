import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PageLayoutFooterIcon: FC<IconInterface> = function PageLayoutFooterIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PageLayoutFooterIcon ${className}`;
      return (
        <Icon alt="PageLayoutFooter" className={classNames} {...propsRest}>
          <path d="M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M6,16V20H18V16H6Z" />

        </Icon>
      );
    };
    PageLayoutFooterIcon.displayName = 'PageLayoutFooterIcon';
      