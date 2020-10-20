import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const StarOffIcon: FC<IconInterface> = function StarOffIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `StarOffIcon ${className}`;
      return (
        <Icon alt="StarOff" className={classNames} {...propsRest}>
          <path d="M2,5.27L3.28,4L20,20.72L18.73,22L17.05,20.31L12,17.27L5.82,21L7.45,13.97L2,9.24L5.66,8.93L2,5.27M12,2L14.81,8.62L22,9.24L16.54,13.97L16.77,14.95L9.56,7.74L12,2Z" />

        </Icon>
      );
    };
    StarOffIcon.displayName = 'StarOffIcon';
      