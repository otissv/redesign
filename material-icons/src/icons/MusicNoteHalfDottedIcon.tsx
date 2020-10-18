import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MusicNoteHalfDottedIcon: FC<IconInterface> = function MusicNoteHalfDottedIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MusicNoteHalfDottedIcon ${className}`;
      return (
        <Icon alt="MusicNoteHalfDotted" className={classNames} {...propsRest}>
          <path d="M14 3H12V13.56A3.96 3.96 0 0 0 10 13A4 4 0 1 0 14 17V3M10 19A2 2 0 1 1 12 17A2 2 0 0 1 10 19M16.5 20A1.5 1.5 0 1 1 18 18.5A1.5 1.5 0 0 1 16.5 20Z" />

        </Icon>
      );
    };
    MusicNoteHalfDottedIcon.displayName = 'MusicNoteHalfDottedIcon';
      