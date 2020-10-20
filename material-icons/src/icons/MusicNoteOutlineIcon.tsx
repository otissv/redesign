import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MusicNoteOutlineIcon: FC<IconInterface> = function MusicNoteOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MusicNoteOutlineIcon ${className}`;
      return (
        <Icon alt="MusicNoteOutline" className={classNames} {...propsRest}>
          <path d="M12 3V13.55A4 4 0 1 0 14 17V7H18V3M10 19A2 2 0 1 1 12 17A2 2 0 0 1 10 19Z" />

        </Icon>
      );
    };
    MusicNoteOutlineIcon.displayName = 'MusicNoteOutlineIcon';
      