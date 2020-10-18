import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const GoogleDriveIcon: FC<IconInterface> = function GoogleDriveIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GoogleDriveIcon ${className}`;
      return (
        <Icon alt="GoogleDrive" className={classNames} {...propsRest}>
          <path d="M7.71,3.5L1.15,15L4.58,21L11.13,9.5M9.73,15L6.3,21H19.42L22.85,15M22.28,14L15.42,2H8.58L8.57,2L15.43,14H22.28Z" />

        </Icon>
      );
    };
    GoogleDriveIcon.displayName = 'GoogleDriveIcon';
      