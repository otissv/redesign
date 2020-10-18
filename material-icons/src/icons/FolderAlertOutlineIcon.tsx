import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FolderAlertOutlineIcon: FC<IconInterface> = function FolderAlertOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FolderAlertOutlineIcon ${className}`;
      return (
        <Icon alt="FolderAlertOutline" className={classNames} {...propsRest}>
          <path d="M15,12H17V17H15V12M15,18H17V20H15V18M16,9C17.07,9 18.09,9.24 19,9.67V8H3V18H9.29C9.1,17.36 9,16.69 9,16A7,7 0 0,1 16,9M23,16A7,7 0 0,1 16,23C13.62,23 11.5,21.81 10.25,20H3C1.89,20 1,19.1 1,18V6C1,4.89 1.89,4 3,4H9L11,6H19A2,2 0 0,1 21,8V11.1C22.24,12.36 23,14.09 23,16M16,11A5,5 0 0,0 11,16A5,5 0 0,0 16,21A5,5 0 0,0 21,16A5,5 0 0,0 16,11Z" />

        </Icon>
      );
    };
    FolderAlertOutlineIcon.displayName = 'FolderAlertOutlineIcon';
      