import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const NoteIcon: FC<IconInterface> = function NoteIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `NoteIcon ${className}`;
      return (
        <Icon alt="Note" className={classNames} {...propsRest}>
          <path d="M14,10V4.5L19.5,10M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V9L15,3H5Z" />

        </Icon>
      );
    };
    NoteIcon.displayName = 'NoteIcon';
      