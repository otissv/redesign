import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const LastpassIcon: FC<IconInterface> = function LastpassIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LastpassIcon ${className}`;
      return (
        <Icon alt="Lastpass" className={classNames} {...propsRest}>
          <path d="M14,12A2,2 0 0,1 16,10A2,2 0 0,1 18,12A2,2 0 0,1 16,14A2,2 0 0,1 14,12M8,12A2,2 0 0,1 10,10A2,2 0 0,1 12,12A2,2 0 0,1 10,14A2,2 0 0,1 8,12M2,12A2,2 0 0,1 4,10A2,2 0 0,1 6,12A2,2 0 0,1 4,14A2,2 0 0,1 2,12M22,5H20V19H22V5Z" />

        </Icon>
      );
    };
    LastpassIcon.displayName = 'LastpassIcon';
      