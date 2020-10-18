import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const BadgeAccountIcon: FC<IconInterface> = function BadgeAccountIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BadgeAccountIcon ${className}`;
      return (
        <Icon alt="BadgeAccount" className={classNames} {...propsRest}>
          <path d="M17,3H14V6H10V3H7A2,2 0 0,0 5,5V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V5A2,2 0 0,0 17,3M12,8A2,2 0 0,1 14,10A2,2 0 0,1 12,12A2,2 0 0,1 10,10A2,2 0 0,1 12,8M16,16H8V15C8,13.67 10.67,13 12,13C13.33,13 16,13.67 16,15V16M13,5H11V1H13V5M16,19H8V18H16V19M12,21H8V20H12V21Z" />

        </Icon>
      );
    };
    BadgeAccountIcon.displayName = 'BadgeAccountIcon';
      