import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PlusMinusBoxIcon: FC<IconInterface> = function PlusMinusBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PlusMinusBoxIcon ${className}`;
      return (
        <Icon alt="PlusMinusBox" className={classNames} {...propsRest}>
          <path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5M11,6H13V9H16V11H13V14H11V11H8V9H11V6M8,16H16V18H8V16Z" />

        </Icon>
      );
    };
    PlusMinusBoxIcon.displayName = 'PlusMinusBoxIcon';
      