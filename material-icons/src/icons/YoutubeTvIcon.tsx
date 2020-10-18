import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const YoutubeTvIcon: FC<IconInterface> = function YoutubeTvIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `YoutubeTvIcon ${className}`;
      return (
        <Icon alt="YoutubeTv" className={classNames} {...propsRest}>
          <path d="M2.5,4.5H21.5C22.34,4.5 23,5.15 23,6V17.5C23,18.35 22.34,19 21.5,19H2.5C1.65,19 1,18.35 1,17.5V6C1,5.15 1.65,4.5 2.5,4.5M9.71,8.5V15L15.42,11.7L9.71,8.5M17.25,21H6.65C6.35,21 6.15,20.8 6.15,20.5C6.15,20.2 6.35,20 6.65,20H17.35C17.65,20 17.85,20.2 17.85,20.5C17.85,20.8 17.55,21 17.25,21Z" />

        </Icon>
      );
    };
    YoutubeTvIcon.displayName = 'YoutubeTvIcon';
      