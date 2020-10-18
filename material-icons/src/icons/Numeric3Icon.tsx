import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const Numeric3Icon: FC<IconInterface> = function Numeric3Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric3Icon ${className}`;
      return (
        <Icon alt="Numeric3" className={classNames} {...propsRest}>
          <path d="M15,15V13.5A1.5,1.5 0 0,0 13.5,12A1.5,1.5 0 0,0 15,10.5V9C15,7.89 14.1,7 13,7H9V9H13V11H11V13H13V15H9V17H13A2,2 0 0,0 15,15" />

        </Icon>
      );
    };
    Numeric3Icon.displayName = 'Numeric3Icon';
      