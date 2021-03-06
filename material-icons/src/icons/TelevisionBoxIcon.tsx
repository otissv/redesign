import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TelevisionBoxIcon: FC<IconInterface> = function TelevisionBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TelevisionBoxIcon ${className}`;
      return (
        <Icon alt="TelevisionBox" className={classNames} {...propsRest}>
          <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M16,16L19,8H16.5L15,12.5L13.5,8H5V10H8V16H10V10H11.77L14,16H16Z" />

        </Icon>
      );
    };
    TelevisionBoxIcon.displayName = 'TelevisionBoxIcon';
      