import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FormatFloatCenterIcon: FC<IconInterface> = function FormatFloatCenterIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatFloatCenterIcon ${className}`;
      return (
        <Icon alt="FormatFloatCenter" className={classNames} {...propsRest}>
          <path d="M9,7H15V13H9V7M3,3H21V5H3V3M3,15H21V17H3V15M3,19H17V21H3V19Z" />

        </Icon>
      );
    };
    FormatFloatCenterIcon.displayName = 'FormatFloatCenterIcon';
      