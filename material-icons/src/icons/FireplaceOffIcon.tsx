import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FireplaceOffIcon: FC<IconInterface> = function FireplaceOffIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FireplaceOffIcon ${className}`;
      return (
        <Icon alt="FireplaceOff" className={classNames} {...propsRest}>
          <path d="M22,22H2V20H22V22M22,6H2V3H22V6M20,7V19H17V11C17,11 14.5,10 12,10C9.5,10 7,11 7,11V19H4V7H20Z" />

        </Icon>
      );
    };
    FireplaceOffIcon.displayName = 'FireplaceOffIcon';
      