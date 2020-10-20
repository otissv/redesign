import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PailOutlineIcon: FC<IconInterface> = function PailOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PailOutlineIcon ${className}`;
      return (
        <Icon alt="PailOutline" className={classNames} {...propsRest}>
          <path d="M11.5 7.63C11.97 7.35 12.58 7.5 12.86 8C13.14 8.47 12.97 9.09 12.5 9.36L4.27 14.11C3.79 14.39 3.18 14.23 2.9 13.75S2.79 12.66 3.27 12.38L11.5 7.63M3 4V6H4L4.65 9.27L6.5 8.22L6.04 6H17.96L15.36 19H8.64L7.73 14.43L5.9 15.5L7 21H17L20 6H21V4H3Z" />

        </Icon>
      );
    };
    PailOutlineIcon.displayName = 'PailOutlineIcon';
      