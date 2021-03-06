import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const DiscIcon: FC<IconInterface> = function DiscIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DiscIcon ${className}`;
      return (
        <Icon alt="Disc" className={classNames} {...propsRest}>
          <path d="M12,14C10.89,14 10,13.1 10,12C10,10.89 10.89,10 12,10C13.11,10 14,10.89 14,12A2,2 0 0,1 12,14M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />

        </Icon>
      );
    };
    DiscIcon.displayName = 'DiscIcon';
      