import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CheckboxBlankOutlineIcon: FC<IconInterface> = function CheckboxBlankOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CheckboxBlankOutlineIcon ${className}`;
      return (
        <Icon alt="CheckboxBlankOutline" className={classNames} {...propsRest}>
          <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" />

        </Icon>
      );
    };
    CheckboxBlankOutlineIcon.displayName = 'CheckboxBlankOutlineIcon';
      