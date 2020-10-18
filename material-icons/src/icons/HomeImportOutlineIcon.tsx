import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const HomeImportOutlineIcon: FC<IconInterface> = function HomeImportOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HomeImportOutlineIcon ${className}`;
      return (
        <Icon alt="HomeImportOutline" className={classNames} {...propsRest}>
          <path d="M15 13L11 9V12H2V14H11V17M22 12H20V21H4V16H6V19H18V11L12 5L7 10H4L12 2L22 12Z" />

        </Icon>
      );
    };
    HomeImportOutlineIcon.displayName = 'HomeImportOutlineIcon';
      