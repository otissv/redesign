import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FormatHorizontalAlignCenterIcon: FC<IconInterface> = function FormatHorizontalAlignCenterIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatHorizontalAlignCenterIcon ${className}`;
      return (
        <Icon alt="FormatHorizontalAlignCenter" className={classNames} {...propsRest}>
          <path d="M19,16V13H23V11H19V8L15,12L19,16M5,8V11H1V13H5V16L9,12L5,8M11,20H13V4H11V20Z" />

        </Icon>
      );
    };
    FormatHorizontalAlignCenterIcon.displayName = 'FormatHorizontalAlignCenterIcon';
      