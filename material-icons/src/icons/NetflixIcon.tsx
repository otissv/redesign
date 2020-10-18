import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const NetflixIcon: FC<IconInterface> = function NetflixIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `NetflixIcon ${className}`;
      return (
        <Icon alt="Netflix" className={classNames} {...propsRest}>
          <path d="M6.5,2H10.5L13.44,10.83L13.5,2H17.5V22C16.25,21.78 14.87,21.64 13.41,21.58L10.5,13L10.43,21.59C9.03,21.65 7.7,21.79 6.5,22V2Z" />

        </Icon>
      );
    };
    NetflixIcon.displayName = 'NetflixIcon';
      