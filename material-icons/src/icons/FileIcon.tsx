import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FileIcon: FC<IconInterface> = function FileIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileIcon ${className}`;
      return (
        <Icon alt="File" className={classNames} {...propsRest}>
          <path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />

        </Icon>
      );
    };
    FileIcon.displayName = 'FileIcon';
      