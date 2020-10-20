import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FileDelimitedIcon: FC<IconInterface> = function FileDelimitedIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileDelimitedIcon ${className}`;
      return (
        <Icon alt="FileDelimited" className={classNames} {...propsRest}>
          <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2M15 16L13 20H10L12 16H9V11H15V16M13 9V3.5L18.5 9H13Z" />

        </Icon>
      );
    };
    FileDelimitedIcon.displayName = 'FileDelimitedIcon';
      