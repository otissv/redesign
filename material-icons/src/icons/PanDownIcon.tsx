import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PanDownIcon: FC<IconInterface> = function PanDownIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PanDownIcon ${className}`;
      return (
        <Icon alt="PanDown" className={classNames} {...propsRest}>
          <path d="M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M8,17L12,21.5L16,17H8Z" />

        </Icon>
      );
    };
    PanDownIcon.displayName = 'PanDownIcon';
      