import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FormatColumnsIcon: FC<IconInterface> = function FormatColumnsIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatColumnsIcon ${className}`;
      return (
        <Icon alt="FormatColumns" className={classNames} {...propsRest}>
          <path d="M3,3H11V5H3V3M13,3H21V5H13V3M3,7H11V9H3V7M13,7H21V9H13V7M3,11H11V13H3V11M13,11H21V13H13V11M3,15H11V17H3V15M13,15H21V17H13V15M3,19H11V21H3V19M13,19H21V21H13V19Z" />

        </Icon>
      );
    };
    FormatColumnsIcon.displayName = 'FormatColumnsIcon';
      