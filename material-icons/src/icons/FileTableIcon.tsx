import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FileTableIcon: FC<IconInterface> = function FileTableIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileTableIcon ${className}`;
      return (
        <Icon alt="FileTable" className={classNames} {...propsRest}>
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M10,19H7V17H10V19M10,16H7V14H10V16M10,13H7V11H10V13M14,19H11V17H14V19M14,16H11V14H14V16M14,13H11V11H14V13M13,9V3.5L18.5,9H13Z" />

        </Icon>
      );
    };
    FileTableIcon.displayName = 'FileTableIcon';
      