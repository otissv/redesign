import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BulletIcon: FC<IconInterface> = function BulletIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BulletIcon ${className}`;
      return (
        <Icon alt="Bullet" className={classNames} {...propsRest}>
          <path d="M14,22H10V21H14V22M13,10V7H11V10L10,11.5V20H14V11.5L13,10M12,2C12,2 11,3 11,5V6H13V5C13,5 13,3 12,2Z" />

        </Icon>
      );
    };
    BulletIcon.displayName = 'BulletIcon';
      