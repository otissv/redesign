import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ViewDayOutlineIcon: FC<IconInterface> = function ViewDayOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewDayOutlineIcon ${className}`;
      return (
        <Icon alt="ViewDayOutline" className={classNames} {...propsRest}>
          <path d="M21 18H2V20H21V18M19 10V14H4V10H19M20 8H3C2.45 8 2 8.45 2 9V15C2 15.55 2.45 16 3 16H20C20.55 16 21 15.55 21 15V9C21 8.45 20.55 8 20 8M21 4H2V6H21V4Z" />

        </Icon>
      );
    };
    ViewDayOutlineIcon.displayName = 'ViewDayOutlineIcon';
      