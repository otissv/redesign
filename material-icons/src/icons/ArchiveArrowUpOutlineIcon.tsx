import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArchiveArrowUpOutlineIcon: FC<IconInterface> = function ArchiveArrowUpOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArchiveArrowUpOutlineIcon ${className}`;
      return (
        <Icon alt="ArchiveArrowUpOutline" className={classNames} {...propsRest}>
          <path d="M20 21H4V10H6V19H18V10H20V21M3 3H21V9H3V3M5 5V7H19V5M10.5 17V14H8L12 10L16 14H13.5V17" />

        </Icon>
      );
    };
    ArchiveArrowUpOutlineIcon.displayName = 'ArchiveArrowUpOutlineIcon';
      