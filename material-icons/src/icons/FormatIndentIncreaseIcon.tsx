import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormatIndentIncreaseIcon: FC<IconInterface> = function FormatIndentIncreaseIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatIndentIncreaseIcon ${className}`;
      return (
        <Icon alt="FormatIndentIncrease" className={classNames} {...propsRest}>
          <path d="M11,13H21V11H11M11,9H21V7H11M3,3V5H21V3M11,17H21V15H11M3,8V16L7,12M3,21H21V19H3V21Z" />

        </Icon>
      );
    };
    FormatIndentIncreaseIcon.displayName = 'FormatIndentIncreaseIcon';
      