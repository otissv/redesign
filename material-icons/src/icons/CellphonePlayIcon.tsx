import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CellphonePlayIcon: FC<IconInterface> = function CellphonePlayIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CellphonePlayIcon ${className}`;
      return (
        <Icon alt="CellphonePlay" className={classNames} {...propsRest}>
          <path d="M17 19H7V5H17M17 1H7C5.89 1 5 1.89 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.89 18.1 1 17 1M10 9V15L14 12L10 9Z" />

        </Icon>
      );
    };
    CellphonePlayIcon.displayName = 'CellphonePlayIcon';
      