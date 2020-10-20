import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormatHorizontalAlignRightIcon: FC<IconInterface> = function FormatHorizontalAlignRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatHorizontalAlignRightIcon ${className}`;
      return (
        <Icon alt="FormatHorizontalAlignRight" className={classNames} {...propsRest}>
          <path d="M13,8V11H3V13H13V16L17,12L13,8M19,20H21V4H19V20Z" />

        </Icon>
      );
    };
    FormatHorizontalAlignRightIcon.displayName = 'FormatHorizontalAlignRightIcon';
      