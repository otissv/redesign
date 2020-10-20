import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormatTextRotationVerticalIcon: FC<IconInterface> = function FormatTextRotationVerticalIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatTextRotationVerticalIcon ${className}`;
      return (
        <Icon alt="FormatTextRotationVertical" className={classNames} {...propsRest}>
          <path d="M15.75 5H14.25L9.5 16H11.6L12.5 13.8H17.5L18.4 16H20.5L15.75 5M13.13 12L15 7L16.87 12H13.13M6 19.75L9 16.75H7V4.25H5V16.75H3L6 19.75Z" />

        </Icon>
      );
    };
    FormatTextRotationVerticalIcon.displayName = 'FormatTextRotationVerticalIcon';
      