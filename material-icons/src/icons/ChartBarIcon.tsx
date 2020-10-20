import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ChartBarIcon: FC<IconInterface> = function ChartBarIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChartBarIcon ${className}`;
      return (
        <Icon alt="ChartBar" className={classNames} {...propsRest}>
          <path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z" />

        </Icon>
      );
    };
    ChartBarIcon.displayName = 'ChartBarIcon';
      