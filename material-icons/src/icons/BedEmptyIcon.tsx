import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const BedEmptyIcon: FC<IconInterface> = function BedEmptyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BedEmptyIcon ${className}`;
      return (
        <Icon alt="BedEmpty" className={classNames} {...propsRest}>
          <path d="M19,7H5V14H3V5H1V20H3V17H21V20H23V11A4,4 0 0,0 19,7" />

        </Icon>
      );
    };
    BedEmptyIcon.displayName = 'BedEmptyIcon';
      