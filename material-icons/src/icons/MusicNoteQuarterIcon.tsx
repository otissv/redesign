import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MusicNoteQuarterIcon: FC<IconInterface> = function MusicNoteQuarterIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MusicNoteQuarterIcon ${className}`;
      return (
        <Icon alt="MusicNoteQuarter" className={classNames} {...propsRest}>
          <path d="M14 3V13.56C13.41 13.21 12.73 13 12 13C9.79 13 8 14.79 8 17S9.79 21 12 21 16 19.21 16 17V3H14Z" />

        </Icon>
      );
    };
    MusicNoteQuarterIcon.displayName = 'MusicNoteQuarterIcon';
      