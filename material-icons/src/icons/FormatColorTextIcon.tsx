import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FormatColorTextIcon: FC<IconInterface> = function FormatColorTextIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatColorTextIcon ${className}`;
      return (
        <Icon alt="FormatColorText" className={classNames} {...propsRest}>
          <path d="M9.62,12L12,5.67L14.37,12M11,3L5.5,17H7.75L8.87,14H15.12L16.25,17H18.5L13,3H11Z" />

        </Icon>
      );
    };
    FormatColorTextIcon.displayName = 'FormatColorTextIcon';
      