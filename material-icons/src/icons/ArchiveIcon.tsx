import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArchiveIcon: FC<IconInterface> = function ArchiveIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArchiveIcon ${className}`;
      return (
        <Icon alt="Archive" className={classNames} {...propsRest}>
          <path d="M3,3H21V7H3V3M4,8H20V21H4V8M9.5,11A0.5,0.5 0 0,0 9,11.5V13H15V11.5A0.5,0.5 0 0,0 14.5,11H9.5Z" />

        </Icon>
      );
    };
    ArchiveIcon.displayName = 'ArchiveIcon';
      