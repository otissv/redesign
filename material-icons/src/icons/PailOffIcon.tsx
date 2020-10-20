import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PailOffIcon: FC<IconInterface> = function PailOffIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PailOffIcon ${className}`;
      return (
        <Icon alt="PailOff" className={classNames} {...propsRest}>
          <path d="M20.84 22.73L17.35 19.24L17 21H7L5.79 14.97L10.41 12.3L9.31 11.2L4.27 14.11C3.79 14.39 3.18 14.23 2.9 13.75C2.62 13.27 2.79 12.66 3.27 12.38L7.85 9.74L6.75 8.64L4.76 9.79L4 6H3V4.89L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M10.71 6.36C11.09 6.13 11.53 6 12 6C13.38 6 14.5 7.12 14.5 8.5C14.5 9.27 14.16 9.94 13.6 10.4L18.2 15L20 6H21V4H7.2L10 6.78L10.71 6.36M11.5 7.63L11.08 7.88L12.53 9.33C12.97 9.05 13.13 8.46 12.86 8C12.58 7.5 11.97 7.35 11.5 7.63Z" />

        </Icon>
      );
    };
    PailOffIcon.displayName = 'PailOffIcon';
      