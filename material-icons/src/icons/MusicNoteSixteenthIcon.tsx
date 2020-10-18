import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MusicNoteSixteenthIcon: FC<IconInterface> = function MusicNoteSixteenthIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MusicNoteSixteenthIcon ${className}`;
      return (
        <Icon alt="MusicNoteSixteenth" className={classNames} {...propsRest}>
          <path d="M18 7V3H12V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17S7.79 21 10 21 14 19.21 14 17V11H18V8H14V7H18Z" />

        </Icon>
      );
    };
    MusicNoteSixteenthIcon.displayName = 'MusicNoteSixteenthIcon';
      