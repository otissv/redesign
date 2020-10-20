import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const NotebookCheckIcon: FC<IconInterface> = function NotebookCheckIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `NotebookCheckIcon ${className}`;
      return (
        <Icon alt="NotebookCheck" className={classNames} {...propsRest}>
          <path d="M16.75 22.16L14 19.16L15.16 18L16.75 19.59L20.34 16L21.5 17.41L16.75 22.16M3 7V5H5V4C5 2.89 5.9 2 7 2H13V9L15.5 7.5L18 9V2H19C20.05 2 21 2.95 21 4V13.8C20.12 13.29 19.09 13 18 13C14.69 13 12 15.69 12 19C12 20.09 12.29 21.12 12.8 22H7C5.95 22 5 21.05 5 20V19H3V17H5V13H3V11H5V7H3M5 5V7H7V5H5M5 19H7V17H5V19M5 13H7V11H5V13Z" />

        </Icon>
      );
    };
    NotebookCheckIcon.displayName = 'NotebookCheckIcon';
      