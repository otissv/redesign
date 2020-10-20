import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CircleSmallIcon: FC<IconInterface> = function CircleSmallIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CircleSmallIcon ${className}`;
      return (
        <Icon alt="CircleSmall" className={classNames} {...propsRest}>
          <path d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" />

        </Icon>
      );
    };
    CircleSmallIcon.displayName = 'CircleSmallIcon';
      