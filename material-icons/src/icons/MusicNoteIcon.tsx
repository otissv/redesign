import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MusicNoteIcon: FC<IconInterface> = function MusicNoteIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MusicNoteIcon ${className}`;
      return (
        <Icon alt="MusicNote" className={classNames} {...propsRest}>
          <path d="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17S7.79 21 10 21 14 19.21 14 17V7H18V3H12Z" />

        </Icon>
      );
    };
    MusicNoteIcon.displayName = 'MusicNoteIcon';
      