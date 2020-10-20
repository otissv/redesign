import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ViewListOutlineIcon: FC<IconInterface> = function ViewListOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewListOutlineIcon ${className}`;
      return (
        <Icon alt="ViewListOutline" className={classNames} {...propsRest}>
          <path d="M3 5V19H20V5H3M7 7V9H5V7H7M5 13V11H7V13H5M5 15H7V17H5V15M18 17H9V15H18V17M18 13H9V11H18V13M18 9H9V7H18V9Z" />

        </Icon>
      );
    };
    ViewListOutlineIcon.displayName = 'ViewListOutlineIcon';
      