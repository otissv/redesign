import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PanTopRightIcon: FC<IconInterface> = function PanTopRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PanTopRightIcon ${className}`;
      return (
        <Icon alt="PanTopRight" className={classNames} {...propsRest}>
          <path d="M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M18.65,11L13,5.35L19,5L18.65,11Z" />

        </Icon>
      );
    };
    PanTopRightIcon.displayName = 'PanTopRightIcon';
      