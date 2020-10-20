import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FolderUploadOutlineIcon: FC<IconInterface> = function FolderUploadOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FolderUploadOutlineIcon ${className}`;
      return (
        <Icon alt="FolderUploadOutline" className={classNames} {...propsRest}>
          <path d="M20 18H4V8H20M20 6H12L10 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V8A2 2 0 0 0 20 6M16 17H14V13H11L15 9L19 13H16Z" />

        </Icon>
      );
    };
    FolderUploadOutlineIcon.displayName = 'FolderUploadOutlineIcon';
      