import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SailBoatIcon: FC<IconInterface> = function SailBoatIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SailBoatIcon ${className}`;
      return (
        <Icon alt="SailBoat" className={classNames} {...propsRest}>
          <path d="M14,3L5,14H14M3,16L6,21H18L21,16" />

        </Icon>
      );
    };
    SailBoatIcon.displayName = 'SailBoatIcon';
      