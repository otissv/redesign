import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const IdCardIcon: FC<IconInterface> = function IdCardIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `IdCardIcon ${className}`;
      return (
        <Icon alt="IdCard" className={classNames} {...propsRest}>
          <path d="M4 4C2.89 4 2 4.89 2 6V18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4H4M4 6H20V10H4V6M4 12H8V14H4V12M10 12H20V14H10V12M4 16H14V18H4V16M16 16H20V18H16V16Z" />

        </Icon>
      );
    };
    IdCardIcon.displayName = 'IdCardIcon';
      