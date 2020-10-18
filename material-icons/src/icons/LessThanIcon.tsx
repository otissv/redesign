import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const LessThanIcon: FC<IconInterface> = function LessThanIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LessThanIcon ${className}`;
      return (
        <Icon alt="LessThan" className={classNames} {...propsRest}>
          <path d="M18.5,4.14L19.5,5.86L8.97,12L19.5,18.14L18.5,19.86L5,12L18.5,4.14Z" />

        </Icon>
      );
    };
    LessThanIcon.displayName = 'LessThanIcon';
      