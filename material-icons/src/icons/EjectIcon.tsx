import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const EjectIcon: FC<IconInterface> = function EjectIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `EjectIcon ${className}`;
      return (
        <Icon alt="Eject" className={classNames} {...propsRest}>
          <path d="M12,5L5.33,15H18.67M5,17H19V19H5V17Z" />

        </Icon>
      );
    };
    EjectIcon.displayName = 'EjectIcon';
      