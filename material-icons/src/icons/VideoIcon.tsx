import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const VideoIcon: FC<IconInterface> = function VideoIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `VideoIcon ${className}`;
      return (
        <Icon alt="Video" className={classNames} {...propsRest}>
          <path d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z" />

        </Icon>
      );
    };
    VideoIcon.displayName = 'VideoIcon';
      