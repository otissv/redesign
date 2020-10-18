import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const RenameBoxIcon: FC<IconInterface> = function RenameBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RenameBoxIcon ${className}`;
      return (
        <Icon alt="RenameBox" className={classNames} {...propsRest}>
          <path d="M18,17H10.5L12.5,15H18M6,17V14.5L13.88,6.65C14.07,6.45 14.39,6.45 14.59,6.65L16.35,8.41C16.55,8.61 16.55,8.92 16.35,9.12L8.47,17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />

        </Icon>
      );
    };
    RenameBoxIcon.displayName = 'RenameBoxIcon';
      