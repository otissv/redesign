import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const LedVariantOnIcon: FC<IconInterface> = function LedVariantOnIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LedVariantOnIcon ${className}`;
      return (
        <Icon alt="LedVariantOn" className={classNames} {...propsRest}>
          <path d="M12,3A4,4 0 0,0 8,7V13H6V15H9V21H11V15H13V21H15V15H18V13H16V7A4,4 0 0,0 12,3Z" />

        </Icon>
      );
    };
    LedVariantOnIcon.displayName = 'LedVariantOnIcon';
      