import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BedSingleIcon: FC<IconInterface> = function BedSingleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BedSingleIcon ${className}`;
      return (
        <Icon alt="BedSingle" className={classNames} {...propsRest}>
          <path d="M17 10V7C17 5.9 16.11 5 15 5H9C7.9 5 7 5.9 7 7V10C5.9 10 4.89 10.9 5 12V17H6.33L7 19H8L8.67 17H15.33L16 19H17L17.67 17H19V12C19 10.9 18.11 10 17 10M15 10H9V7H15Z" />

        </Icon>
      );
    };
    BedSingleIcon.displayName = 'BedSingleIcon';
      