import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const HumanPregnantIcon: FC<IconInterface> = function HumanPregnantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HumanPregnantIcon ${className}`;
      return (
        <Icon alt="HumanPregnant" className={classNames} {...propsRest}>
          <path d="M9,4C9,2.89 9.89,2 11,2C12.11,2 13,2.89 13,4C13,5.11 12.11,6 11,6C9.89,6 9,5.11 9,4M16,13C16,11.66 15.17,10.5 14,10A3,3 0 0,0 11,7A3,3 0 0,0 8,10V17H10V22H13V17H16V13Z" />

        </Icon>
      );
    };
    HumanPregnantIcon.displayName = 'HumanPregnantIcon';
      