import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CheckboxBlankOffOutlineIcon: FC<IconInterface> = function CheckboxBlankOffOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CheckboxBlankOffOutlineIcon ${className}`;
      return (
        <Icon alt="CheckboxBlankOffOutline" className={classNames} {...propsRest}>
          <path d="M22.11 21.46L2.39 1.73L1.11 3L3 4.9V19C3 20.11 3.9 21 5 21H19.1L20.84 22.73L22.11 21.46M5 19V6.89L17.11 19H5M8.2 5L6.2 3H19C20.1 3 21 3.89 21 5V17.8L19 15.8V5H8.2Z" />

        </Icon>
      );
    };
    CheckboxBlankOffOutlineIcon.displayName = 'CheckboxBlankOffOutlineIcon';
      