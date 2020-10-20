import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BadgeAccountHorizontalIcon: FC<IconInterface> = function BadgeAccountHorizontalIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BadgeAccountHorizontalIcon ${className}`;
      return (
        <Icon alt="BadgeAccountHorizontal" className={classNames} {...propsRest}>
          <path d="M22,4H14V7H10V4H2A2,2 0 0,0 0,6V20A2,2 0 0,0 2,22H22A2,2 0 0,0 24,20V6A2,2 0 0,0 22,4M8,9A2,2 0 0,1 10,11A2,2 0 0,1 8,13A2,2 0 0,1 6,11A2,2 0 0,1 8,9M12,17H4V16C4,14.67 6.67,14 8,14C9.33,14 12,14.67 12,16V17M20,18H14V16H20V18M20,14H14V12H20V14M20,10H14V8H20V10M13,6H11V2H13V6Z" />

        </Icon>
      );
    };
    BadgeAccountHorizontalIcon.displayName = 'BadgeAccountHorizontalIcon';
      