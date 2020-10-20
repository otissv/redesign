import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AbjadHebrewIcon: FC<IconInterface> = function AbjadHebrewIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AbjadHebrewIcon ${className}`;
      return (
        <Icon alt="AbjadHebrew" className={classNames} {...propsRest}>
          <path d="M3.9 4L9 10.03C7.58 10.17 6.36 11.18 6 12.59L4 20H6.07L7.92 13.11C8.09 12.46 8.69 12 9.36 12H10.69L17.47 20H20.1L15 13.97C16.42 13.83 17.64 12.82 18 11.41L20 4H17.93L16.08 10.89C15.91 11.54 15.31 12 14.64 12H13.31L6.53 4Z" />

        </Icon>
      );
    };
    AbjadHebrewIcon.displayName = 'AbjadHebrewIcon';
      