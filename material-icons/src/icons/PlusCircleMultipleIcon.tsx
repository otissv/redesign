import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PlusCircleMultipleIcon: FC<IconInterface> = function PlusCircleMultipleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PlusCircleMultipleIcon ${className}`;
      return (
        <Icon alt="PlusCircleMultiple" className={classNames} {...propsRest}>
          <path d="M2 12C2 9.2 3.6 6.8 6 5.7V3.5C2.5 4.8 0 8.1 0 12S2.5 19.2 6 20.5V18.3C3.6 17.2 2 14.8 2 12M15 3C10 3 6 7 6 12S10 21 15 21 24 17 24 12 20 3 15 3M20 13H16V17H14V13H10V11H14V7H16V11H20V13Z" />

        </Icon>
      );
    };
    PlusCircleMultipleIcon.displayName = 'PlusCircleMultipleIcon';
      