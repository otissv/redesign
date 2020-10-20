import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CellphoneIcon: FC<IconInterface> = function CellphoneIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CellphoneIcon ${className}`;
      return (
        <Icon alt="Cellphone" className={classNames} {...propsRest}>
          <path d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z" />

        </Icon>
      );
    };
    CellphoneIcon.displayName = 'CellphoneIcon';
      