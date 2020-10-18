import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MagnifyMinusIcon: FC<IconInterface> = function MagnifyMinusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MagnifyMinusIcon ${className}`;
      return (
        <Icon alt="MagnifyMinus" className={classNames} {...propsRest}>
          <path d="M9,2A7,7 0 0,1 16,9C16,10.57 15.5,12 14.61,13.19L15.41,14H16L22,20L20,22L14,16V15.41L13.19,14.61C12,15.5 10.57,16 9,16A7,7 0 0,1 2,9A7,7 0 0,1 9,2M5,8V10H13V8H5Z" />

        </Icon>
      );
    };
    MagnifyMinusIcon.displayName = 'MagnifyMinusIcon';
      