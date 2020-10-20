import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FolderUploadIcon: FC<IconInterface> = function FolderUploadIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FolderUploadIcon ${className}`;
      return (
        <Icon alt="FolderUpload" className={classNames} {...propsRest}>
          <path d="M20,6A2,2 0 0,1 22,8V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H10L12,6H20M10.75,13H14V17H16V13H19.25L15,8.75" />

        </Icon>
      );
    };
    FolderUploadIcon.displayName = 'FolderUploadIcon';
      