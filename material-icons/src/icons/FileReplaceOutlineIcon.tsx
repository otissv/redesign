import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FileReplaceOutlineIcon: FC<IconInterface> = function FileReplaceOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileReplaceOutlineIcon ${className}`;
      return (
        <Icon alt="FileReplaceOutline" className={classNames} {...propsRest}>
          <path d="M14,3L12,1H4A2,2 0 0,0 2,3V15A2,2 0 0,0 4,17H11V19L15,16L11,13V15H4V3H14M21,10V21A2,2 0 0,1 19,23H8A2,2 0 0,1 6,21V19H8V21H19V12H14V7H8V13H6V7A2,2 0 0,1 8,5H16L21,10Z" />

        </Icon>
      );
    };
    FileReplaceOutlineIcon.displayName = 'FileReplaceOutlineIcon';
      