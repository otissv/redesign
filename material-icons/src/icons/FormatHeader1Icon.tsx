import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormatHeader1Icon: FC<IconInterface> = function FormatHeader1Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatHeader1Icon ${className}`;
      return (
        <Icon alt="FormatHeader1" className={classNames} {...propsRest}>
          <path d="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M14,18V16H16V6.31L13.5,7.75V5.44L16,4H18V16H20V18H14Z" />

        </Icon>
      );
    };
    FormatHeader1Icon.displayName = 'FormatHeader1Icon';
      