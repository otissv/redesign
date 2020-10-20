import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ChartPpfIcon: FC<IconInterface> = function ChartPpfIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChartPpfIcon ${className}`;
      return (
        <Icon alt="ChartPpf" className={classNames} {...propsRest}>
          <path d="M5 6V8C8.2 8 11.36 9.18 13.57 11.15C15.64 13 16.83 15.5 17 18H18.97A14 12.5 0 0 0 5 6M22 21H2V3H4V19H22Z" />

        </Icon>
      );
    };
    ChartPpfIcon.displayName = 'ChartPpfIcon';
      