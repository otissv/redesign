import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CellphoneTextIcon: FC<IconInterface> = function CellphoneTextIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CellphoneTextIcon ${className}`;
      return (
        <Icon alt="CellphoneText" className={classNames} {...propsRest}>
          <path d="M17,19V5H7V19H17M17,1A2,2 0 0,1 19,3V21A2,2 0 0,1 17,23H7C5.89,23 5,22.1 5,21V3C5,1.89 5.89,1 7,1H17M9,7H15V9H9V7M9,11H13V13H9V11Z" />

        </Icon>
      );
    };
    CellphoneTextIcon.displayName = 'CellphoneTextIcon';
      