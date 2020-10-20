import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const NotebookEditIcon: FC<IconInterface> = function NotebookEditIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `NotebookEditIcon ${className}`;
      return (
        <Icon alt="NotebookEdit" className={classNames} {...propsRest}>
          <path d="M21.04 13.13C21.18 13.13 21.31 13.19 21.42 13.3L22.7 14.58C22.92 14.79 22.92 15.14 22.7 15.35L21.7 16.35L19.65 14.3L20.65 13.3C20.76 13.19 20.9 13.13 21.04 13.13M19.07 14.88L21.12 16.93L15.06 23H13V20.94L19.07 14.88M3 7V5H5V4C5 2.89 5.9 2 7 2H13V9L15.5 7.5L18 9V2H19C20.05 2 21 2.95 21 4V10L11 20V22H7C5.95 22 5 21.05 5 20V19H3V17H5V13H3V11H5V7H3M5 7H7V5H5V7M5 11V13H7V11H5M5 17V19H7V17H5Z" />

        </Icon>
      );
    };
    NotebookEditIcon.displayName = 'NotebookEditIcon';
      