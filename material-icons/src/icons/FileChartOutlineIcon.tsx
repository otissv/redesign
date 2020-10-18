import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FileChartOutlineIcon: FC<IconInterface> = function FileChartOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileChartOutlineIcon ${className}`;
      return (
        <Icon alt="FileChartOutline" className={classNames} {...propsRest}>
          <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2M18 20H6V4H13V9H18V20M9 13V19H7V13H9M15 15V19H17V15H15M11 11V19H13V11H11Z" />

        </Icon>
      );
    };
    FileChartOutlineIcon.displayName = 'FileChartOutlineIcon';
      