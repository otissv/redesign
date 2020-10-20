import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ExportIcon: FC<IconInterface> = function ExportIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ExportIcon ${className}`;
      return (
        <Icon alt="Export" className={classNames} {...propsRest}>
          <path d="M23,12L19,8V11H10V13H19V16M1,18V6C1,4.89 1.9,4 3,4H15A2,2 0 0,1 17,6V9H15V6H3V18H15V15H17V18A2,2 0 0,1 15,20H3A2,2 0 0,1 1,18Z" />

        </Icon>
      );
    };
    ExportIcon.displayName = 'ExportIcon';
      