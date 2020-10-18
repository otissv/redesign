import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FileTableBoxMultipleIcon: FC<IconInterface> = function FileTableBoxMultipleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileTableBoxMultipleIcon ${className}`;
      return (
        <Icon alt="FileTableBoxMultiple" className={classNames} {...propsRest}>
          <path d="M3 5V21H19V23H3C1.9 23 1 22.1 1 21V5H3M21 1H7C5.89 1 5 1.89 5 3V17C5 18.11 5.9 19 7 19H21C22.11 19 23 18.11 23 17V3C23 1.89 22.1 1 21 1M11 16H8V14H11V16M11 13H8V11H11V13M11 10H8V8H11V10M15 16H12V14H15V16M15 13H12V11H15V13M15 10H12V8H15V10Z" />

        </Icon>
      );
    };
    FileTableBoxMultipleIcon.displayName = 'FileTableBoxMultipleIcon';
      