import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const UfoOutlineIcon: FC<IconInterface> = function UfoOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `UfoOutlineIcon ${className}`;
      return (
        <Icon alt="UfoOutline" className={classNames} {...propsRest}>
          <path d="M17 10.54C16.78 7.44 14.63 5 12 5S7.22 7.44 7 10.54C4 11.23 2 12.5 2 14C2 16.21 6.5 18 12 18S22 16.21 22 14C22 12.5 20 11.23 17 10.54M14.93 11.84C13.03 12.05 10.97 12.05 9.07 11.84C9.03 11.56 9 11.28 9 11C9 8.8 10.35 7 12 7S15 8.8 15 11C15 11.28 15 11.56 14.93 11.84Z" />

        </Icon>
      );
    };
    UfoOutlineIcon.displayName = 'UfoOutlineIcon';
      