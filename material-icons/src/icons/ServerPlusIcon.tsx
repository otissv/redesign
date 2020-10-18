import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ServerPlusIcon: FC<IconInterface> = function ServerPlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ServerPlusIcon ${className}`;
      return (
        <Icon alt="ServerPlus" className={classNames} {...propsRest}>
          <path d="M4,4H20A1,1 0 0,1 21,5V9A1,1 0 0,1 20,10H4A1,1 0 0,1 3,9V5A1,1 0 0,1 4,4M9,8H10V6H9V8M5,6V8H7V6H5M8,16H11V13H13V16H16V18H13V21H11V18H8V16Z" />

        </Icon>
      );
    };
    ServerPlusIcon.displayName = 'ServerPlusIcon';
      