import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const StarIcon: FC<IconInterface> = function StarIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `StarIcon ${className}`;
      return (
        <Icon alt="Star" className={classNames} {...propsRest}>
          <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />

        </Icon>
      );
    };
    StarIcon.displayName = 'StarIcon';
      