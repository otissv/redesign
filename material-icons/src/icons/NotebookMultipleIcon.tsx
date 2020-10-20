import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const NotebookMultipleIcon: FC<IconInterface> = function NotebookMultipleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `NotebookMultipleIcon ${className}`;
      return (
        <Icon alt="NotebookMultiple" className={classNames} {...propsRest}>
          <path d="M9.05,9H7.06V6H9.05V4.03H7.06V3.03C7.06,1.92 7.95,1.04 9.05,1.04H15.03V8L17.5,6.5L20,8V1.04H21C22.05,1.04 23,2 23,3.03V17C23,18.03 22.05,19 21,19H9.05C8,19 7.06,18.05 7.06,17V16H9.05V14H7.06V11H9.05V9M1,18H3V15H1V13H3V10H1V8H3V5H5V8H3V10H5V13H3V15H5V18H3V20H5V21H21V23H5A2,2 0 0,1 3,21V20H1V18Z" />

        </Icon>
      );
    };
    NotebookMultipleIcon.displayName = 'NotebookMultipleIcon';
      