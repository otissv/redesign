import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlertBoxOutlineIcon: FC<IconInterface> = function AlertBoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlertBoxOutlineIcon ${className}`;
      return (
        <Icon alt="AlertBoxOutline" className={classNames} {...propsRest}>
          <path d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M11,15H13V17H11V15M11,7H13V13H11V7" />

        </Icon>
      );
    };
    AlertBoxOutlineIcon.displayName = 'AlertBoxOutlineIcon';
      