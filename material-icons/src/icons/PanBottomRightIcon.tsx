import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PanBottomRightIcon: FC<IconInterface> = function PanBottomRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PanBottomRightIcon ${className}`;
      return (
        <Icon alt="PanBottomRight" className={classNames} {...propsRest}>
          <path d="M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M13,18.65L18.65,13L19,19L13,18.65Z" />

        </Icon>
      );
    };
    PanBottomRightIcon.displayName = 'PanBottomRightIcon';
      