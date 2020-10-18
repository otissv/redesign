import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const LockPlusIcon: FC<IconInterface> = function LockPlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LockPlusIcon ${className}`;
      return (
        <Icon alt="LockPlus" className={classNames} {...propsRest}>
          <path d="M18,8H17V6A5,5 0 0,0 12,1A5,5 0 0,0 7,6V8H6A2,2 0 0,0 4,10V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V10A2,2 0 0,0 18,8M8.9,6C8.9,4.29 10.29,2.9 12,2.9C13.71,2.9 15.1,4.29 15.1,6V8H8.9V6M16,16H13V19H11V16H8V14H11V11H13V14H16V16Z" />

        </Icon>
      );
    };
    LockPlusIcon.displayName = 'LockPlusIcon';
      