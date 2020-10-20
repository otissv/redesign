import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SdIcon: FC<IconInterface> = function SdIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SdIcon ${className}`;
      return (
        <Icon alt="Sd" className={classNames} {...propsRest}>
          <path d="M18,8H16V4H18M15,8H13V4H15M12,8H10V4H12M18,2H10L4,8V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V4A2,2 0 0,0 18,2Z" />

        </Icon>
      );
    };
    SdIcon.displayName = 'SdIcon';
      