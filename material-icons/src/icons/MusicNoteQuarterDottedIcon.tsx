import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MusicNoteQuarterDottedIcon: FC<IconInterface> = function MusicNoteQuarterDottedIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MusicNoteQuarterDottedIcon ${className}`;
      return (
        <Icon alt="MusicNoteQuarterDotted" className={classNames} {...propsRest}>
          <path d="M12 13V13.56A3.96 3.96 0 0 0 10 13A4 4 0 1 0 14 17V3H12M16.5 17A1.5 1.5 0 1 1 15 18.5A1.5 1.5 0 0 1 16.5 17Z" />

        </Icon>
      );
    };
    MusicNoteQuarterDottedIcon.displayName = 'MusicNoteQuarterDottedIcon';
      