import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ViewGridOutlineIcon: FC<IconInterface> = function ViewGridOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewGridOutlineIcon ${className}`;
      return (
        <Icon alt="ViewGridOutline" className={classNames} {...propsRest}>
          <path d="M3 11H11V3H3M5 5H9V9H5M13 21H21V13H13M15 15H19V19H15M3 21H11V13H3M5 15H9V19H5M13 3V11H21V3M19 9H15V5H19Z" />

        </Icon>
      );
    };
    ViewGridOutlineIcon.displayName = 'ViewGridOutlineIcon';
      