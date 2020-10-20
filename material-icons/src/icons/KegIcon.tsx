import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const KegIcon: FC<IconInterface> = function KegIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `KegIcon ${className}`;
      return (
        <Icon alt="Keg" className={classNames} {...propsRest}>
          <path d="M5,22V20H6V16H5V14H6V11H5V7H11V3H10V2H11L13,2H14V3H13V7H19V11H18V14H19V16H18V20H19V22H5M17,9A1,1 0 0,0 16,8H14A1,1 0 0,0 13,9A1,1 0 0,0 14,10H16A1,1 0 0,0 17,9Z" />

        </Icon>
      );
    };
    KegIcon.displayName = 'KegIcon';
      