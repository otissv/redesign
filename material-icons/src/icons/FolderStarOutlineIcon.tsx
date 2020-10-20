import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FolderStarOutlineIcon: FC<IconInterface> = function FolderStarOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FolderStarOutlineIcon ${className}`;
      return (
        <Icon alt="FolderStarOutline" className={classNames} {...propsRest}>
          <path d="M10.78 12.05L13.81 11.79L15 9L16.19 11.79L19.22 12.05L16.92 14.04L17.61 17L15 15.47L12.39 17L13.08 14.04L10.78 12.05M22 8V18C22 19.11 21.11 20 20 20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.9 4 4 4H10L12 6H20C21.11 6 22 6.9 22 8M20 8H4V18H20V8Z" />

        </Icon>
      );
    };
    FolderStarOutlineIcon.displayName = 'FolderStarOutlineIcon';
      