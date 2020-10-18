import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CircleHalfIcon: FC<IconInterface> = function CircleHalfIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CircleHalfIcon ${className}`;
      return (
        <Icon alt="CircleHalf" className={classNames} {...propsRest}>
          <path d="M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22V2Z" />

        </Icon>
      );
    };
    CircleHalfIcon.displayName = 'CircleHalfIcon';
      