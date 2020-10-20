import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FileTableBoxIcon: FC<IconInterface> = function FileTableBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileTableBoxIcon ${className}`;
      return (
        <Icon alt="FileTableBox" className={classNames} {...propsRest}>
          <path d="M19 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3M9 18H6V16H9V18M9 15H6V13H9V15M9 12H6V10H9V12M13 18H10V16H13V18M13 15H10V13H13V15M13 12H10V10H13V12Z" />

        </Icon>
      );
    };
    FileTableBoxIcon.displayName = 'FileTableBoxIcon';
      