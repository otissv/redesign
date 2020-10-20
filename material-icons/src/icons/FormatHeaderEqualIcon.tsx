import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormatHeaderEqualIcon: FC<IconInterface> = function FormatHeaderEqualIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatHeaderEqualIcon ${className}`;
      return (
        <Icon alt="FormatHeaderEqual" className={classNames} {...propsRest}>
          <path d="M4,4H6V10H10V4H12V18H10V12H6V18H4V4M14,10V8H21V10H14M14,12H21V14H14V12Z" />

        </Icon>
      );
    };
    FormatHeaderEqualIcon.displayName = 'FormatHeaderEqualIcon';
      