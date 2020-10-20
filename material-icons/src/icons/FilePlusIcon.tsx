import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FilePlusIcon: FC<IconInterface> = function FilePlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FilePlusIcon ${className}`;
      return (
        <Icon alt="FilePlus" className={classNames} {...propsRest}>
          <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M11,15V12H9V15H6V17H9V20H11V17H14V15H11Z" />

        </Icon>
      );
    };
    FilePlusIcon.displayName = 'FilePlusIcon';
      