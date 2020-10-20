import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const UfoIcon: FC<IconInterface> = function UfoIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `UfoIcon ${className}`;
      return (
        <Icon alt="Ufo" className={classNames} {...propsRest}>
          <path d="M15.94 10.28C15.66 7.87 14 6 12 6S8.34 7.87 8.06 10.28C4.5 10.82 2 12.06 2 13.5C2 15.43 6.5 17 12 17S22 15.43 22 13.5C22 12.06 19.5 10.82 15.94 10.28Z" />

        </Icon>
      );
    };
    UfoIcon.displayName = 'UfoIcon';
      