import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MusicNoteEighthDottedIcon: FC<IconInterface> = function MusicNoteEighthDottedIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MusicNoteEighthDottedIcon ${className}`;
      return (
        <Icon alt="MusicNoteEighthDotted" className={classNames} {...propsRest}>
          <path d="M12 3V13.55A4 4 0 1 0 14 17V7H18V3M16.5 20A1.5 1.5 0 1 1 18 18.5A1.5 1.5 0 0 1 16.5 20Z" />

        </Icon>
      );
    };
    MusicNoteEighthDottedIcon.displayName = 'MusicNoteEighthDottedIcon';
      