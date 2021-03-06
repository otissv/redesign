import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const DotsHorizontalIcon: FC<IconInterface> = function DotsHorizontalIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DotsHorizontalIcon ${className}`;
      return (
        <Icon alt="DotsHorizontal" className={classNames} {...propsRest}>
          <path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" />

        </Icon>
      );
    };
    DotsHorizontalIcon.displayName = 'DotsHorizontalIcon';
      