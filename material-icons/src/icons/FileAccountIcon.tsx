import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FileAccountIcon: FC<IconInterface> = function FileAccountIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileAccountIcon ${className}`;
      return (
        <Icon alt="FileAccount" className={classNames} {...propsRest}>
          <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M14,20V19C14,17.67 11.33,17 10,17C8.67,17 6,17.67 6,19V20H14M10,12A2,2 0 0,0 8,14A2,2 0 0,0 10,16A2,2 0 0,0 12,14A2,2 0 0,0 10,12Z" />

        </Icon>
      );
    };
    FileAccountIcon.displayName = 'FileAccountIcon';
      