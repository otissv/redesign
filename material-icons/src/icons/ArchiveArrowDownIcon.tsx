import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArchiveArrowDownIcon: FC<IconInterface> = function ArchiveArrowDownIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArchiveArrowDownIcon ${className}`;
      return (
        <Icon alt="ArchiveArrowDown" className={classNames} {...propsRest}>
          <path d="M3 3H21V7H3V3M4 21V8H20V21H4M14 14V11H10V14H7L12 19L17 14H14Z" />

        </Icon>
      );
    };
    ArchiveArrowDownIcon.displayName = 'ArchiveArrowDownIcon';
      