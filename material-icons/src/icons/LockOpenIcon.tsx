import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const LockOpenIcon: FC<IconInterface> = function LockOpenIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LockOpenIcon ${className}`;
      return (
        <Icon alt="LockOpen" className={classNames} {...propsRest}>
          <path d="M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10A2,2 0 0,1 6,8H15V6A3,3 0 0,0 12,3A3,3 0 0,0 9,6H7A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,17A2,2 0 0,0 14,15A2,2 0 0,0 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17Z" />

        </Icon>
      );
    };
    LockOpenIcon.displayName = 'LockOpenIcon';
      