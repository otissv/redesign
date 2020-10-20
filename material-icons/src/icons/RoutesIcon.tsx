import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RoutesIcon: FC<IconInterface> = function RoutesIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RoutesIcon ${className}`;
      return (
        <Icon alt="Routes" className={classNames} {...propsRest}>
          <path d="M11,10H5L3,8L5,6H11V3L12,2L13,3V4H19L21,6L19,8H13V10H19L21,12L19,14H13V20A2,2 0 0,1 15,22H9A2,2 0 0,1 11,20V10Z" />

        </Icon>
      );
    };
    RoutesIcon.displayName = 'RoutesIcon';
      