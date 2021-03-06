import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const Numeric1BoxMultipleIcon: FC<IconInterface> = function Numeric1BoxMultipleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric1BoxMultipleIcon ${className}`;
      return (
        <Icon alt="Numeric1BoxMultiple" className={classNames} {...propsRest}>
          <path d="M3,5V21H19V23H3A2,2 0 0,1 1,21V5H3M21,1A2,2 0 0,1 23,3V17A2,2 0 0,1 21,19H7A2,2 0 0,1 5,17V3A2,2 0 0,1 7,1H21M14,15H16V5H12V7H14V15Z" />

        </Icon>
      );
    };
    Numeric1BoxMultipleIcon.displayName = 'Numeric1BoxMultipleIcon';
      