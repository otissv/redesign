import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const GenderMaleFemaleIcon: FC<IconInterface> = function GenderMaleFemaleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GenderMaleFemaleIcon ${className}`;
      return (
        <Icon alt="GenderMaleFemale" className={classNames} {...propsRest}>
          <path d="M17.58,4H14V2H21V9H19V5.41L15.17,9.24C15.69,10.03 16,11 16,12C16,14.42 14.28,16.44 12,16.9V19H14V21H12V23H10V21H8V19H10V16.9C7.72,16.44 6,14.42 6,12A5,5 0 0,1 11,7C12,7 12.96,7.3 13.75,7.83L17.58,4M11,9A3,3 0 0,0 8,12A3,3 0 0,0 11,15A3,3 0 0,0 14,12A3,3 0 0,0 11,9Z" />

        </Icon>
      );
    };
    GenderMaleFemaleIcon.displayName = 'GenderMaleFemaleIcon';
      