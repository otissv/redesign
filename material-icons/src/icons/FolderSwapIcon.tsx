import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FolderSwapIcon: FC<IconInterface> = function FolderSwapIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FolderSwapIcon ${className}`;
      return (
        <Icon alt="FolderSwap" className={classNames} {...propsRest}>
          <path d="M20 6H12L10 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V8A2 2 0 0 0 20 6M15 16V14H9V16L6 13L9 10V12H15V10L18 13Z" />

        </Icon>
      );
    };
    FolderSwapIcon.displayName = 'FolderSwapIcon';
      