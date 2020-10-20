import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ChartTreeIcon: FC<IconInterface> = function ChartTreeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChartTreeIcon ${className}`;
      return (
        <Icon alt="ChartTree" className={classNames} {...propsRest}>
          <path d="M14,6H22V22H14V6M2,4H22V2H2V4M2,8H12V6H2V8M9,22H12V10H9V22M2,22H7V10H2V22Z" />

        </Icon>
      );
    };
    ChartTreeIcon.displayName = 'ChartTreeIcon';
      