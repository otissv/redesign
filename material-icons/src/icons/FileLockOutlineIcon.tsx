import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FileLockOutlineIcon: FC<IconInterface> = function FileLockOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileLockOutlineIcon ${className}`;
      return (
        <Icon alt="FileLockOutline" className={classNames} {...propsRest}>
          <path d="M14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M18 20H6V4H13V9H18V20M15 15V14C15 12.34 13.66 11 12 11S9 12.36 9 14V15H8V19H16V15H15M13 15H11V14C11 13.45 11.45 13 12 13S13 13.47 13 14V15Z" />

        </Icon>
      );
    };
    FileLockOutlineIcon.displayName = 'FileLockOutlineIcon';
      