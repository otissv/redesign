import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const EjectOutlineIcon: FC<IconInterface> = function EjectOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `EjectOutlineIcon ${className}`;
      return (
        <Icon alt="EjectOutline" className={classNames} {...propsRest}>
          <path d="M5,17H19V19H5V17M12,5L5.33,15H18.67L12,5M12,8.6L14.93,13H9.07L12,8.6Z" />

        </Icon>
      );
    };
    EjectOutlineIcon.displayName = 'EjectOutlineIcon';
      