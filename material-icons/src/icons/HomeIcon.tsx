import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const HomeIcon: FC<IconInterface> = function HomeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HomeIcon ${className}`;
      return (
        <Icon alt="Home" className={classNames} {...propsRest}>
          <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />

        </Icon>
      );
    };
    HomeIcon.displayName = 'HomeIcon';
      