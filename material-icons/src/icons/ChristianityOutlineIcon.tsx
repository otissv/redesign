import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ChristianityOutlineIcon: FC<IconInterface> = function ChristianityOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChristianityOutlineIcon ${className}`;
      return (
        <Icon alt="ChristianityOutline" className={classNames} {...propsRest}>
          <path d="M15.5,6V1H8.5V6H3V13H8.5V23H15.5V13H21V6H15.5M19,11H13.5V21H10.5V11H5V8H10.5V3H13.5V8H19V11Z" />

        </Icon>
      );
    };
    ChristianityOutlineIcon.displayName = 'ChristianityOutlineIcon';
      