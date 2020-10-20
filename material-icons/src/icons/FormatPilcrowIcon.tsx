import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormatPilcrowIcon: FC<IconInterface> = function FormatPilcrowIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatPilcrowIcon ${className}`;
      return (
        <Icon alt="FormatPilcrow" className={classNames} {...propsRest}>
          <path d="M10,11A4,4 0 0,1 6,7A4,4 0 0,1 10,3H18V5H16V21H14V5H12V21H10V11Z" />

        </Icon>
      );
    };
    FormatPilcrowIcon.displayName = 'FormatPilcrowIcon';
      