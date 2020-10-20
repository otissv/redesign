import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RotateLeftVariantIcon: FC<IconInterface> = function RotateLeftVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RotateLeftVariantIcon ${className}`;
      return (
        <Icon alt="RotateLeftVariant" className={classNames} {...propsRest}>
          <path d="M4,2H7A2,2 0 0,1 9,4V20A2,2 0 0,1 7,22H4A2,2 0 0,1 2,20V4A2,2 0 0,1 4,2M20,15A2,2 0 0,1 22,17V20A2,2 0 0,1 20,22H11V15H20M14,4A8,8 0 0,1 22,12L21.94,13H19.92L20,12A6,6 0 0,0 14,6V9L10,5L14,1V4Z" />

        </Icon>
      );
    };
    RotateLeftVariantIcon.displayName = 'RotateLeftVariantIcon';
      