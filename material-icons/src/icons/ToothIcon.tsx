import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ToothIcon: FC<IconInterface> = function ToothIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ToothIcon ${className}`;
      return (
        <Icon alt="Tooth" className={classNames} {...propsRest}>
          <path d="M7,2C4,2 2,5 2,8C2,10.11 3,13 4,14C5,15 6,22 8,22C12.54,22 10,15 12,15C14,15 11.46,22 16,22C18,22 19,15 20,14C21,13 22,10.11 22,8C22,5 20,2 17,2C14,2 14,3 12,3C10,3 10,2 7,2Z" />

        </Icon>
      );
    };
    ToothIcon.displayName = 'ToothIcon';
      