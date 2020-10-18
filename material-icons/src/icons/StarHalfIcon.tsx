import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const StarHalfIcon: FC<IconInterface> = function StarHalfIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `StarHalfIcon ${className}`;
      return (
        <Icon alt="StarHalf" className={classNames} {...propsRest}>
          <path d="M12 2L9.19 8.62L2 9.24L7.45 13.97L5.82 21L12 17.27V2Z" />

        </Icon>
      );
    };
    StarHalfIcon.displayName = 'StarHalfIcon';
      