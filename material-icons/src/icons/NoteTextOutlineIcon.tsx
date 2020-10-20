import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const NoteTextOutlineIcon: FC<IconInterface> = function NoteTextOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `NoteTextOutlineIcon ${className}`;
      return (
        <Icon alt="NoteTextOutline" className={classNames} {...propsRest}>
          <path d="M15 3H5A2 2 0 0 0 3 5V19A2 2 0 0 0 5 21H19A2 2 0 0 0 21 19V9L15 3M19 19H5V5H14V10H19M17 14H7V12H17M14 17H7V15H14" />

        </Icon>
      );
    };
    NoteTextOutlineIcon.displayName = 'NoteTextOutlineIcon';
      