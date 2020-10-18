import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CursorTextIcon: FC<IconInterface> = function CursorTextIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CursorTextIcon ${className}`;
      return (
        <Icon alt="CursorText" className={classNames} {...propsRest}>
          <path d="M13,19A1,1 0 0,0 14,20H16V22H13.5C12.95,22 12,21.55 12,21C12,21.55 11.05,22 10.5,22H8V20H10A1,1 0 0,0 11,19V5A1,1 0 0,0 10,4H8V2H10.5C11.05,2 12,2.45 12,3C12,2.45 12.95,2 13.5,2H16V4H14A1,1 0 0,0 13,5V19Z" />

        </Icon>
      );
    };
    CursorTextIcon.displayName = 'CursorTextIcon';
      