import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CircleIcon: FC<IconInterface> = function CircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CircleIcon ${className}`;
      return (
        <Icon alt="Circle" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />

        </Icon>
      );
    };
    CircleIcon.displayName = 'CircleIcon';
      