import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const LipstickIcon: FC<IconInterface> = function LipstickIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LipstickIcon ${className}`;
      return (
        <Icon alt="Lipstick" className={classNames} {...propsRest}>
          <path d="M9 23C8.45 23 8 22.55 8 22V13C8 12.45 8.45 12 9 12H15C15.55 12 16 12.45 16 13V22C16 22.55 15.55 23 15 23H9M10 11C9.45 11 9 10.55 9 10V5.25C9 5.25 11 3 11.75 1C12.83 1.67 13.92 2.33 14.46 3.83C15 5.33 15 7.67 15 10C15 10.55 14.55 11 14 11H10Z" />

        </Icon>
      );
    };
    LipstickIcon.displayName = 'LipstickIcon';
      