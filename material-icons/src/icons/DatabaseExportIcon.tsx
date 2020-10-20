import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const DatabaseExportIcon: FC<IconInterface> = function DatabaseExportIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DatabaseExportIcon ${className}`;
      return (
        <Icon alt="DatabaseExport" className={classNames} {...propsRest}>
          <path d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C12.5,11 13,10.97 13.5,10.92V9.5H16.39L15.39,8.5L18.9,5C17.5,3.8 14.94,3 12,3M18.92,7.08L17.5,8.5L20,11H15V13H20L17.5,15.5L18.92,16.92L23.84,12M4,9V12C4,14.21 7.58,16 12,16C13.17,16 14.26,15.85 15.25,15.63L16.38,14.5H13.5V12.92C13,12.97 12.5,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C14.94,21 17.5,20.2 18.9,19L17,17.1C15.61,17.66 13.9,18 12,18C7.58,18 4,16.21 4,14Z" />

        </Icon>
      );
    };
    DatabaseExportIcon.displayName = 'DatabaseExportIcon';
      