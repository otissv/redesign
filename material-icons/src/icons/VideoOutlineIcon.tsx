import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const VideoOutlineIcon: FC<IconInterface> = function VideoOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `VideoOutlineIcon ${className}`;
      return (
        <Icon alt="VideoOutline" className={classNames} {...propsRest}>
          <path d="M15,8V16H5V8H15M16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5V7A1,1 0 0,0 16,6Z" />

        </Icon>
      );
    };
    VideoOutlineIcon.displayName = 'VideoOutlineIcon';
      