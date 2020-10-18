import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CompassRoseIcon: FC<IconInterface> = function CompassRoseIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CompassRoseIcon ${className}`;
      return (
        <Icon alt="CompassRose" className={classNames} {...propsRest}>
          <path d="M15 9L12 0L9 9L0 12L9 15L12 24L15 15L24 12L15 9M4 12L10 10L11 12H4M12 20L10 14L12 13V20M12 4L14 10L12 11V4M14 14L13 12H20L14 14M8.7 17.3L5 19L6.7 15.3L8.3 15.8L8.7 17.3M17.3 15.3L19 19L15.3 17.3L15.8 15.7L17.3 15.3M6.7 8.7L5 5L8.7 6.7L8.2 8.2L6.7 8.7M15.3 6.7L19 5L17.3 8.7L15.7 8.2L15.3 6.7Z" />

        </Icon>
      );
    };
    CompassRoseIcon.displayName = 'CompassRoseIcon';
      