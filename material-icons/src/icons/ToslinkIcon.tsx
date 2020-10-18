import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ToslinkIcon: FC<IconInterface> = function ToslinkIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ToslinkIcon ${className}`;
      return (
        <Icon alt="Toslink" className={classNames} {...propsRest}>
          <path d="M20 10V7L17 4H7L4 7V10C2.9 10 2 10.9 2 12S2.9 14 4 14V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V14C21.11 14 22 13.11 22 12S21.11 10 20 10M12 16C9.79 16 8 14.21 8 12S9.79 8 12 8 16 9.79 16 12 14.21 16 12 16M14 12C14 13.11 13.11 14 12 14S10 13.11 10 12 10.9 10 12 10 14 10.9 14 12Z" />

        </Icon>
      );
    };
    ToslinkIcon.displayName = 'ToslinkIcon';
      