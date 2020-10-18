import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ShieldHalfIcon: FC<IconInterface> = function ShieldHalfIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ShieldHalfIcon ${className}`;
      return (
        <Icon alt="ShieldHalf" className={classNames} {...propsRest}>
          <path d="M12 1L3 5V11C3 16.5 6.8 21.7 12 23V1Z" />

        </Icon>
      );
    };
    ShieldHalfIcon.displayName = 'ShieldHalfIcon';
      