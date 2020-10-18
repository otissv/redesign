import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const HomeExportOutlineIcon: FC<IconInterface> = function HomeExportOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HomeExportOutlineIcon ${className}`;
      return (
        <Icon alt="HomeExportOutline" className={classNames} {...propsRest}>
          <path d="M24 13L20 9V12H11V14H20V17M18 16V21H2V12H0L10 2L18 10H15L10 5L4 11V19H16V16H18Z" />

        </Icon>
      );
    };
    HomeExportOutlineIcon.displayName = 'HomeExportOutlineIcon';
      