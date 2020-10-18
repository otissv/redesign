import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const VideoMinusOutlineIcon: FC<IconInterface> = function VideoMinusOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `VideoMinusOutlineIcon ${className}`;
      return (
        <Icon alt="VideoMinusOutline" className={classNames} {...propsRest}>
          <path d="M15 8V16H5V8H15M16 6H4C3.45 6 3 6.45 3 7V17C3 17.55 3.45 18 4 18H16C16.55 18 17 17.55 17 17V13.5L21 17.5V6.5L17 10.5V7C17 6.45 16.55 6 16 6M13 13H7V11H13V13Z" />

        </Icon>
      );
    };
    VideoMinusOutlineIcon.displayName = 'VideoMinusOutlineIcon';
      