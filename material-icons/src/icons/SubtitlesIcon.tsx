import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SubtitlesIcon: FC<IconInterface> = function SubtitlesIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SubtitlesIcon ${className}`;
      return (
        <Icon alt="Subtitles" className={classNames} {...propsRest}>
          <path d="M20,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M4,12H8V14H4V12M14,18H4V16H14V18M20,18H16V16H20V18M20,14H10V12H20V14Z" />

        </Icon>
      );
    };
    SubtitlesIcon.displayName = 'SubtitlesIcon';
      