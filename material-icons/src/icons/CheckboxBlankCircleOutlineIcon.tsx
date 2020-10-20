import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CheckboxBlankCircleOutlineIcon: FC<IconInterface> = function CheckboxBlankCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CheckboxBlankCircleOutlineIcon ${className}`;
      return (
        <Icon alt="CheckboxBlankCircleOutline" className={classNames} {...propsRest}>
          <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />

        </Icon>
      );
    };
    CheckboxBlankCircleOutlineIcon.displayName = 'CheckboxBlankCircleOutlineIcon';
      