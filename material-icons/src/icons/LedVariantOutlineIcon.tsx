import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const LedVariantOutlineIcon: FC<IconInterface> = function LedVariantOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LedVariantOutlineIcon ${className}`;
      return (
        <Icon alt="LedVariantOutline" className={classNames} {...propsRest}>
          <path d="M12,3A4,4 0 0,0 8,7V13H6V15H9V21H11V15H13V21H15V15H18V13H16V7A4,4 0 0,0 12,3M12,5A2,2 0 0,1 14,7V12H10V7A2,2 0 0,1 12,5Z" />

        </Icon>
      );
    };
    LedVariantOutlineIcon.displayName = 'LedVariantOutlineIcon';
      