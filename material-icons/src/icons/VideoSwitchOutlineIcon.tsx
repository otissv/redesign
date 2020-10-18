import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const VideoSwitchOutlineIcon: FC<IconInterface> = function VideoSwitchOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `VideoSwitchOutlineIcon ${className}`;
      return (
        <Icon alt="VideoSwitchOutline" className={classNames} {...propsRest}>
          <path d="M8 13H12V15L15 12L12 9V11H8V9L5 12L8 15V13M18 9.5V6C18 5.4 17.5 5 17 5H3C2.5 5 2 5.4 2 6V18C2 18.5 2.5 19 3 19H17C17.5 19 18 18.5 18 18V14.5L22 18.5V5.5L18 9.5M16 17H4V7H16V17Z" />

        </Icon>
      );
    };
    VideoSwitchOutlineIcon.displayName = 'VideoSwitchOutlineIcon';
      