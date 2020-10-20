import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MusicNoteWholeIcon: FC<IconInterface> = function MusicNoteWholeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MusicNoteWholeIcon ${className}`;
      return (
        <Icon alt="MusicNoteWhole" className={classNames} {...propsRest}>
          <path d="M12 15A2 2 0 1 1 10 17A2 2 0 0 1 12 15M12 13A4 4 0 1 0 16 17A4 4 0 0 0 12 13Z" />

        </Icon>
      );
    };
    MusicNoteWholeIcon.displayName = 'MusicNoteWholeIcon';
      