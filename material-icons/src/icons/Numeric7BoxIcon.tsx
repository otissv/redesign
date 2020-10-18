import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const Numeric7BoxIcon: FC<IconInterface> = function Numeric7BoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric7BoxIcon ${className}`;
      return (
        <Icon alt="Numeric7Box" className={classNames} {...propsRest}>
          <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M11,17L15,9V7H9V9H13L9,17H11Z" />

        </Icon>
      );
    };
    Numeric7BoxIcon.displayName = 'Numeric7BoxIcon';
      