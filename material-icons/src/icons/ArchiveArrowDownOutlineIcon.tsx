import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArchiveArrowDownOutlineIcon: FC<IconInterface> = function ArchiveArrowDownOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArchiveArrowDownOutlineIcon ${className}`;
      return (
        <Icon alt="ArchiveArrowDownOutline" className={classNames} {...propsRest}>
          <path d="M20 21H4V10H6V19H18V10H20V21M3 3H21V9H3V3M5 5V7H19V5M10.5 11V14H8L12 18L16 14H13.5V11" />

        </Icon>
      );
    };
    ArchiveArrowDownOutlineIcon.displayName = 'ArchiveArrowDownOutlineIcon';
      