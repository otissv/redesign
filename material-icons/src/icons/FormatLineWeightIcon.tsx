import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormatLineWeightIcon: FC<IconInterface> = function FormatLineWeightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatLineWeightIcon ${className}`;
      return (
        <Icon alt="FormatLineWeight" className={classNames} {...propsRest}>
          <path d="M3,17H21V15H3V17M3,20H21V19H3V20M3,13H21V10H3V13M3,4V8H21V4H3Z" />

        </Icon>
      );
    };
    FormatLineWeightIcon.displayName = 'FormatLineWeightIcon';
      