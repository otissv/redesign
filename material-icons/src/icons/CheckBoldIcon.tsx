import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CheckBoldIcon: FC<IconInterface> = function CheckBoldIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CheckBoldIcon ${className}`;
      return (
        <Icon alt="CheckBold" className={classNames} {...propsRest}>
          <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />

        </Icon>
      );
    };
    CheckBoldIcon.displayName = 'CheckBoldIcon';
      