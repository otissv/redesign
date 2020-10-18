import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FlaskRemoveIcon: FC<IconInterface> = function FlaskRemoveIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FlaskRemoveIcon ${className}`;
      return (
        <Icon alt="FlaskRemove" className={classNames} {...propsRest}>
          <path d="M15.46 15.88L16.88 14.46L19 16.59L21.12 14.47L22.53 15.88L20.41 18L22.54 20.12L21.12 21.54L19 19.41L16.88 21.53L15.47 20.12L17.59 18L15.46 15.88M6 22C4.34 22 3 20.66 3 19C3 18.4 3.18 17.84 3.5 17.36L9 7.81V6C8.45 6 8 5.55 8 5V4C8 2.9 8.9 2 10 2H14C15.11 2 16 2.9 16 4V5C16 5.55 15.55 6 15 6V7.81L17.5 12.18C15.5 12.7 13.86 14.26 13.26 16.26L8.93 11.93L5.18 18.43C5.07 18.59 5 18.79 5 19C5 19.55 5.45 20 6 20H13.34C13.61 20.75 14 21.42 14.53 22H6M13 10C12.45 10 12 10.45 12 11C12 11.55 12.45 12 13 12C13.55 12 14 11.55 14 11C14 10.45 13.55 10 13 10Z" />

        </Icon>
      );
    };
    FlaskRemoveIcon.displayName = 'FlaskRemoveIcon';
      