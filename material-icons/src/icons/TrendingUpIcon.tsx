import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const TrendingUpIcon: FC<IconInterface> = function TrendingUpIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TrendingUpIcon ${className}`;
      return (
        <Icon alt="TrendingUp" className={classNames} {...propsRest}>
          <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z" />

        </Icon>
      );
    };
    TrendingUpIcon.displayName = 'TrendingUpIcon';
      