import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CheckOutlineIcon: FC<IconInterface> = function CheckOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CheckOutlineIcon ${className}`;
      return (
        <Icon alt="CheckOutline" className={classNames} {...propsRest}>
          <path d="M19.78,2.2L24,6.42L8.44,22L0,13.55L4.22,9.33L8.44,13.55L19.78,2.2M19.78,5L8.44,16.36L4.22,12.19L2.81,13.55L8.44,19.17L21.19,6.42L19.78,5Z" />

        </Icon>
      );
    };
    CheckOutlineIcon.displayName = 'CheckOutlineIcon';
      