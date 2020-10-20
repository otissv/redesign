import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const GreaterThanIcon: FC<IconInterface> = function GreaterThanIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GreaterThanIcon ${className}`;
      return (
        <Icon alt="GreaterThan" className={classNames} {...propsRest}>
          <path d="M5.5,4.14L4.5,5.86L15,12L4.5,18.14L5.5,19.86L19,12L5.5,4.14Z" />

        </Icon>
      );
    };
    GreaterThanIcon.displayName = 'GreaterThanIcon';
      