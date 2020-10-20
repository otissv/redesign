import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FileTreeIcon: FC<IconInterface> = function FileTreeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileTreeIcon ${className}`;
      return (
        <Icon alt="FileTree" className={classNames} {...propsRest}>
          <path d="M3,3H9V7H3V3M15,10H21V14H15V10M15,17H21V21H15V17M13,13H7V18H13V20H7L5,20V9H7V11H13V13Z" />

        </Icon>
      );
    };
    FileTreeIcon.displayName = 'FileTreeIcon';
      