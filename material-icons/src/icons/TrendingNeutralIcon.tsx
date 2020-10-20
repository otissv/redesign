import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TrendingNeutralIcon: FC<IconInterface> = function TrendingNeutralIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TrendingNeutralIcon ${className}`;
      return (
        <Icon alt="TrendingNeutral" className={classNames} {...propsRest}>
          <path d="M22,12L18,8V11H3V13H18V16L22,12Z" />

        </Icon>
      );
    };
    TrendingNeutralIcon.displayName = 'TrendingNeutralIcon';
      