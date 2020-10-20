import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BabyIcon: FC<IconInterface> = function BabyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BabyIcon ${className}`;
      return (
        <Icon alt="Baby" className={classNames} {...propsRest}>
          <path d="M18.5,4A2.5,2.5 0 0,1 21,6.5A2.5,2.5 0 0,1 18.5,9A2.5,2.5 0 0,1 16,6.5A2.5,2.5 0 0,1 18.5,4M4.5,20A1.5,1.5 0 0,1 3,18.5A1.5,1.5 0 0,1 4.5,17H11.5A1.5,1.5 0 0,1 13,18.5A1.5,1.5 0 0,1 11.5,20H4.5M16.09,19L14.69,15H11L6.75,10.75C6.75,10.75 9,8.25 12.5,8.25C15.5,8.25 15.85,9.25 16.06,9.87L18.92,18C19.2,18.78 18.78,19.64 18,19.92C17.22,20.19 16.36,19.78 16.09,19Z" />

        </Icon>
      );
    };
    BabyIcon.displayName = 'BabyIcon';
      