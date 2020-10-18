import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const WallIcon: FC<IconInterface> = function WallIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `WallIcon ${className}`;
      return (
        <Icon alt="Wall" className={classNames} {...propsRest}>
          <path d="M3,16H12V21H3V16M2,10H8V15H2V10M9,10H15V15H9V10M16,10H22V15H16V10M13,16H21V21H13V16M3,4H11V9H3V4M12,4H21V9H12V4Z" />

        </Icon>
      );
    };
    WallIcon.displayName = 'WallIcon';
      