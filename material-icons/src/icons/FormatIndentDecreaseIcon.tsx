import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormatIndentDecreaseIcon: FC<IconInterface> = function FormatIndentDecreaseIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatIndentDecreaseIcon ${className}`;
      return (
        <Icon alt="FormatIndentDecrease" className={classNames} {...propsRest}>
          <path d="M11,13H21V11H11M11,9H21V7H11M3,3V5H21V3M3,21H21V19H3M3,12L7,16V8M11,17H21V15H11V17Z" />

        </Icon>
      );
    };
    FormatIndentDecreaseIcon.displayName = 'FormatIndentDecreaseIcon';
      