import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const EyeCheckOutlineIcon: FC<IconInterface> = function EyeCheckOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `EyeCheckOutlineIcon ${className}`;
      return (
        <Icon alt="EyeCheckOutline" className={classNames} {...propsRest}>
          <path d="M23.5,17L18.5,22L15,18.5L16.5,17L18.5,19L22,15.5L23.5,17M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.75,12.65 22.44,13.26 22.08,13.85C21.5,13.5 20.86,13.25 20.18,13.12L20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12C4.83,15.36 8.24,17.5 12,17.5L13.21,17.43C13.07,17.93 13,18.46 13,19V19.46L12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5Z" />

        </Icon>
      );
    };
    EyeCheckOutlineIcon.displayName = 'EyeCheckOutlineIcon';
      