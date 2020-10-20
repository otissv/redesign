import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PanVerticalIcon: FC<IconInterface> = function PanVerticalIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PanVerticalIcon ${className}`;
      return (
        <Icon alt="PanVertical" className={classNames} {...propsRest}>
          <path d="M12,2.5L8,7H16L12,2.5M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M8,17L12,21.5L16,17H8Z" />

        </Icon>
      );
    };
    PanVerticalIcon.displayName = 'PanVerticalIcon';
      