import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const VideoBoxIcon: FC<IconInterface> = function VideoBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `VideoBoxIcon ${className}`;
      return (
        <Icon alt="VideoBox" className={classNames} {...propsRest}>
          <path d="M18,16L14,12.8V16H6V8H14V11.2L18,8M20,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />

        </Icon>
      );
    };
    VideoBoxIcon.displayName = 'VideoBoxIcon';
      