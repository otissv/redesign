import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const KnifeIcon: FC<IconInterface> = function KnifeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `KnifeIcon ${className}`;
      return (
        <Icon alt="Knife" className={classNames} {...propsRest}>
          <path d="M20.62,2C23.97,7.61 12.47,20.15 12.47,20.15L9.6,17.28L4.91,22L2.77,19.86L20.62,2Z" />

        </Icon>
      );
    };
    KnifeIcon.displayName = 'KnifeIcon';
      