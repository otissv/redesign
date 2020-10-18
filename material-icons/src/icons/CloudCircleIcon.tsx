import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CloudCircleIcon: FC<IconInterface> = function CloudCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CloudCircleIcon ${className}`;
      return (
        <Icon alt="CloudCircle" className={classNames} {...propsRest}>
          <path d="M16.5,16H8A3,3 0 0,1 5,13A3,3 0 0,1 8,10C8.05,10 8.09,10 8.14,10C8.58,8.28 10.13,7 12,7A4,4 0 0,1 16,11H16.5A2.5,2.5 0 0,1 19,13.5A2.5,2.5 0 0,1 16.5,16M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />

        </Icon>
      );
    };
    CloudCircleIcon.displayName = 'CloudCircleIcon';
      