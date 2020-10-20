import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FolderSettingsIcon: FC<IconInterface> = function FolderSettingsIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FolderSettingsIcon ${className}`;
      return (
        <Icon alt="FolderSettings" className={classNames} {...propsRest}>
          <path d="M4 4C2.89 4 2 4.89 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V8C22 6.89 21.1 6 20 6H12L10 4H4M7 22V24H9V22H7M11 22V24H13V22H11M15 22V24H17V22H15Z" />

        </Icon>
      );
    };
    FolderSettingsIcon.displayName = 'FolderSettingsIcon';
      