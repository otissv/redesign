import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PaletteAdvancedIcon: FC<IconInterface> = function PaletteAdvancedIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PaletteAdvancedIcon ${className}`;
      return (
        <Icon alt="PaletteAdvanced" className={classNames} {...propsRest}>
          <path d="M22,22H10V20H22V22M2,22V20H9V22H2M18,18V10H22V18H18M18,3H22V9H18V3M2,18V3H16V18H2M9,14.56A3,3 0 0,0 12,11.56C12,9.56 9,6.19 9,6.19C9,6.19 6,9.56 6,11.56A3,3 0 0,0 9,14.56Z" />

        </Icon>
      );
    };
    PaletteAdvancedIcon.displayName = 'PaletteAdvancedIcon';
      