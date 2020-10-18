import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ApplicationImportIcon: FC<IconInterface> = function ApplicationImportIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ApplicationImportIcon ${className}`;
      return (
        <Icon alt="ApplicationImport" className={classNames} {...propsRest}>
          <path d="M1,12H10.76L8.26,9.5L9.67,8.08L14.59,13L9.67,17.92L8.26,16.5L10.76,14H1V12M19,3C20.11,3 21,3.9 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V16H5V19H19V7H5V10H3V5A2,2 0 0,1 5,3H19Z" />

        </Icon>
      );
    };
    ApplicationImportIcon.displayName = 'ApplicationImportIcon';
      