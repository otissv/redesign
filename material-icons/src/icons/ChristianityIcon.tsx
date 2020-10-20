import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ChristianityIcon: FC<IconInterface> = function ChristianityIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChristianityIcon ${className}`;
      return (
        <Icon alt="Christianity" className={classNames} {...propsRest}>
          <path d="M10.5,2H13.5V8H19V11H13.5V22H10.5V11H5V8H10.5V2Z" />

        </Icon>
      );
    };
    ChristianityIcon.displayName = 'ChristianityIcon';
      