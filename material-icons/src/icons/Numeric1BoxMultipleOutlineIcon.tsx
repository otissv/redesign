import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const Numeric1BoxMultipleOutlineIcon: FC<IconInterface> = function Numeric1BoxMultipleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric1BoxMultipleOutlineIcon ${className}`;
      return (
        <Icon alt="Numeric1BoxMultipleOutline" className={classNames} {...propsRest}>
          <path d="M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M14,15H16V5H12V7H14M3,5H1V21A2,2 0 0,0 3,23H19V21H3V5Z" />

        </Icon>
      );
    };
    Numeric1BoxMultipleOutlineIcon.displayName = 'Numeric1BoxMultipleOutlineIcon';
      