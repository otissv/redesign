import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CellphoneArrowDownIcon: FC<IconInterface> = function CellphoneArrowDownIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CellphoneArrowDownIcon ${className}`;
      return (
        <Icon alt="CellphoneArrowDown" className={classNames} {...propsRest}>
          <path d="M17,1H7A2,2 0 0,0 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1M17,19H7V5H17V19M16,13H13V8H11V13H8L12,17L16,13Z" />

        </Icon>
      );
    };
    CellphoneArrowDownIcon.displayName = 'CellphoneArrowDownIcon';
      