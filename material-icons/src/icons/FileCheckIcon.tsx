import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FileCheckIcon: FC<IconInterface> = function FileCheckIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileCheckIcon ${className}`;
      return (
        <Icon alt="FileCheck" className={classNames} {...propsRest}>
          <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M11.2,18.46L15.95,13.71L14.78,12.3L11.2,15.88L9.61,14.3L8.45,15.46L11.2,18.46Z" />

        </Icon>
      );
    };
    FileCheckIcon.displayName = 'FileCheckIcon';
      