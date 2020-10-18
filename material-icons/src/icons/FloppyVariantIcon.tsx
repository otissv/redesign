import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FloppyVariantIcon: FC<IconInterface> = function FloppyVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FloppyVariantIcon ${className}`;
      return (
        <Icon alt="FloppyVariant" className={classNames} {...propsRest}>
          <path d="M3,3V21H21V3H3M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,15A1,1 0 0,1 13,16V19A1,1 0 0,1 12,20A1,1 0 0,1 11,19V16A1,1 0 0,1 12,15Z" />

        </Icon>
      );
    };
    FloppyVariantIcon.displayName = 'FloppyVariantIcon';
      