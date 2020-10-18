import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FormatHorizontalAlignLeftIcon: FC<IconInterface> = function FormatHorizontalAlignLeftIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatHorizontalAlignLeftIcon ${className}`;
      return (
        <Icon alt="FormatHorizontalAlignLeft" className={classNames} {...propsRest}>
          <path d="M11,16V13H21V11H11V8L7,12L11,16M3,20H5V4H3V20Z" />

        </Icon>
      );
    };
    FormatHorizontalAlignLeftIcon.displayName = 'FormatHorizontalAlignLeftIcon';
      