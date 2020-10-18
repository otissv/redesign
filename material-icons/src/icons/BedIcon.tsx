import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const BedIcon: FC<IconInterface> = function BedIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BedIcon ${className}`;
      return (
        <Icon alt="Bed" className={classNames} {...propsRest}>
          <path d="M19,7H11V14H3V5H1V20H3V17H21V20H23V11A4,4 0 0,0 19,7M7,13A3,3 0 0,0 10,10A3,3 0 0,0 7,7A3,3 0 0,0 4,10A3,3 0 0,0 7,13Z" />

        </Icon>
      );
    };
    BedIcon.displayName = 'BedIcon';
      