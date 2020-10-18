import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PlusThickIcon: FC<IconInterface> = function PlusThickIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PlusThickIcon ${className}`;
      return (
        <Icon alt="PlusThick" className={classNames} {...propsRest}>
          <path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" />

        </Icon>
      );
    };
    PlusThickIcon.displayName = 'PlusThickIcon';
      