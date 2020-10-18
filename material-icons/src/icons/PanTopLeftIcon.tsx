import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PanTopLeftIcon: FC<IconInterface> = function PanTopLeftIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PanTopLeftIcon ${className}`;
      return (
        <Icon alt="PanTopLeft" className={classNames} {...propsRest}>
          <path d="M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M11,5.35L5.35,11L5,5L11,5.35Z" />

        </Icon>
      );
    };
    PanTopLeftIcon.displayName = 'PanTopLeftIcon';
      