import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArchiveOutlineIcon: FC<IconInterface> = function ArchiveOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArchiveOutlineIcon ${className}`;
      return (
        <Icon alt="ArchiveOutline" className={classNames} {...propsRest}>
          <path d="M20 21H4V10H6V19H18V10H20V21M3 3H21V9H3V3M9.5 11H14.5C14.78 11 15 11.22 15 11.5V13H9V11.5C9 11.22 9.22 11 9.5 11M5 5V7H19V5H5Z" />

        </Icon>
      );
    };
    ArchiveOutlineIcon.displayName = 'ArchiveOutlineIcon';
      