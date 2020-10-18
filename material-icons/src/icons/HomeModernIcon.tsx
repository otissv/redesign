import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const HomeModernIcon: FC<IconInterface> = function HomeModernIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HomeModernIcon ${className}`;
      return (
        <Icon alt="HomeModern" className={classNames} {...propsRest}>
          <path d="M6,21V8A2,2 0 0,1 8,6L16,3V6A2,2 0 0,1 18,8V21H12V16H8V21H6M14,19H16V16H14V19M8,13H10V9H8V13M12,13H16V9H12V13Z" />

        </Icon>
      );
    };
    HomeModernIcon.displayName = 'HomeModernIcon';
      