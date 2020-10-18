import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const HomeCircleOutlineIcon: FC<IconInterface> = function HomeCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HomeCircleOutlineIcon ${className}`;
      return (
        <Icon alt="HomeCircleOutline" className={classNames} {...propsRest}>
          <path d="M12 20C7.6 20 4 16.4 4 12S7.6 4 12 4 20 7.6 20 12 16.4 20 12 20M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M11 14H13V17H16V12H18L12 7L6 12H8V17H11V14" />

        </Icon>
      );
    };
    HomeCircleOutlineIcon.displayName = 'HomeCircleOutlineIcon';
      