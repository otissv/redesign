import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const DownloadCircleIcon: FC<IconInterface> = function DownloadCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DownloadCircleIcon ${className}`;
      return (
        <Icon alt="DownloadCircle" className={classNames} {...propsRest}>
          <path d="M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M8 17H16V15H8V17M16 10H13.5V6H10.5V10H8L12 14L16 10Z" />

        </Icon>
      );
    };
    DownloadCircleIcon.displayName = 'DownloadCircleIcon';
      