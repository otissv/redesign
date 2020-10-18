import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PageLayoutSidebarRightIcon: FC<IconInterface> = function PageLayoutSidebarRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PageLayoutSidebarRightIcon ${className}`;
      return (
        <Icon alt="PageLayoutSidebarRight" className={classNames} {...propsRest}>
          <path d="M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M14,8V16H18V8H14Z" />

        </Icon>
      );
    };
    PageLayoutSidebarRightIcon.displayName = 'PageLayoutSidebarRightIcon';
      