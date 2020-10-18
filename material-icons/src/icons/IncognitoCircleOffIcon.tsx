import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const IncognitoCircleOffIcon: FC<IconInterface> = function IncognitoCircleOffIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `IncognitoCircleOffIcon ${className}`;
      return (
        <Icon alt="IncognitoCircleOff" className={classNames} {...propsRest}>
          <path d="M22.11 21.46L2.39 1.73L1.11 3L4.06 5.95C2.77 7.63 2 9.72 2 12C2 17.5 6.5 22 12 22C14.28 22 16.37 21.23 18.05 19.94L20.84 22.73L22.11 21.46M8.94 10.83H8.36L8.5 10.41L8.94 10.83M6.17 11.5H9.61L10.28 12.17H6.17V11.5M14.92 17.33C13.73 17.33 12.77 16.42 12.67 15.26C12.04 14.86 11.53 15.12 11.33 15.25C11.24 16.42 10.28 17.33 9.08 17.33C7.83 17.33 6.82 16.32 6.82 15.07C6.82 13.82 7.83 12.81 9.08 12.81C10.15 12.81 11.05 13.55 11.29 14.55C11.65 14.4 12.13 14.34 12.65 14.54L13.31 15.2C13.37 16 14 16.61 14.78 16.67L15.38 17.27C15.23 17.3 15.08 17.33 14.92 17.33M9.94 6.74L6.72 3.5C8.25 2.56 10.06 2 12 2C17.5 2 22 6.5 22 12C22 13.94 21.44 15.75 20.5 17.28L15.37 12.17H17.83V11.5H14.7L14.03 10.83H15.64L14.16 6.92L14.15 6.89C14 6.59 13.67 6.43 13.35 6.53L12 7L10.65 6.53L10.61 6.5C10.36 6.45 10.1 6.55 9.94 6.74M10.7 15.07C10.7 15.96 10 16.69 9.08 16.69C8.19 16.69 7.46 15.96 7.46 15.07S8.19 13.45 9.08 13.45C10 13.45 10.7 14.18 10.7 15.07Z" />

        </Icon>
      );
    };
    IncognitoCircleOffIcon.displayName = 'IncognitoCircleOffIcon';
      