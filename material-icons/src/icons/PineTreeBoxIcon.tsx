import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PineTreeBoxIcon: FC<IconInterface> = function PineTreeBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PineTreeBoxIcon ${className}`;
      return (
        <Icon alt="PineTreeBox" className={classNames} {...propsRest}>
          <path d="M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V4A2,2 0 0,1 4,2M11,19H13V17H18L14,13H17L13,9H16L12,5L8,9H11L7,13H10L6,17H11V19Z" />

        </Icon>
      );
    };
    PineTreeBoxIcon.displayName = 'PineTreeBoxIcon';
      