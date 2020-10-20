import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormatPageBreakIcon: FC<IconInterface> = function FormatPageBreakIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatPageBreakIcon ${className}`;
      return (
        <Icon alt="FormatPageBreak" className={classNames} {...propsRest}>
          <path d="M18,20H6V18H4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V18H18V20M14,2H6A2,2 0 0,0 4,4V12H6V4H14V8H18V12H20V8L14,2M11,16H8V14H11V16M16,16H13V14H16V16M3,14H6V16H3V14M21,16H18V14H21V16Z" />

        </Icon>
      );
    };
    FormatPageBreakIcon.displayName = 'FormatPageBreakIcon';
      