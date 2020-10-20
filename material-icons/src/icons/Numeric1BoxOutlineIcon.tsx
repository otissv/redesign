import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const Numeric1BoxOutlineIcon: FC<IconInterface> = function Numeric1BoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric1BoxOutlineIcon ${className}`;
      return (
        <Icon alt="Numeric1BoxOutline" className={classNames} {...propsRest}>
          <path d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,17H14V7H10V9H12" />

        </Icon>
      );
    };
    Numeric1BoxOutlineIcon.displayName = 'Numeric1BoxOutlineIcon';
      