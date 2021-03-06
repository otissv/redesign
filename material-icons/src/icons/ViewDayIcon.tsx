import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ViewDayIcon: FC<IconInterface> = function ViewDayIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewDayIcon ${className}`;
      return (
        <Icon alt="ViewDay" className={classNames} {...propsRest}>
          <path d="M2,3V6H21V3M20,8H3A1,1 0 0,0 2,9V15A1,1 0 0,0 3,16H20A1,1 0 0,0 21,15V9A1,1 0 0,0 20,8M2,21H21V18H2V21Z" />

        </Icon>
      );
    };
    ViewDayIcon.displayName = 'ViewDayIcon';
      