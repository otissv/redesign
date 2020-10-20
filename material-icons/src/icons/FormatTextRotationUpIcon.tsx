import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormatTextRotationUpIcon: FC<IconInterface> = function FormatTextRotationUpIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatTextRotationUpIcon ${className}`;
      return (
        <Icon alt="FormatTextRotationUp" className={classNames} {...propsRest}>
          <path d="M3 12V13.5L14 18.25V16.15L11.8 15.25V10.25L14 9.35V7.25L3 12M10 14.62L5 12.75L10 10.88V14.62M18 4.25L15 7.25H17V19.75H19V7.25H21L18 4.25Z" />

        </Icon>
      );
    };
    FormatTextRotationUpIcon.displayName = 'FormatTextRotationUpIcon';
      