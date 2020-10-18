import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FileKeyIcon: FC<IconInterface> = function FileKeyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileKeyIcon ${className}`;
      return (
        <Icon alt="FileKey" className={classNames} {...propsRest}>
          <path d="M11 16A1 1 0 1 1 10 15A1 1 0 0 1 11 16M20 8V20A2 2 0 0 1 18 22H6A2 2 0 0 1 4 20V4A2 2 0 0 1 6 2H14M17 15H12.83A3 3 0 1 0 12.83 17H14V19H16V17H17M18.5 9L13 3.5V9Z" />

        </Icon>
      );
    };
    FileKeyIcon.displayName = 'FileKeyIcon';
      