import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FormatHeader4Icon: FC<IconInterface> = function FormatHeader4Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatHeader4Icon ${className}`;
      return (
        <Icon alt="FormatHeader4" className={classNames} {...propsRest}>
          <path d="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M18,18V13H13V11L18,4H20V11H21V13H20V18H18M18,11V7.42L15.45,11H18Z" />

        </Icon>
      );
    };
    FormatHeader4Icon.displayName = 'FormatHeader4Icon';
      