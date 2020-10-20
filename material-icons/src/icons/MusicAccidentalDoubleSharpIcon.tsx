import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MusicAccidentalDoubleSharpIcon: FC<IconInterface> = function MusicAccidentalDoubleSharpIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MusicAccidentalDoubleSharpIcon ${className}`;
      return (
        <Icon alt="MusicAccidentalDoubleSharp" className={classNames} {...propsRest}>
          <path d="M15.41 10H17V7H14V8.59L12 10.59L10 8.59V7H7V10H8.59L10.59 12L8.59 14H7V17H10V15.41L12 13.41L14 15.41V17H17V14H15.41L13.41 12L15.41 10Z" />

        </Icon>
      );
    };
    MusicAccidentalDoubleSharpIcon.displayName = 'MusicAccidentalDoubleSharpIcon';
      