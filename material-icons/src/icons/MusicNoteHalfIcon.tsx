import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MusicNoteHalfIcon: FC<IconInterface> = function MusicNoteHalfIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MusicNoteHalfIcon ${className}`;
      return (
        <Icon alt="MusicNoteHalf" className={classNames} {...propsRest}>
          <path d="M16 3H14V13.56A3.96 3.96 0 0 0 12 13A4 4 0 1 0 16 17V3M12 19A2 2 0 1 1 14 17A2 2 0 0 1 12 19Z" />

        </Icon>
      );
    };
    MusicNoteHalfIcon.displayName = 'MusicNoteHalfIcon';
      